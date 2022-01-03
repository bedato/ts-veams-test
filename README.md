# ts veams

The project is build with `@veams/cli`. You can add or modify settings in the provided `veams-cli.json`.

`@veams/cli` is responsible for the initial setup as well as for the scaffolding process of blueprints.
Every task and configuration files are exposed in the `configs` folder.

For more information take a look at the Veams documentation.
- Veams Overview: https://github.com/Sebastian-Fitzner/Veams
- Veams Website: http://veams.org/

------------------

## Folder Structure

------------------

### Basic Files and Folders

The app contains multiple sections which have its own responsibility. In general the structure looks like that:

``` bash
├── app.js
├── app.events.js
├── app.veams.js
├── app.scss
├── assets
│   ├── fonts
│   ├── icons
│   ├── img
│   └── media
├── core
│   ├── components
│   ├── layouts
│   ├── store
│   └── styles
│       ├── base.scss
│       ├── get-media.scss
│       ├── modifiers.scss
│       └── print.scss
├── features(*)
├── pages
└── shared
    ├── components
    ├── styles
        ├── _shared.scss
        ├── _vars.scss
        ├── helpers
        │   ├── _helpers.scss
        │   └── functions
        └── icons
└── utilities
```

### App Files

``` bash
├── app.js
├── app.veams.js
├── app.events.js
└── app.scss
```

These files are the main entry point of our application.

### Assets

As the folder says, it contains all the assets like images, fonts, svg icons and more which we can use project wide.

### Core

``` bash
├── core
    ├── components
    ├── layouts
    ├── store (*)
    └── styles
        ├── base.scss
        ├── get-media.scss
        ├── modifiers.scss
        └── print.scss
```

The core is responsible for the project specific setup. It contains components and states which define the base of the application.

Core Components are global components which are app specific, means you cannot share these components project wide.

__Examples__

- Header
- Navigation
- Footer

#### Layouts

The layout contains the general structure of the application. It is responsible for the general rendering of the application.

#### Styles

The styles folder contains all important global styles like:

- reset
- base
- modifiers

------------------

## Tasks

------------------

### Server

The provided express server instance exposes an API which you can use to work with your file system.

The API Server is a mock server which can be used in a really simple way.

Just add your JSON mocks to `src/server/mocks/${endpoint}` and
make sure that you already have an endpoint available in `src/server/api/${endpoint}`.

After that you can reach that endpoint at the following location:

- `/api/${endpoint}` => You will get all mocks in an array.
- `/api/${endpoint}/${filename}` => You will get a specific mock by using the filename as Id.

#### Add endpoint to API ([`veams-bp-mock-api-endpoint`](https://github.com/Veams/veams-bp-mock-api-endpoint))

You can easily add a new endpoint by using `@veams/cli`.

Just execute the following command `veams add api [name]`.

This will create a new folder in `server/routes/`.
The only thing you have to do is referencing the file in `server/routes/index.js` by adding the snippets from `USAGE.md`.

# ts-veams-test
