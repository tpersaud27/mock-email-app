#!/bin/bash

# Replace display version environment variable
echo "DISPLAY_VERSION is: $DISPLAY_VERSION"

# Go to file location
# cd src/environments

# Print current directory
echo "Current directory: $(pwd)"

# Replace version
sed -i "s/\${DISPLAY_VERSION}/${DISPLAY_VERSION}/g" src/environmentsenvironment.ts
# Replace title
sed -i "s/\${TITLE}/${DISPLAY_VERSION}/g" src/environments/environment.ts
