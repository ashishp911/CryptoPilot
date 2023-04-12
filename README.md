# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

<br />
<br />
  
# Getting Started with CryptoPilot
## 1. Project file layout
![project layout](https://github.com/ashishp911/Cryptocurrency-Application/blob/main/src/Images/project_file_layout.jpeg)

## Create react App 
```
npx create-react-app cryptocurrency
```

## install Material UI
```
npm install @mui/material @mui/system @emotion/react @emotion/styled @mui/styles @mui/lab  
```

## install Axios
```
npm i axios
```

## install React Router DOM

```
npm install react-router-dom
```

## Coingecko API
We are going to use 4 endpoints for this application, you can find all API related data here ->
 [Coingecko API](https://www.coingecko.com/en/api/documentation).
1. TrendingCoins (For carousel)
2. SingleCoin (For single coin data)
3. CoinList (For coin Table)
4. HistoricalChart (For chart data)

### 1. Reseting all css styles to default in app.css
### 2. Importing a font Montserrat from google
```
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap');
```
### 3. in App.js
Using routing in app.js so that we can toggle between homepage and coin_page. Wrap the entire app.js inside ``` <BrowserRouter> </BrowserRouter> ``` tags. Also do not forget to import Routes, Route and BrowserRouter. 
```
import { Routes, Route, BrowserRouter } from "react-router-dom";
``` 
Enclose all the routes of your application between the ```<Routes> </Routes>``` tags. (In our case, homepage and coin_page). 
Header.js will be outside the routes, so that it will be displayed all through the application.

We change the background color of the entire app to ```"#14161a"``` in app.js

## Header.js
We use Appbar from material UI and Container(it ensures that the appbar is responsive).
The appbar will contain Typography(for the title of our application) and a select tag(to select the currency).
Flex : 1 for our typography indicates that the width of all other elements will be the same as their content, but the element with flex: 1 will be given the remaining full space.
We wrap whole header with darkTheme.

## Context API
Since we want the currency and symbol selected through the header for the entire application, we will use context API. We wrap our entire app within cryptocontext, from index.js. We export {currency, symbol, setCurrency}, so that any component can now use these states.

## Homepage
Our homepage is divided into 2 parts, banner (upper part with carousel) and coint table (table with all trending coins.)
### Banner
1. For the banner, we use background image as banner2.
2. Banner has 3 parts, Name of the application (Typography), small description (Typography) and the carousel. I created a different react component for the carousel.
3. All APIs are in Api.js
###  Carousel
1. For carousel, we need the trendingCoins() api. This API takes currency as a parameter. We get the currency from context API. 
2. Instead of fetch, I have used axios.get() to fetch data from the API.
3. We use useEffect such that fetchTrendingCoins() function is called for the first time the page is rendered, also we add currency in the dependency list, so that whenever currency changes, fetchTrendingCoins() is called.
4. We use useState to keep the fetched data in a variable called trending. 
5. We use [**react alice carousel**](https://www.npmjs.com/package/react-alice-carousel) for our carousel.
6. installation -->
```
npm i react-alice-carousel
```
7. We use ```<AliceCarousel/>``` to create carousel.
8. We add responsive object in our AliceCarousel, and we have deifned it such that when the page in 0 pixels or more, we display 2 items and if its greater then 512 pixels,  we display 4 items.
9. **Items** in the most important part of AliceCarousel.
10. In items, we use the javaScript **object.map()** function to travese all the coins in trending which we fetched from our API.
11. For the carousel, we add ```<Link></Link>``` tag so that by clicking on the image, we can go to any particular coin.
12. We add ```<img>``` and ```<span></span>``` tags for image, name, price and 24hr change.
example of carousel image is given below
![carousel example](https://github.com/ashishp911/Cryptocurrency-Application/blob/main/src/Images/carousel%20.png)






