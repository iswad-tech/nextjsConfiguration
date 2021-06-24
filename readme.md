# Setup a nextjs application
- npm init -y
- npm install next react react-dom
- Replace the following scripts to your package.json: <br>
`"scripts": {` <br>
  `"dev": "next dev",` <br>
  `"build": "next build",` <br>
  `"start": "next start",` <br>
  `"lint": "next lint"` <br>
`},`
- Create pages folder
- Add _app.js to pages folder
- Add the following code to your _app.js file: <br>
`const MyApp = ({ Component, pageProps }) => { `<br>
  `return <Component {...pageProps} />; `<br>
`}; `<br>
export default MyApp;
- Add _document.js in your pages folder
- Add the following code to your _document.js file:<br>
`import Document, { Html, Head, Main, NextScript } from "next/document"; `<br>
`class MyDocument extends Document { `<br>
  `render() { `<br>
    `return ( `<br>
      `<Html lang="en-us">`<br>
        `<Head />`<br>
        `<body>`<br>
          `<Main />`<br>
          `<NextScript />`<br>
        `</body>`<br>
      `</Html>`<br>
    `); `<br>
  `} `<br>
`} `<br>
`export default MyDocument;`
- In order to use sass in your nextjs application, you need to install sass npm package: `npm install sass`
- Create styles folder
- Inside styles folder add the following directories: <br>
&emsp; 1- styles.scss <br>
&emsp; 2- base/_variables.scss <br>
&emsp; 3- base/_global.scss <br>
&emsp; 4- base/_mixins.scss <br>
&emsp; 5- modules folder
- In your root directory add jsconfig.json file
- Add the following code to your jsconfig.json file: <br>
` { `<br>
    `"compilerOptions": { `<br>
      `"baseUrl": ".", `<br>
      `"paths": { `<br>
        `"@/components/`*`": ["components/`*`"], `<br>
        `"@/styles/`*`": ["styles/`*`"], `<br>
        `"@/actions/`*`": ["actions/`*`"], `<br>
        `"@/helpers/`*`": ["helpers/`*`"] `<br>
      `} `<br>
    `} `<br>
`}` 
- Import styles.scss in your _app.js using the following command: <br>
`import "@/styles/styles.scss"`
- The initial configuration are ready now, based on the type of your project you may need to add the following folders and files: <br>
<b>components folder:</b> to create components of your design <br>
<b>helpers folder:</b> to export some helpers scripts being used in components
<b>actions folder:</b> to expoet some methods connecting your front to an api <br>
<b>static folder:</b> to add your images inside that folder; you can have easy access to your static folder in every of your components and pages by just typing `"/static"` <br>
<b> Create next.config.js file:</b> to add your environment variables; a sample of code in this file is as follows: <br>
`module.exports = { `<br>
  `publicRuntimeConfig: { `<br>
    `APP_NAME: "SEOBLOG", `<br>
    `PRODUCTION: false, `<br>
    `API_DEVELOPMENT: "http://localhost:8000/api", `<br>
    `API_PRODUCTION: "Production API URL", `<br>
    `DOMAIN_DEVELOPMENT: "http:localhost:3000", `<br>
    `DOMAIN_PRODUCTION: "http:localhost:3000", `<br>
    `FB_APP_ID: "123456789", `<br>
  `}, `<br>
`};`
- Create config.js file; to differentiate between env variables in production mode and in development mode; a sample of code in config.js file is as follows: <br>
`import getConfig from "next/config"; `<br>
`const { publicRuntimeConfig } = getConfig(); `<br>
`export const API = !publicRuntimeConfig.PRODUCTION `<br>
  `? publicRuntimeConfig.API_DEVELOPMENT `<br>
  `: publicRuntimeConfig.API_PRODUCTION; `<br>
`export const APP_NAME = publicRuntimeConfig.APP_NAME; `<br>
`export const DOMAIN = !publicRuntimeConfig.PRODUCTION `<br>
  `? publicRuntimeConfig.DOMAIN_DEVELOPMENT `<br>
  `: publicRuntimeConfig.DOMAIN_PRODUCTION; `<br>
`export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;`
- <b>Note:</b> In order to have access to the env variables you need to import them from your config.js file in every components that are going to be used
- Now that you have made your complete configuration for a next js application; you are ready to push it in github; in order to do that; first type the following command in your terminal: `git init`
- Create a `.gitignore` file in your root directory
- Add the following texts to the .gitignore file: <br>
node_modules <br>
next.config.js <br>
.next
- Then add index.js to your pages folder, and write a simple jsx to see if everything works as expected.
- <b>Note:</b> In order to add emmet working with jsx, you need to press `ctrl` + `,` simultaniousely and then click on extensions; then find emmet, click on it and open settings.json; add the following code: <br>
`"emmet.includeLanguages": { `<br>
    `"javascript": "javascriptreact" `<br>
`}`
- Finally, type `npm run dev` in terminal to see if everything is working properly
- Then everything is ready to make your first push in github: <br>
`git status` <br>
`git add .` <br>
`git remote add origin github_url` <br>
`git commit -m "Initial configuration has been set." `<br>
`git push origin master `<br>