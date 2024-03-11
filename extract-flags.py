import os
import json


def create_json_from_svg_folder(folder_path):
    json_data = []

    # Check if the folder exists
    if os.path.exists(folder_path):
        # List all files in the folder
        files = os.listdir(folder_path)

        # Iterate through the files
        for file_name in files:
            # Extract country name from the file name (assuming the file name is in the format "Country_Name.svg")
            country_name = os.path.splitext(file_name)[0].replace("_", " ")

            # Create a dictionary for each country
            country_data = {
                "name": country_name.title(),
                "image": f"assets/country-flags/{file_name}",
            }

            # Append the dictionary to the list
            json_data.append(country_data)

        # Write the JSON data to a file
        output_json_path = "countries.json"
        with open(output_json_path, "w") as json_file:
            json.dump(json_data, json_file, indent=2)

        print(f"JSON file created successfully: {output_json_path}")
    else:
        print(f"The folder '{folder_path}' does not exist.")


# Provide the path to the folder containing SVG files
svg_folder_path = "public/assets/country-flags"

# Call the function to create JSON from the SVG folder
create_json_from_svg_folder(svg_folder_path)
