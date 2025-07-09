# tarot_scraper.py
import requests
import json
import os


def get_tarot_card_links():
    """Get all tarot card PNG links from Wikimedia Commons"""

    # Get all files in the category
    api_url = "https://commons.wikimedia.org/w/api.php"
    params = {
        'action': 'query',
        'list': 'categorymembers',
        'cmtitle': 'Category:Rider-Waite tarot deck (Roses & Lilies)',
        'cmlimit': '500',
        'format': 'json'
    }

    print("Fetching category members...")
    response = requests.get(api_url, params=params)

    # Debug: Print the response
    print(f"Response status code: {response.status_code}")
    print(f"Response URL: {response.url}")

    try:
        data = response.json()
        print(f"API Response keys: {list(data.keys())}")

        # Check if there's an error in the response
        if 'error' in data:
            print(f"API Error: {data['error']}")
            return []

        if 'query' not in data:
            print("Full API response:")
            print(json.dumps(data, indent=2))
            return []

        files = data['query']['categorymembers']
        print(f"Found {len(files)} files in category")

    except requests.exceptions.JSONDecodeError as e:
        print(f"JSON decode error: {e}")
        print(f"Response content: {response.text[:500]}...")
        return []

    # Get direct URLs for each file
    urls = []
    for i, file_info in enumerate(files):
        filename = file_info['title']
        print(f"Processing {i+1}/{len(files)}: {filename}")

        # Get the direct image URL
        params = {
            'action': 'query',
            'titles': filename,
            'prop': 'imageinfo',
            'iiprop': 'url',
            'format': 'json'
        }

        response = requests.get(api_url, params=params)
        data = response.json()

        pages = data['query']['pages']
        for page_id, page_data in pages.items():
            if 'imageinfo' in page_data:
                image_url = page_data['imageinfo'][0]['url']
                urls.append({
                    'filename': filename.replace('File:', ''),
                    'url': image_url
                })

    return urls


def save_links_to_file(links, filename='tarot_links.json'):
    """Save links to a JSON file"""
    with open(filename, 'w') as f:
        json.dump(links, f, indent=2)
    print(f"Links saved to {filename}")


def save_links_to_txt(links, filename='tarot_links.txt'):
    """Save links to a text file"""
    with open(filename, 'w') as f:
        for card in links:
            f.write(f"{card['filename']}: {card['url']}\n")
    print(f"Links saved to {filename}")


if __name__ == "__main__":
    try:
        # Get the links
        tarot_links = get_tarot_card_links()

        # Save to both JSON and TXT
        save_links_to_file(tarot_links)
        save_links_to_txt(tarot_links)

        print(f"\nFound {len(tarot_links)} tarot card images:")
        for card in tarot_links[:5]:  # Show first 5 as preview
            print(f"  {card['filename']}: {card['url']}")

        if len(tarot_links) > 5:
            print(f"  ... and {len(tarot_links) - 5} more")

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
