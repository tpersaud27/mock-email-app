#!/bin/bash

# Replace display version environment variable
echo "DISPLAY_VERSION is: $DISPLAY_VERSION"

# Replace version
sed -i "s/\${DISPLAY_VERSION}/${DISPLAY_VERSION}/g" src/environments/environment.ts
# Replace title
sed -i "s/\${TITLE}/${DISPLAY_VERSION}/g" src/environments/environment.ts
