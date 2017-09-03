# spa-architecture-angular-domain
SPA Architecture, using Angular and Domain layer

## Requirements

- NodeJS 7.5+
- Angular Cli 1.x

## Stack

- Pug 2.x
- Stylus 2.x
- TypeScript 2.x
- Angular 4.3

## Contribution guide

### Remotes

The **remotes** follow the convention:

- _**origin**_: fork in the account of the developer

- _**upstream**_: main repository

### Commit Style

Please consider de following git styles for the commit messages:

http://udacity.github.io/git-styleguide/

### Configuring

Before build, you should set:

```sh
$ npm i -g @angular/cli
```

Then you also need to set within the root file:

```sh
$ npm i
```

### Building

For local environment:

```sh
$ npm start
```

For development environment:

```sh
$ npm run start-dev
```

For staging environment:

```sh
$ npm run start-stag
```

For production environment:

```sh
$ npm run start-prod
```

### Distributing

For development environment:

```sh
$ npm run dist-dev
```

For staging environment:

```sh
$ npm run dist-stag
```

For production environment:

```sh
$ npm run dist-prod
```

### Unit Testing

To execute the unit tests via [Karma](https://karma-runner.github.io), run:

```sh
$ npm test
```

### E2E Testing

To execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`:

```sh
$ npm run e2e
```

## License

MIT
