# mock-email-client

## Features

- Asynchronous input validators
- Class based matching password validator
-- We used dependency injeciton in these is to remain onsistent between these two validators
- catchError from rxjs

## API Information

URL: <https://api.angular-email.com>

| Path             | Method | Body                                                                           | Description        |
| :---             | :---   | :---                                                                           | :---               |
| /auth/signup     | POST   | { username: string, password: string, passwordConfirmation: string }             | Signs up for a new account with username|
| /auth/signin     | POST   | { username: string, password: string}| Signs in with the provided username |
| /auth/username   | POST   |  { username: string }| Check to see if a username is already in use |
| /auth/signedin   | GET    |  | Check to see if the user is currently signed in|
| /auth/signout    | POST   |  {}                                                                            | Signs the user out |
