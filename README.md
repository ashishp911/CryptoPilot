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
![alt text](https://github.com/ashishp911/Cryptocurrency-Application/blob/main/src/Images/project_file_layout.jpeg)

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




























