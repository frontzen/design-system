<h1 align="center" >Frontzen Design System</h1>

Frontzen Design System provides React UI components based on [MUI](https://mui.com). Click [HERE](https://63735b95ebfbcb4de6ddaa4d-dqcakcspwn.chromatic.com) to see the storybooks.

## 📦 Install

```bash
npm install @front.zen/design-system
```

```bash
yarn add @front.zen/design-system
```

## 🔨 Usage

```jsx
import { createTheme, ThemeProvider, Button } from '@front.zen/design-system';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Button type="primary">PRESS ME</Button>
  </ThemeProvider>
);
```

## ⌨️ Development

This repo is powered by [TurboRepo](https://turbo.build/repo). You can use TurboRepo commands to work with this repo.

To run all storybooks locally:

```bash
$ git clone git@github.com:frontzen/design-system.git
$ cd desing-system
$ yarn install
$ yarn storybook
```

You can also use chromatic for UI review. [link](https://www.chromatic.com/builds?appId=62d39f56a426a9878a3e1f3d)

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

We welcome contributions to Frontzen design system! Development of design system happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements.

📥 [Pull requests](https://github.com/frontzen/design-system/pulls) and 🌟 Stars are always welcome.
