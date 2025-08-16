import pandas as pd
import ast

# Read the CSV file
df = pd.read_csv('moisturizer_usage.csv')

# Parse the stringified dictionaries/lists
df['manufacturer_details'] = df['manufacturer_details'].apply(ast.literal_eval)
df['product_details'] = df['product_details'].apply(ast.literal_eval)
df['attributes'] = df['attributes'].apply(ast.literal_eval)

# Extract fields
df['product_id'] = df['manufacturer_details'].apply(lambda x: x['product_id'])
df['name'] = df['product_details'].apply(lambda x: x['name'].strip())
df['brand'] = df['product_details'].apply(lambda x: x['brand'].strip())
df['active_ingredients'] = df['attributes'].apply(
    lambda attrs: next((a['value'] for a in attrs if a['key'] == 'Active Ingredients'), '')
)
df['country_of_origin'] = df['attributes'].apply(
    lambda attrs: next((a['value'] for a in attrs if a['key'] == 'Country of Origin'), '')
)

# Select and reorder columns
table = df[['product_id', 'name', 'brand', 'active_ingredients', 'country_of_origin']]

# Export to Excel
table.to_excel('moisturizer_usage_clean.xlsx', index=False)
print("Exported to moisturizer_usage_clean.xlsx")