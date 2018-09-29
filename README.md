# MeAdmin

Simple admin dashboard build using React

### Live demo
[MeAdmin](https://zuwallabag.firebaseapp.com/ )


### Prerequisites

Please make sure yarn and npm already installed in your system.

#### Mac

```console
brew install yarn
```

#### Ubuntu / Debian

```console
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

## Getting Started

Clone the repository and move into:

```console
$ git clone https://github.com/fujianto/meadmin.git
$ cd meadmin
```
### Installing

After cloning the repository, install required dependency.

```console
yarn install
```

Then start the app:

```
yarn start
```

Open your browser on `http://localhost:3000/`.

## Running the tests

To run all test:

```console
yarn test
```

To run test coverage

```console
yarn test --coverage
```

## Production build

```console
yarn build
```

Production build will be available on `build` directory in project root.