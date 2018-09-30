# Student Dashboard

This delivers graphical user interface for students to get access to their data.

## Install dependencies

- ``npm install``

## Run the app for development

- ``npm start``

This will start the server at port- 8080 and bundle the client sources, copy assets and translation into a into a directory named ``dist``.

- Open the app in browser- ``http://localhost:8080/``

#Build the app

- ``npm build``

    This will build the app bundles, copy assets and translations into a directory named ``dist``.
    It will contain the bundled/minified server and front-end , just ready for production.

- ``npm run build:dev``

    This will do the same as ``npm run build`` and additionally it will add the source map in order to debug your code in
    pre-production environment.

## ES6 with Babel

Thanks to Babel you're able to use ES6 for your project. Babel is a transpiler that transforms ES6, and even ES7 features, to plain old ES5.

If you don't know ES6, here is a [good tutorial](https://babeljs.io/learn-es2015/) about it.

## ESLint

It's JavaScript linter in order to report patterns in your code, therefore, you should set it up on you editor to take advantage of it.

## Internationalization

This project provides a basic wrapper of [i18next](https://www.i18next.com/api.html) library, however it should be good enough
to cover the basic functionality regarding to preparing your project for supporting internationalization.

> Beware that this is implementation is meant to be improved and moving to its own module.

### How to use it

Into the ``src`` folder you need to add JSON files suffixed with ``i18n-messages``, and by executing either `npm star` or any of the
command to build the app, it will parse those JSON files and produce a single file with all the message of the application in the
folder ``build/locales``, which is used by `i18n` service in a synchronized way.

See an example on ``cfe-app-i18n-message.json`` and `img-app-routes-component.js`.

## Server communication

In order to perform any request to the server, you will be able to use [axios](https://github.com/axios/axios), this is not
mandatory, therefore you're free to choose other library for it.

## Styles

To create your CSS you're able to use all the features provided by [SASS](http://sass-lang.com/).
