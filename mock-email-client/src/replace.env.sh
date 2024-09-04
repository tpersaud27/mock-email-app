#!/bin/bash

# Replace display version environment variable
echo "DISPLAY_VERSION is: $DISPLAY_VERSION"

# Go to file location
cd src/environments

# Print current directory
echo "Current directory: $(pwd)"

sed -i "s/\${DISPLAY_VERSION}/${DISPLAY_VERSION}/g" environment.ts
