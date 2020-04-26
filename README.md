# react-course-2-expensify-app

Sign up to the app and register your expenses:
https://siva-react-course-expensify.herokuapp.com/

## Installation and running the app in development
1. Run the command `npm i` to install the Node dependencies
2. You need to create Firebase databases (for test and production)
3. Create .env files with environment variables for connecting to the Firebase databases
3. Run the command `npm run dev-server`

## Database rules
```
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
        "expenses": {
          "$expense_id": {
            ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
            "description": {
              ".validate": "newData.isString() && newData.val().length > 0"
            },
            "note": {
              ".validate": "newData.isString()"
            },
            "createdAt": {
              ".validate": "newData.isNumber()"
            },
            "amount": {
              ".validate": "newData.isNumber()"
            },
            "$other": {
              ".validate": false
            }
          }
        },
        "$other": {
          ".validate": false
        }
      }
    }
  }
}
```

## Credit
Thanks to Andrew Mead for teaching
