# mock-email-client

## Features

- Asynchronous input validators
- Class based matching password validator
-- We used dependency injeciton in these is to remain onsistent between these two validators
- catchError from rxjs

## Component Structure

- Auth folder contains authentication information
- Inbox folder contains all inbox related components
-- Inbox-Home: First page the user will see after signing in
-- Email-Create: This is where the user will compose an email in a modal
-- Email-Reply: This is where the user will reply to emails
-- Email-Index: This is the list of emails a user receives
-- Email-Show: This is where the user will see the email clicked on

## API Information

URL: <https://api.angular-email.com>

| Path             | Method | Body                                                                           | Description        |
| :---             | :---   | :---                                                                           | :---               |
| /auth/signup     | POST   | { username: string, password: string, passwordConfirmation: string }             | Signs up for a new account with username|
| /auth/signin     | POST   | { username: string, password: string}| Signs in with the provided username |
| /auth/username   | POST   |  { username: string }| Check to see if a username is already in use |
| /auth/signedin   | GET    |  | Check to see if the user is currently signed in|
| /auth/signout    | POST   |  {}                                                                            | Signs the user out |
