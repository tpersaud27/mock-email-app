#!/bin/bash

# Print current directory
echo "Current directory: $(pwd)"


# Display the current date and time
echo "Current date and time: $(date)"

# Replace display version environment variable
echo "DISPLAY_VERSION is: $DISPLAY_VERSION"
sed -i "s|\${DISPLAY_VERSION}|${{ DISPLAY_VERSION }}|g" src/environments/environment.ts
