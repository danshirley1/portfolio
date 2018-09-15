### Why is this directory here?

I'm putting the schema in here (in `client`) so I can share it with the `server` app, I don't want to be duplicating any schema definitions.

I couldn't put it in `server` and grab it from `client` as `client` is built using `create-react-app` which does not allow you to call files from outside of `src/` at bundle time. This probably could be overcome by 'ejecting' the boilerplate app and changing the Webpack config, but I'd rather avoid that if possible.