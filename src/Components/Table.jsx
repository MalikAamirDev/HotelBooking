import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/system";
import { red } from "@mui/material/colors";

const useStyle = makeStyles((theme) => ({
  table: {},
  tableContainer: {
    borderRadius: 15,
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: red[500],
    color: "white",
  },
  countryName: {
    fontWeight: 500,
    fontSize: "16px",
  },
}));

export default function MTable({ userData }) {
  const classes = useStyle();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mx: 1,
          mt: 5,
        }}
      >
        <Box>
          <Typography variant="h5">Bookings</Typography>
        </Box>
        <TableContainer
          sx={{ pt: 2 }}
          component={Paper}
          className={classes.tableContainer}
        >
          <Table
            sx={{ minWidth: 800, overflow: "hidden" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ width: 300 }}
                  className={classes.tableHeaderCell}
                  align="left"
                >
                  Name
                </TableCell>
                <TableCell className={classes.tableHeaderCell} align="right">
                  Nights
                </TableCell>
                <TableCell className={classes.tableHeaderCell} align="right">
                  Contact
                </TableCell>

                <TableCell className={classes.tableHeaderCell} align="right">
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((e, i) => {
                  return (
                    <>
                      <TableRow>
                        <TableCell component="th" scope="row" align="left">
                          <Grid className="tablehead" type="button" container>
                            <Grid item lg={10} sx={{ pt: 1.5, ml: 1 }}>
                              <Typography className={classes.countryName}>
                                {e.data.name}
                              </Typography>
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell align="right">{e.data.nights}</TableCell>
                        <TableCell align="right">{e.data.contact}</TableCell>

                        <TableCell align="right">{e.data.email}</TableCell>
                      </TableRow>
                    </>
                  );
                })}
            </TableBody>
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={[5, 10, 50]}
                count={userData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
