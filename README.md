# <p align="center">Welcome to the Market Shop</p>

<br>

## Used Packages and Technologies
### For React
- [Create React App](https://github.com/facebook/create-react-app), <br>
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/) - Side Technologies
- [Redux Saga](https://redux-saga.js.org/) - Redux side effect manager
- [Redux Toolkit](https://redux-toolkit.js.org/)

### For CSS
- [styled-components](https://styled-components.com/) - Styling react components
- [antd](https://ant.design/) - Ready to use react components

### For API
- [Json Server](https://github.com/typicode/json-server) (for api) <br>

<br>

## Links
Live - https://market-shop-getir.herokuapp.com/ <br>
Json Server Live - https://market-api-getir.herokuapp.com/ <br>
Server repo - https://github.com/furkangulluu/market-api

<br>

## What functionalities does project have? 
- Product listing (from api),
- Add to cart,
- Change the cart detail (Delete, change count of products),
- Filtering products by brands, tags and types,
- Sorting by price and date,
- Pagination,
- Responsive design.

<br>

## Project Layout Design

<img src="https://i.hizliresim.com/80iw6gn.png" alt="Layout" width="900" />

<br>

## Project Folders
    .
    ├── asset
    │   ├── images          
    ├── components          
    │   ├── Cards          
    │   ├── Footer        
    │   ├── Header        
    │   |── LeftSide   
    │       ├── Brands      
    │       ├── Sorting      
    │       ├── Tags      
    │       ├── MobileFilterItem   
    │   ├── Loading          
    │   ├── MainContainer         
    │   |── Pagination
    │   ├── ProductList     
    │       ├── ProductCard          
    │   ├── RightSide       
    │       ├── Basket        
    │   ├── TypeList         
    ├── hooks                   
    ├── models
    │   ├── filter-models 
    ├── hooks
    ├── redux
    │   ├── actions          
    │   ├── api         
    │   |── sagas      
    │   ├── slices         
    ├── resources


## Build Setup
firstful you should go to the cloned folder with terminal use this;
``` bash
cd/market-shop
```
then you should download all packages 
```
npm install
```
after you should run project use this
```
npm run start
```


## The other things you can do

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test
```
<br>
<hr>
<br>


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
