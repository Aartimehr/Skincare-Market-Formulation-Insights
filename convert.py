import json
import csv

# Function to convert JSON to CSV
def convert_json_to_csv(json_file_path, csv_file_path):
    with open(json_file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Check if the data is a list and not empty
    if not isinstance(data, list) or not data:
        print("Error: JSON file must contain a non-empty list of objects.")
        return

    # Get the fieldnames from the first dictionary in the list
    fieldnames = data[0].keys()

    with open(csv_file_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

    print(f"Successfully converted '{json_file_path}' to '{csv_file_path}'.")

# Specify the file paths
convert_json_to_csv('moisturizer_usage.json', 'moisturizer_usage.csv')