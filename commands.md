__prettier__

install prettier

`yarn global add prettier`


show preview

`prettier --single-quote --print-width=120 ClientApp.jsx`

save changes

`prettier --single-quote --print-width=120 --write ClientApp.jsx`

run in every .js or .jsx file inside js foler

`prettier --write --single-quote --print-width=120 --parser=flow --tab-width=2 "js/**/*.{js,jsx}"`

run the command from package.json

`npm run format`

`yarn format`


__eslint__

install global

`yarn global add eslint`

`npm install -g eslint`

install prettier plugin

`yarn global add eslint-plugin-prettier`

run eslint

`eslint **/*.{js,jsx} --quiet`

Errors:
  * zsh: argument list too long: eslint
  * Cannot find module 'eslint-config-prettier/react'


__webpack__

run webpack from node modules

`./node_modules/.bin/webpack js/ClientApp.jsx public/bundle.j`

run webpack (once you have the config file)

`webpack`

run webpack for production

`webpack -p`

run webpack from script

`yarn build`

run webpack from script + commands

`yarn build -- -p`

run webpack + watch

`yarn build -- --watch`

__tests__

run tests (remeber to config .babelrc env.test.plugins)

`NODE_ENV=test ./node_modules/.bin/jest`

NOTE: jest configures NODE_ENV automatically to 'test' for you, so you can run your scripts

rewrite snapshots

`NODE_ENV=test ./node_modules/.bin/jest -u`

run test covarage

`yarn test -- --coverage`

check code coverage on the web report

`open coverage/lcov-report/index.html`

__flow__

initialize a flow project

`yarn flow -- init`

install flow-typed

`yarn add global flow-typed`

`npm install -g flow-typed`

install libdefs from dependencies in package.json (flow-typed should be installed first)

`flow-typed install`

run flow for typed checking

`yarn flow`

add at the beginning of every file you want to check with flow:

`// @flow`

install specific types

`flow-typed install name-library@1.4`

tell flow to ignore the next line of code

```js
// $FlowFixMe
```

__debugging__

NOTE: while debugging in react dev tools when you inspect or select an element, 
you can interact with it in the console by typing `$r`, just like `$0` in the chrome browser.

__performance__

`Perf.stop()`

`Perf.printWasted()`