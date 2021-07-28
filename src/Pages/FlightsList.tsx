import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import Pagination from "@material-ui/lab/Pagination";
import Flights from "../Store/Flights";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

@observer
export default class FlightsList extends React.Component {
  public componentDidMount() {
    Flights.searchedData(1);
  }

  //типизировать ивент SyntheticBaseEvent
  private handleChange = (event: any, pageNumber: number) => {
    Flights.searchedData(pageNumber);
  };
  private handleSorting = (
    pageNumber: number,
    sorting: number,
    property: string
  ) => {
    Flights.searchedData(pageNumber, sorting, property);
  };
  private handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // debugger;
    Flights.searchedData(1, 0, "Id", event.target.value);
  };

  render() {
    return (
      <TableContainer component={Paper}>
        <Input
          placeholder="Search by StartAirport"
          onChange={this.handleSearch}
        />
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Flight Number
                <Button
                  color="default"
                  variant="contained"
                  onClick={() => this.handleSorting(1, 1, "Id")}
                >
                  DESC
                </Button>
                <Button
                  color="default"
                  variant="contained"
                  onClick={() => this.handleSorting(1, 0, "Id")}
                >
                  ASC
                </Button>
              </StyledTableCell>
              <StyledTableCell align="left">Start airport</StyledTableCell>
              <StyledTableCell align="left">End airport</StyledTableCell>
              <StyledTableCell align="left">
                Plane departure time
                <Button
                  color="default"
                  variant="contained"
                  onClick={() => this.handleSorting(1, 1, "Duration")}
                >
                  DESC
                </Button>
                <Button
                  color="default"
                  variant="contained"
                  onClick={() => this.handleSorting(1, 0, "Duration")}
                >
                  ASC
                </Button>
              </StyledTableCell>
              <StyledTableCell align="left">
                Flight duration
                <Button
                  color="default"
                  variant="contained"
                  onClick={() => this.handleSorting(1, 1, "StartTime")}
                >
                  DESC
                </Button>
                <Button
                  color="default"
                  variant="contained"
                  onClick={() => this.handleSorting(1, 0, "StartTime")}
                >
                  ASC
                </Button>
              </StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Flights.flights.map((flight) => (
              <StyledTableRow key={flight.id}>
                <StyledTableCell component="th" scope="row">
                  {flight.id}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {flight.startAirport}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {flight.endAirport}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {flight.startTime}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {flight.duration}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    color="default"
                    variant="contained"
                    href={"/flight/" + flight.id}
                  >
                    Details
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination count={Flights.pagesCount} onChange={this.handleChange} />
      </TableContainer>
    );
  }
}
