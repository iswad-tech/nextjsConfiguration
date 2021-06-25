# Setup a nextjs application
- Clone the repository
- npm install
- Note: If you would like to update the version of package being used in the package.json; you can change it manually from package.json file and then run npm install or you can take the following steps:
`npm uninstall react react-dom next immer use-immer`
`npm install react react-dom next immer use-immer`
- You need to change Seo.defaultProps in your Seo.js file inside components folder based on your project
- You may need to change the global states in your Layout.js file inside components folder, based on your project
- You need to change Header and Footer section in your Layout.js file with your desired Header and Footer contents/components.
- Inside pages/index.js we displayed how to use global states using appState and how to change the value of a global state using appDispatch; you can remove or change those parts based on your project.
- inside pages/index.js you need to cange the initial values to be passed as props to the Seo component (`title`, `description`, `keywords`)
- You may want to add more seo tags to your Seo.js component or you can add more Seo tags at your desired page
- You can create more pages with the initial same configuration as we have for our index.js
- You are all set and enjoy!