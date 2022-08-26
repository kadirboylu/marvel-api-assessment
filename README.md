# Marvel API Assessment

A Marvel web app built with React.

[See Demo App on Netlify](https://marvel-api-comic-characters.netlify.app/)

### You can:

- Review characters alphabetically with infinite scrolling.
- Search for a character.
- See the character details and comics.

### I used:

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/) for routing
- [SASS](https://sass-lang.com/guide) and [CSS modules](https://github.com/css-modules/css-modules) for styling
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Axios](https://axios-http.com/docs/intro) for making API calls
- [Loadash.debounce](https://www.npmjs.com/package/lodash.debounce) for debouncing search input

## Usage

### Public Key and Hash

Go to project root directory and run:

```
cp .env.example .env
```

This will create an .env file with needed fields in root directory.

1. Go to [Marvel API](https://developer.marvel.com/docs) and create an account and generate a public key and private key.
2. Go to [MD5](https://www.md5.cz/). Create a hash using the public key and private key. MD5 is a hash algorithm that is used to generate a unique hash for each request. (hash = 1+private key+public key)
3. Fill in the relevant fields in the .env file.

### Install dependencies

```
npm install
```

### Run React dev server

```
npm run dev
```

### To build for production

```
npm run build
```
