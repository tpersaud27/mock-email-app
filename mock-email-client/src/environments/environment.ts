import { Environment } from './environment.interface';
export const environment: Environment = {
  production: true,
  title: '${TITLE}', // Placeholder for GitHub Actions environment variable
  displayVersion: '${DISPLAY_VERSION}', // Placeholder for GitHub Actions environment variable
  rootUrl: 'https://api.angular-email.com',
};
