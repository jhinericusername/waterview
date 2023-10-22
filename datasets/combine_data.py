import pandas as pd
import os
import random

# List of CSV file names (assuming they are in the same directory as the script)
csv_files = [
    "site1.csv",
    "site2.csv",
    "site3.csv",
    "site4.csv",
    "site5.csv",
    "site6.csv",
    "site7.csv",
    "site8.csv",
    "site9.csv",
    "site10.csv",
    "site11.csv",
    "site12.csv",
    "site13.csv",
    "site14.csv",
    "site15.csv",
    "site16.csv",
    "site17.csv",
    "site18.csv",
]


# Initialize an empty DataFrame to store the aggregated data
aggregated_data = pd.DataFrame()

# Specify the columns you want to include in the aggregated data
columns_to_include = [
    "site_no",
    "datetime",
    "Mean Water Temp (C)",
    "Mean Specific Conductance ",
    "Turbidity (FNU)",
]

# Loop through each CSV file and extract relevant columns if they exist
for file in csv_files:
    if os.path.isfile(file):
        df = pd.read_csv(file)
        relevant_columns = [col for col in columns_to_include if col in df.columns]
        df = df[relevant_columns]
        aggregated_data = pd.concat([aggregated_data, df], ignore_index=True)

# Add a new "pH" column with random values between 6.5 and 7.5
aggregated_data["pH"] = [random.uniform(6.5, 7.5) for _ in range(len(aggregated_data))]

# Drop duplicate rows
aggregated_data = aggregated_data.drop_duplicates()

# Save the aggregated data to a new CSV file
aggregated_data.to_csv("aggregated_data.csv", index=False)

print("Aggregated data saved to 'aggregated_data.csv'")
