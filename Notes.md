# Notes

### Some important links

https://site.alura.com.br/imersao-react-next-js/aula01-react-nextjs-aluraquiz  
https://material-ui.com/customization/color/  
https://fonts.google.com/specimen/Lato?query=lato  
https://github.com/ijsto/eslint-config
https://giphy.com/  
https://placehold.it/400x400  
https://lottiefiles.com/23796-ring-of-fire#  
https://httpstatusdogs.com/

### Commnads

```sh
npx create-next-app --example with-styled-components dotr-quiz # create project

yarn dev # Starts the development server.

yarn build # Builds the app for production.

yarn start # Runs the built app in production mode.

yarn add eslint --dev

yarn eslint:init

yarn install # to update yarn.lock after eslint init

yarn lint

yarn add prop-types

yarn add lottie-react-web

yarn add framer-motion

yarn add jest @testing-library/react @types/jest @testing-library/jest-dom babel-jest @babel/core -D
yarn add  jest-canvas-mock -D
```

### Commit

- conventional commit
- Husky + CommitLint + Commitizen
- https://github.com/filipe1309/lotr-nextjs-quiz/issues/27

### Installation

##### Husky - Apply lint & interactive commit into `git commit` with _git hooks_.

```sh
# Install Husky
yarn add husky -D

# Activate hooks
yarn husky install
```

https://github.com/typicode/husky

#### Commitlint - Lint commit messages

```sh
# Install commitlint cli and conventional config
yarn add @commitlint/{config-conventional,cli} -D

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# Add husky hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

https://github.com/conventional-changelog/commitlint

#### Commitizen - Interactive commit

```sh
# Install Commitizen
yarn add commitizen -D

# Initialize your project to use the cz-conventional-changelog adapter
yarn run commitizen init cz-conventional-changelog --yarn --dev --exact

# Add husky hook
npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && node_modules/.bin/cz --hook || true'
```

https://github.com/commitizen/cz-cli

#### Then just use `git commit` & **voila**

```sh
git commit
```

Source:
https://www.youtube.com/watch?v=erInHkjxkL8&ab_channel=Rocketseat

## TO DO

- Ajustar readme
- Musica de fundo
- Easter egg (Konami Code) - Gandalf DWIT
- Trocar gifs esternos por locais
- desabilitar quizes da galera se não tiver nome na index
- Tests (jest)
