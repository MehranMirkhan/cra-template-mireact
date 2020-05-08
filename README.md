# cra-template-mireact

## Install

To use this template, add `--template mireact` to create-react-app:

```sh
npx create-react-app my-app --template mireact
```

Make sure **baseUrl** is set in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "./"
  }
}
```

Make sure to run `npm run build:css` to make tailwind's css files.

## Dependencies

This template uses:

- typescript
- redux
- redux-toolkit
- redux-saga
- axios
- i18next
- tailwindcss

## Structure

```directory
|-- __mocks__       : Used for mocking in tests
|-- __tests__       : Tests
|-- @types          : Types used with typescript
  |-- api.d.ts      : REST types
  |-- models.d.ts   : Database models
  |-- state.d.ts    : Application state structure
|-- api             : REST requests to the server
|-- data            : Data to be used by the application
  |-- app.trans.json: Translation data
|-- pages           : Pages
  |-- index.tsx     : Router
|-- state           : Redux state
  |-- sagas         : Saga functions (All business logic
                             should be written here)
|-- app.config.json : Application configuration
```

## What is already implemented

- Authentication
- Alert
- Language

These are implemented because they are common usecases and they show how the system works in general.
