## Basic eslint config to begin with

### Install

```javascript

pnpm install -D @ananyadhananjaya/eslint-config-basic

```

### Config `.eslintrc`

```javascript

{
    "extends": "@ananyadhananjaya/eslint-config-basic"
}

```

### Config VS Code auto fix

```javascript

{
    "prettier.enable": false,
    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```
