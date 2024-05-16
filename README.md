# Interactly – FRONT END DEVELOPER –Coding Task ReactFlow Render

## Introduction
 
You are required to develop a web page and create CUD (create, Update, Delete) operations on a graph using the reactflow.dev library in ReactJS Redux. 

## Task :
* Create a React project and create a page with name ‘Home’’
* Create a button on left side ‘Create node’ and upon clicking on it, a node in circle/rectange shape should get created on graph panel.
* Also implement connecting two nodes with a branch.
* On mouse over to a node show ‘X’ icon in red color , upon clicking that icon delete that node. Similarly do the same for branches. 
* Upon clicking on the node open a popup window on right side to give a title to the node. Once saved it should appear on top of the node.
* Record a video of working of creating nodes, adding branches, deleting nodes and deleting branches. 



Method of Submission
 
* You can develop and test the application in your localhost or use tools like LocalTunnel to have domain routing to localhost.
* Upload the entire repository in your github profile (create one if you don’t have it) and share the link of the repo. 
* Your github project link.
* Attach recording of the working application using Loom or similar recording tools.
* Attach your latest resume if not already shared.



ALL THE BEST! 😊




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
