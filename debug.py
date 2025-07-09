import requests
import json
from urllib.parse import quote

# Test multiple category names to find the right one
category_names = [
    'Category:Rider-Waite tarot deck (Roses & Lilies)',
    'Category:Rider-Waite_tarot_deck_(Roses_%26_Lilies)',
    'Category:Rider-Waite tarot deck',
    'Category:Rider-Waite_tarot_deck'
]

api_url = "https://commons.wikimedia.org/w/api.php"

for category_name in category_names:
    print(f"\n=== Testing category: {category_name} ===")

    params = {
        'action': 'query',
        'list': 'categorymembers',
        'cmtitle': category_name,
        'cmlimit': '500',
        'format': 'json'
    }

    print(f"Request URL: {api_url}")
    print(f"Parameters: {params}")

    try:
        response = requests.get(api_url, params=params)
        print(f"Response status code: {response.status_code}")
        print(f"Full URL: {response.url}")

        if response.status_code == 200:
            data = response.json()
            print(f"API Response keys: {list(data.keys())}")

            if 'error' in data:
                print(f"API Error: {data['error']}")
                continue

            if 'query' in data and 'categorymembers' in data['query']:
                members = data['query']['categorymembers']
                print(
                    f"✓ SUCCESS! Found {len(members)} files in this category")

                # Show first few files
                for i, member in enumerate(members[:5]):
                    print(f"  {i+1}. {member['title']}")

                if len(members) > 5:
                    print(f"  ... and {len(members) - 5} more files")

                # This is the working category name
                print(f"\n✓ WORKING CATEGORY: {category_name}")
                break
            else:
                print(f"No categorymembers found in response")

        else:
            print(f"HTTP Error: {response.status_code}")
            print(f"Response text: {response.text}")

    except Exception as e:
        print(f"Error: {e}")

print("\n" + "="*50)
print("DEBUG COMPLETE")
