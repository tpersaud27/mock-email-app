#!/bin/bash

# Print current directory
echo "Current directory: $(pwd)"


# Display the current date and time
echo "Current date and time: $(date)"

# Replace display version environment variable
echo "DISPLAY_VERSION is: $DISPLAY_VERSION"
# Go to file location
cd ./environments
# Print current directory
echo "Current directory: $(pwd)"
sed -i "s|\${DISPLAY_VERSION}|${{ DISPLAY_VERSION }}|g" environment.ts
