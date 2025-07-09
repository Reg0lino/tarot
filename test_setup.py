# test_setup.py
import requests
import sys

print(f"Python executable: {sys.executable}")
print(f"Requests version: {requests.__version__}")

# Test request
try:
    response = requests.get('https://httpbin.org/get')
    print(f"Test request successful: {response.status_code}")
except Exception as e:
    print(f"Error: {e}")
