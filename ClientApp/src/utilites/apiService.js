import axios from "axios";

export const getRushingStats = (sort, filter, page, rowsPerPage) =>
  axios.post("rushingstats/get", { sort, filter, page, rowsPerPage });

export const getRushingStatsCSV = (sort, filter, page, rowsPerPage) =>
  axios.post(
    "rushingstats/getcsv",
    { sort, filter, page, rowsPerPage },
    { responseType: "blob" }
  );
