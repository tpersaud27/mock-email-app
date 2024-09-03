# replace-env.sh
sed -i "s/REPLACE_ME/${DISPLAY_VERSION}/g" src/environments/environment.prod.ts
