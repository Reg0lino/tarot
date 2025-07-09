# download_images.py (Final, with User-Agent and file checking)
import requests
import json
import os
import re
import shutil


def get_wikimedia_links(headers):
    """Fetches all Rider-Waite tarot card image URLs from Wikimedia Commons."""
    api_url = "https://commons.wikimedia.org/w/api.php"
    params = {
        'action': 'query',
        'list': 'categorymembers',
        'cmtitle': 'Category:Rider-Waite tarot deck (Roses & Lilies)',
        'cmlimit': '500',
        'format': 'json'
    }

    print("Fetching list of images from Wikimedia Commons...")
    try:
        # Use the headers for the API request
        response = requests.get(api_url, params=params, headers=headers)
        response.raise_for_status()
        data = response.json()
        if 'error' in data:
            print(f"API Error: {data['error']}")
            return []
        files = data['query']['categorymembers']
        print(f"Found {len(files)} files in category.")
    except requests.exceptions.RequestException as e:
        print(f"Network error fetching category members: {e}")
        return []
    except json.JSONDecodeError:
        print("Failed to decode JSON from category members response.")
        return []

    urls = []
    print("Processing metadata for all files...")
    for i, file_info in enumerate(files):
        filename = file_info['title']

        params = {
            'action': 'query',
            'titles': filename,
            'prop': 'imageinfo',
            'iiprop': 'url',
            'format': 'json'
        }
        try:
            # Use the headers for the API request
            response = requests.get(api_url, params=params, headers=headers)
            response.raise_for_status()
            data = response.json()
            pages = data['query']['pages']
            for page_id, page_data in pages.items():
                if 'imageinfo' in page_data:
                    image_url = page_data['imageinfo'][0]['url']
                    urls.append({
                        'wikimedia_filename': filename.replace('File:', ''),
                        'url': image_url
                    })
        except requests.exceptions.RequestException as e:
            print(
                f"    - Network error fetching image info for {filename}: {e}")
        except json.JSONDecodeError:
            print(f"    - Failed to decode JSON for {filename} info.")

    return urls


def get_new_filename(wikimedia_filename):
    """Converts a Wikimedia filename to the simple format used in the JS."""
    major_match = re.search(r' - (\d{2}) ', wikimedia_filename)
    if major_match:
        card_num = major_match.group(1)
        return f"m{card_num}.jpg"

    minor_match = re.search(
        r' - (Wands|Cups|Swords|Pentacles) (\d{2})', wikimedia_filename)
    if minor_match:
        suit_char = minor_match.group(1)[0].lower()
        card_num = minor_match.group(2)
        return f"{suit_char}{card_num}.jpg"

    return None


def download_images(card_list, headers, target_folder='img/cards'):
    """Downloads images, skipping any that already exist."""
    if not card_list:
        print("No card links provided. Nothing to download.")
        return

    print(f"\nEnsuring target folder exists: '{target_folder}'")
    os.makedirs(target_folder, exist_ok=True)

    downloaded_count = 0
    skipped_pattern_count = 0
    already_exists_count = 0
    error_count = 0

    print("\nStarting image processing...")
    for card in card_list:
        new_name = get_new_filename(card['wikimedia_filename'])

        if not new_name:
            skipped_pattern_count += 1
            continue

        save_path = os.path.join(target_folder, new_name)

        # --- THIS IS THE NEW CHECK ---
        # If the file already exists, skip downloading it again.
        if os.path.exists(save_path):
            print(f"  - Skipping '{new_name}' (already exists).")
            already_exists_count += 1
            continue
        # ---------------------------

        print(
            f"  - Downloading '{card['wikimedia_filename']}' -> '{new_name}'...")
        try:
            # Use the headers for the download request
            response = requests.get(card['url'], stream=True, headers=headers)
            response.raise_for_status()
            with open(save_path, 'wb') as f:
                shutil.copyfileobj(response.raw, f)
            downloaded_count += 1
        except requests.exceptions.RequestException as e:
            print(
                f"    - ERROR: Could not download {card['url']}. Reason: {e}")
            error_count += 1

    print("\n--- Download Report ---")
    print(f"Newly Downloaded: {downloaded_count} images.")
    print(f"Already Existed (Skipped): {already_exists_count} images.")
    print(f"Skipped (non-card pattern): {skipped_pattern_count} files.")
    print(f"Errors: {error_count}.")
    print("-------------------------")


if __name__ == "__main__":
    try:
        # --- THIS IS THE NEW HEADER ---
        # It's good practice to identify your script. You can change this to your details.
        request_headers = {
            'User-Agent': 'DigitalDivinationImageDownloader/1.1 (https://example.com/contact; your-email@example.com)'
        }
        # -----------------------------

        # 1. Get the list of all image URLs from Wikimedia
        links_to_download = get_wikimedia_links(request_headers)

        # 2. Download the images, passing in the headers
        download_images(links_to_download, request_headers)

    except Exception as e:
        print(f"\nAn unexpected error occurred: {e}")
