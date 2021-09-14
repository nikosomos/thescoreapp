import React, { useState, useEffect, useCallback } from "react";
import { Grid, Typography } from "@material-ui/core";
import debounce from "lodash.debounce";
import TableSearch from "./TableSearch";
import { RushingTableColumns } from "./RushingTableColumns";
import TableDownload from "./TableDownload";
import { getRushingStats, getRushingStatsCSV } from "utilites/apiService";
import { RushingTableStyles as getStyles } from "./styles";
import MUIDataTable from "mui-datatables";

export default function RushingTable() {
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sort, setSort] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const classes = getStyles();

  const searchToFilter = (newSearch) =>
    newSearch
      ? [
          {
            fieldName: "player",
            operation: "contains",
            value: newSearch,
          },
        ]
      : [];

  const getRows = (newSort, newSearch, newPage, newRowsPerPage) => {
    getRushingStats(newSort, searchToFilter(newSearch), newPage, newRowsPerPage)
      .then((res) => {
        setRows(res.data.data);
        setCount(res.data.totalCount);
      })
      .finally(() => setIsLoaded(true));
  };

  const getCSV = () => {
    getRushingStatsCSV(sort, searchToFilter(search), page, rowsPerPage).then(
      (res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "rushingStats.csv"); //or any other extension
        document.body.appendChild(link);
        link.click();
      }
    );
  };

  const debounceGetRows = useCallback(
    debounce(getRows, 1000, { leading: true, trailing: true }),
    []
  );

  useEffect(() => {
    debounceGetRows(sort, search, page, rowsPerPage);
  }, [sort, search, page, rowsPerPage]);

  const options = {
    download: false,
    elevation: 0,
    filter: false,
    search: false,
    selectableRows: "none",
    sort: true,
    viewColumns: false,
    print: false,
    pagination: true,
    serverSide: true,
    tableBodyMaxHeight: "70vh",
    count: count,
    page: page,
    rowsPerPage: rowsPerPage,
    onChangePage: setPage,
    onChangeRowsPerPage: setRowsPerPage,
    onColumnSortChange: (col, dir) =>
      setSort([{ fieldName: col, sortDirection: dir, priority: 0 }]),
    textLabels: {
      body: {
        noMatch: isLoaded
          ? "Sorry, there is no matching data to display"
          : "Loading...",
        columnHeaderTooltip: (column) => {
          return RushingTableColumns.find((x) => x.name === column.name)
            .toolTip;
        },
      },
    },
  };

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.header}
      >
        <Grid item>
          <Typography variant="h5" className={classes.title}>
            {"RUSHING STATS"}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <TableSearch search={search} setSearch={setSearch} />
            </Grid>
            <Grid item>
              <TableDownload downloadCSV={getCSV} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <MUIDataTable
        data={rows}
        columns={RushingTableColumns}
        options={options}
      />
    </>
  );
}
