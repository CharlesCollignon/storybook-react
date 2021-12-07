# Custom Design System

This is a custom design system, using :

- [Storybook](https://storybook.js.org/)
- [React](https://fr.reactjs.org/) & [Typescript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/) & [Sass](https://sass-lang.com/)
- [Highchart](https://www.highcharts.com/)

From this [tutorial](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe#adding-rollup) and [video](https://www.youtube.com/watch?v=XHQi5a0TmMc&ab_channel=AlexEagleson)

## How to

### Add a component/module/template

To add a component, it is in the :

- **src/components**
- **src/modules**
- **src/templates**

Add a folder (CamelCase convention), for exemple :

    src/components/Button

1. Inside this folder you must have the **Component.txs**, **Component.stories.tsx** and the **index.ts**. The index.ts is used to export the component :

   `export { default } from "./Button";`

2. Inside the src/components folder you must have an **index.ts** to export each component inside :

   `export { default as Button } from "./Button"`\
   `export { default as ButtonVariant } from "./ButtonVariant"`\
   ...etc

3. Finally if there are more type of component folders (like components, modules, templates, etc) inside the **srx/**. You must hava a last **index.ts** inside **src/**

`src/index.ts`\
`export * from "./components"; `\
`export * from "./modules";`\

This should be like this :

```
├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   └── index.ts
├── package.json
└── package-lock.json
```

### Update the library

When a change is done, there are **5 steps** to do :

1. Update the version inside **package.json** (following the [semantic versioning](https://docs.npmjs.com/about-semantic-versioning))\
   `"version": "1.0.13" --> "version": 1.0.14"`\
2. Commit and push the changes on **GitHub** or **BitBucket**\
   `git add all`\
   `git commit -m 'added component'`\
   `git push ...`\
3. Run the bundler Rollup\
   `npm run rollup`\
4. Publish the package\
   `npm publish`\
5. Finally update the version inside your project **package.json** and re-run\
   `npm install`

### Use the design system

To use the design system, you just have to install the package like any npm package :\
`npm install @Your_Github_Name/Your_repo_name`\
Then import the component you need in the App :\
`import { Button } from '@Your_Github_Name/Your_repo_name`
