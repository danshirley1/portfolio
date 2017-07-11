/**
 * Just like our store, we configure a 'Root' component that is
 * required based on the env variable. This component is typically one
 * surrounded by a <Provider>.
 */
const prodModule = require('./Root.prod.js');
const devModule = require('./Root.dev.js');

export const Root = process.env.NODE_ENV === 'production' ? prodModule : devModule;
