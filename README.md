# ripple.fm web

The web interface for ripple.fm

## Table of Contents

- [Prerequisites](#prerequisites)
- [Technologies](#technologies)
- [Development](#development)
  - [Formatting](#formatting)
  - [Setting up your environment](#setting-up-your-environment)
  - [Extra configuration](#extra-configuration)
  - [Starting the services](#starting-the-services)
- [Production](#production)
  - [Deploying](#deploying)
  - [Notes on configuration](#notes-on-configuration)

# Prerequisites

- yarn or npm
- docker and docker-compose

# Technologies

This project was built with:

- Server side rendered [React](https://reactjs.org/) with [next.js](https://nextjs.org/)
- Styled components with [react-emotion](https://github.com/emotion-js/emotion)
- [Ant Design](https://ant.design/docs/react/introduce)

# Development

## Formatting

This project uses [Prettier](https://github.com/prettier/prettier) for formatting. It's recommended to configure your editor to work with prettier using the [editor integrations](https://prettier.io/docs/en/editors.html).

Formatting is checked when Travis CI runs a build and can be checked locally using the one of the following commands:

```sh
$ yarn lint
```

or

```sh
$ npm run lint
```

## Setting up your environment

We must first set the environment variables defined in [.env.example](.env.example). The variables include comments and are marked optional. **NOTE**: Most variables are not required to run the basic development environment.

The steps for defining your environment variables:

1. Copy `.env.exmaple` to `.env`
1. Update values for the variables
1. Source the environment using `source .env`

## Extra configuration

This section is **optional**.

### Changing the preset stations created for the core api

In order to improve the development experience, the core api is seeded with preset stations that will auto play tracks. This is helpful when working with the UI for stations because it removes the need to manually manage stations.

We can alter the preset stations by changing the templates located [here](support/station_templates.exs) prior to starting our services.

If you've already started the services you can simple restart the api service using the following command:

```sh
$ docker-compose restart api
```

### Changing the docker-compose configuration

You can take a look at [docker-compose.yaml](docker-compose.yaml) to see the service definitions and variables. You can change values directly in the `docker-compose.yaml` file but it's recommended to create a `docker-compose.override.yaml` file and put your changes there. An example of using `docker-compose.override.yaml` is available [here](https://docs.docker.com/compose/extends/).

Some of the configurations you _may_ want to change include:

- The port on which the services are running (default is 3000)
- The image tags for services (useful when testing a dev version)

## Starting the services

Now that we loaded the environment variables we can start the services using `docker-compose`

To start we run:

```sh
$ docker-compose up
```

To stop:

```sh
$ docker-compose down
```

Then, we can start the web service locally using the following command:

```sh
$ yarn dev
```

Once started, we can access the services at the following URLs:

- Web: http://localhost:3000
- Auth: http://localhost:3001
- Core API: http://localhost:4000

# Production

## Deploying

Travis CI will automatically build and push tagged commits (matching the version in `package.json`) to the docker image repository.

After an image is built and pushed, update the [helm chart for ripple.fm](https://github.com/ripplefm/charts) to set the updated tag for the web service.
