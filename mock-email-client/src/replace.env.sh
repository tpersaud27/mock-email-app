#!/bin/bash

# Print current directory
echo "Current directory: $(pwd)"


# Display the current date and time
echo "Current date and time: $(date)"

# Replace display version environment variable
sed -i "s|\${DISPLAY_VERSION}|${{ env.DISPLAY_VERSION }}|g" src/environments/environment.ts
