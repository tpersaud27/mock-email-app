# mock-email-client

## Features

- Asynchronous input validators
- Class based matching password validator
-- We used dependency injeciton in these is to remain onsistent between these two validators
- catchError from rxjs

## API Information

URL: <https://api.angular-email.com>

| Path             | Method | Body  | Description   |
| /auth/signup     | POST   |       |               |
| /auth/signin     | POST   |       |               |
| /auth/username   | POST   |       |               |
| /auth/signedin   | GET    |       |               |
| /auth/signout    | POST   |  {}   | Signs the user out |
