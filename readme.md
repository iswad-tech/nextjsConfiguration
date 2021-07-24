# Setup a nextjs application

- Clone the repository
- npm install
- Note: If you would like to update the version of package being used in the package.json; you can change it manually from package.json file and then run npm install or you can take the following steps:
  `npm uninstall react react-dom next immer use-immer`
  `npm install react react-dom next immer use-immer`
- In the root directory of app create next.config.js file and write env variables in that <br>
  `module.exports = {` <br>
  `publicRuntimeConfig: {` <br>
  `APP_NAME: "SEOBLOG",` <br>
  `PRODUCTION: false,` <br>
  `API_DEVELOPMENT: "http://localhost:8000/api",` <br>
  `API_PRODUCTION: "Production API URL",` <br>
  `DOMAIN_DEVELOPMENT: "http:localhost:3000",` <br>
  `DOMAIN_PRODUCTION: "http:localhost:3000",` <br>
  `FB_APP_ID: "123456789",` <br>
  `},` <br>
  `};` <br>
- You need to change Seo.defaultProps in your Seo.js file inside components folder based on your project
- You may need to change the global states in your Layout.js file inside components folder, based on your project
- You need to change Header and Footer section in your Layout.js file with your desired Header and Footer contents/components.
- Inside pages/index.js we displayed how to use global states using appState and how to change the value of a global state using appDispatch; you can remove or change those parts based on your project.
- inside pages/index.js you need to cange the initial values to be passed as props to the Seo component (`title`, `description`, `keywords`)
- You may want to add more seo tags to your Seo.js component or you can add more Seo tags at your desired page
- You can create more pages with the initial same configuration as we have for our index.js
- Auth files are used for user registration/login/signout and they must be used with our NodeJs configuration. The `isAuth()` function is used to determine if user has been authenticated. Moreover, you can use `isAuth().role` to see whether or not the authenticated user is admin.
- The following npm packages are used for authentication. If you do not need authentication configuration in your application you can uninstall them. <br>
`react-google-login jsonwebtoken js-cookie`
<hr>

## CSS Classes

The following CSS classes are available to be used with this template: <br>

**1. Alignments** <br>
`text-ltr` --> Align: left to right<br>
`text-rtl` --> Align: right to left <br>
`text-center` --> Align: center<br>
Sample: `<div class="text-ltr">Hello</div>`

**2. Borders** <br>
`br-(t, b, l, r, all)-(1, 2, 3, 4)` --> Use this classes to define the position and thickness of border <br>
`br-px-rad-(5, 10, 15, 20, 25, 30, 35, 40, 45, 50)` --> Use this classes to define the border radius in px <br>
`br-per-rad-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Use this classes to define the border radius in percentage <br>
`br-color-(primary, secondary, third, fourth, success, warning, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Use this classes to define the color of borders <br>
`br-style-(double, solid, dashed, double)` --> Use this classes to define the style of borders <br>
Sample: `<div class="br-all-1 br-px-rad-10 br-color-secondary">`

**3. Buttons** <br>
`btn-(primary, secondary, third, fourth, success, warning, large, medium, small)` --> Use `primary`, `secondary`, `third`, `fourth`, `success`, and `warning` to define the background color of buttons. Use `large`, `medium` and `small` to define the size of button. <br>
Sample: `<button class="btn-primary btn-large">` <br>
**Note:** You can also use our customized classes to define your desired button with the desired size, color, background color, and borders. <br>

**4. Colors** <br>
`text(Primary, Secondary, Third, Fourth, Success, Warning, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` --> Use this classes to define the text color of an element <br>
`bg(Primary, Secondary, Third, Fourth, Success, Warning, Blue, Red, Black, White, Orange, Purple, Yellow, Green, Pink, Cyan, Silver)` --> Use this classes to define background color of an element<br>
Sample: `<div class="text-third bg-green"></div>`

**5. display** <br>
`flex` <br>
`flex--jc--(start, center, end, betwwen, around, evenly)` <br>
`flex--ai--(start, center, end)` <br>
`flex--dir--(row, col)` <br>
`flex--wrap` <br>
`block` <br>
`no-display` <br>
`show-flex-in-(sm-md-lg, md-lg, lg, md-sm-xsm, sm-xsm, xsm)` <br>
`show-block-in-(sm-md-lg, md-lg, lg, md-sm-xsm, sm-xsm, xsm)` <br>
`active-(flex, block)` <br>
Sample: `<div class="flex flex--jc--center flex--ai--center flex--dir--col">` OR `<div class="no-display"></div>` OR `<div class="block"></div>` <br>

**6. Fonts** <br>
`fs-px-(8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32)` --> Font size in pixels <br>
`fs-r-(1, 2, 3, 4, 5, 6, 7, 8)` --> Font size in half rem <br>
`fw-(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000)` --> Font weight <br>
`f-b` --> Bold Text <br>
`f-i` --> Italic text <br>
Sample: `<p class="fs-r-2 fw-600 f-i">Something</p>` <br>

**7. Inputs and Forms** <br>
`.input` <br>
`.required` <br>
Sample: `<label class="required">Name</lable><input type="text" class="input"/>` <br>

**7. Heights and Boxes**
`.box-min-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Heights in px <br>
`.box-min-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` Heights in vh <br>
`.box-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500)` --> Heights in px <br>
`.box-vh-(oneFourth, oneThird, half, twoThird, threeFourth, full)` Heights in vh <br>
Sample: <div class="box-vh-half"> <br>

**8. Hover** <br>
`hover-text-(primary, secondary, third, fourth, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Color text when hovering on an element <br>
`hover-bg-(primary, secondary, third, fourth, red, blue, black, white, orange, purple, yellow, green, pink, cyan, silver)` --> Background color when hovering on an element <br>
Sample: `<a class="hover-text-third hover-bg-primary"></a>` <br>

**9. Opacity** <br>
`op-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Opacity in percentage <br>
Sample: <img class="op-60"> <br>

**10. Position** <br>
`pos-abs` --> Make the position absolute <br>
`pos-abs--(lt, rt, center, lb, rb)` --> Define the position of an absolute element <br>
`pos-fix` --> Make the position fixed <br>
`pos-fix--(lt, rt, center, lb, rb)` --> Define the position of a fixed element <br>
`pos-rel` --> Make the position relative <br>
Sample: `<div class="pos-abs pos-abs--lt">` <br>

**11. Rows and Columns** <br>
`row--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> XS Devices<br>
`row--sm--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Small Devices <br>
`row--md--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Medium Size Devices<br>
`row--lg--(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)` --> Large Devices<br>
`grid` <br>
`grid--cols--(auto, oneFourth, oneThird, oneHalf)` <br>
Sample: `<div className="row--12 row--sm--10 row--md--8 row--lg--6 bg-blue box-oneThird text-red p4 text-center">First Div</div>` OR <div class="grid grid--cols--auto"></div> <br>

**12. Margins and Paddings** <br>
`m(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`mt(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`mr(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`mb(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`ml(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`my(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`mx(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`p(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`pt(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`pr(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`pb(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`pl(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`py(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`px(1, 2, 3, 4, 5, 6, 7, 8)` <br>
`ml-auto` <br>
`mr-auto` <br>

**13. Widths** <br>
`w-per-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100)` --> Width in percentage <br>
`w-px-(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 550, 600)` --> Width in pixels <br>

**14. Mobile Menu Bar** <br>
`menu-mob-icon` --> Mobile Menu Icon <br>
`menu-mob-closed-icon` --> Closing icon <br>
`menu-mob-hr` <br>
`menu-mob-hr-active` <br>

**15. General Classes** <br>
`mouse-hand` --> Pointer Cursor <br>
`z-(0, 10, 100, 1000)` --> Z-index classes
`footer` --> Sticky footer at the bottom of the page
`f-(left, right)` --> Float left or right

## Deployment on Linux Server

- You are all set and enjoy!
