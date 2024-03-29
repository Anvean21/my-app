import * as React from "react";
import { GridRowsProp, DataGrid, GridSortModel } from "@material-ui/data-grid";
import { useDemoData, GridData } from "@material-ui/x-grid-data-generator";

function loadServerRows(
  sortModel: GridSortModel,
  data: GridData
): Promise<any> {
  return new Promise<any>((resolve) => {
    if (sortModel.length === 0) {
      resolve(data.rows);
      return;
    }

    const sortedColumn = sortModel[0];

    let sortedRows = [...data.rows].sort((a, b) =>
      String(a[sortedColumn.field]).localeCompare(String(b[sortedColumn.field]))
    );

    if (sortModel[0].sort === "desc") {
      sortedRows = sortedRows.reverse();
    }

    resolve(sortedRows);
  });
}

export default function ServerSortingGrid() {
  let { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 6,
  });
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    { field: "commodity", sort: "asc" },
  ]);
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSortModelChange = (newModel: GridSortModel) => {
    setSortModel(newModel);
  };

  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(sortModel, data);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [sortModel, data]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={data.columns}
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        loading={loading}
      />
    </div>
  );
}
