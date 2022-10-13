# React Code Challenge
A single page react application, written in TypeScript (should be type checked) is required that will display a chart and a table. Both chart and table should be built as a separate component imported in the root component (App.ts). 

## Chart Component 
It’s a simple “spline” chart exactly how described in this [link](https://www.highcharts.com/blog/tutorials/highcharts-wrapper-for-react-101/). Using the exact same data. This makes use of Highcharts. 


## Table Component 
It’s a simple table component that uses ag-grid to display mock data returned from an API exactly how it’s described in this [link](https://www.ag-grid.com/react-data-grid/getting-started/). However, this component cannot have useEffect hook where it calls the API to fetch cars related data as shown in example. Instead, you will make use of [Context API](https://reactjs.org/docs/context.html) to create a DataContext.

## DataContext
DataContext is responsible for fetching the data needed by Table component from API :- https://www.ag-grid.com/example-assets/row-data.json and providing it to Table Component. DataContext will use [React Query](https://tanstack.com/query/v4/docs/installation) to fetch the data instead of useEffect, unlike above example from Ag Grid.

## Layout / UI 
Make use of [Material UI’s layout components](https://mui.com/material-ui/react-grid/) (like, Grid, Container etc) to add some basic responsiveness to the layout. There’s only one requirement. On large and extra-large displays, both Chart and Table components should sit next to each other side by side, each occupying one half of the screen. However, on screen sizes medium and small, the components should sit on top of each other.
