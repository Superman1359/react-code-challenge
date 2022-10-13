import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import "./App.css";
import DataGrid from "./components/data-grid/Data-Grid";
import SplineChart from "./components/spline-chart/Spline-Chart";
import ICar from "./models/ICar";

export const DataGridContext = React.createContext<ICar[]>([]);

function App() {
  const fetchData = (): Promise<ICar[]> =>
    axios
      .get("https://www.ag-grid.com/example-assets/row-data.json")
      .then((response) => response.data);

  const { data } = useQuery(["cars"], fetchData);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <SplineChart></SplineChart>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <DataGridContext.Provider value={data!}>
          <DataGrid></DataGrid>
        </DataGridContext.Provider>
      </Grid>
    </Grid>
  );
}

export default App;
