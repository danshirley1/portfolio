Typescript conversion tips:
https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/

# Portfolio

A personal showcase portfolio demonstrating a range of techniques and technologies.

## NOTE DS 10/10/18

A lot of this early work is experimental, so I've been lazy with commit messages etc. A v0.0.1 will be cut soon to tidy things up.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) at v1.1.5 (25/8/2018).

The Node server was created by adapting the tutorial:
https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/

## Install
```
yarn run install-deps
```

## To run locally

```
yarn start
```

To restart server back-end (until I work out how to make it 'hot'):

```
yarn start
```

## What is it?
The application allows users to log in to Spotify (and ultimately other providers such as SoundCloud, iTunes etc.) and view their music preferences alongside mine. Similar artists, genres etc. will be represented in graphical format alongside mine and then suggestions can be made etc.

Long term plans include embedded media player with subtitle for karaoke and other such things, even perhaps a single application for browsing and playing media from a collection of providers (Spotify, iTunes in a single media place).

## Why?
An opportunity to demonstrate my technical skills, by presenting various aspects of my development experience all in one place.

Also it's a great way to learn and apply new technologies against an evolving, continuous piece of work.

## Testing

```
yarn test:client
yarn test:server
```

Or for more control:

`yarn test:client --watch --verbose --runInBand --testPathPattern=tests/unit -t 'my test name pattern'`
