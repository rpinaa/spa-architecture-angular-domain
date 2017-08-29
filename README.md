# spa-architecture-angular-domain

## Requirements

- NodeJS +7.x
- Angular Cli 1.x

## Stack

- TypeScript 2.x
- Stylus 2.x
- Pug 2.x
- Angular 4.3

## Contribution guide

### Remotes

The **remotes** follow the convention:

- _**origin**_: fork in the account of the developer

- _**upstream**_: main repository

### Building

For local environment:

```sh
$ npm start
```

For development environment:

```sh
$ npm start --environment=dev
```

For staging environment:

```sh
$ npm start --environment=stag
```

For production environment:

```sh
$ npm start --environment=prod
```

### Distributing

For development environment:

```sh
$ npm build --environment=dev
```

For staging environment:

```sh
$ npm build --environment=stag
```

For production environment:

```sh
$ npm build --environment=prod
```

## Unit Testing

To execute the unit tests via [Karma](https://karma-runner.github.io), run:

```sh
$ npm test
```

## E2E Testing

To execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

```sh
$ npm e2e
```

### Exploring

For local environment:

Go to http://localhost:4200

## License

MIT

**Free Software, Hell Yeah!**