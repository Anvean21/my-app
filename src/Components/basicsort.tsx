import React from "react";
import {
  GridColumns,
  GridRowsProp,
  DataGrid,
  GridSortDirection,
  GridSortModel,
} from "@material-ui/data-grid";
import FlightService from "../Services/FlightService";

//рефлексию заюзать?
const columns: GridColumns = [
  { field: "startAirport", width: 180 },
  { field: "endAirport", width: 180 },
  { field: "duration", width: 180 },
  { field: "startTime", width: 180 },
];

let rows: GridRowsProp = [];
FlightService.GetFlights(1).then((result) => {
  rows = result.data.flights;
});

export default function ComparatorSortingGrid() {
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: "startAirport",
      sort: "asc" as GridSortDirection,
    },
  ]);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sortingOrder={["desc", "asc"]}
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}
