import { observer } from "mobx-react";
import React from "react";
import FlightById from "../Store/FlightById";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
export default class Flight extends React.Component<{ id: number }> {
  public componentDidMount() {
    FlightById.getFlight(this.props.id);
  }
  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Flight Number</StyledTableCell>
              <StyledTableCell align="left">Start airport</StyledTableCell>
              <StyledTableCell align="left">End airport</StyledTableCell>
              <StyledTableCell align="left">
                Plane departure time
              </StyledTableCell>
              <StyledTableCell align="left">Flight duration</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {FlightById.flight.id}
              </StyledTableCell>
              <StyledTableCell align="left">
                {FlightById.flight.startAirport}
              </StyledTableCell>
              <StyledTableCell align="left">
                {FlightById.flight.endAirport}
              </StyledTableCell>
              <StyledTableCell align="left">
                {FlightById.flight.startTime}
              </StyledTableCell>
              <StyledTableCell align="left">
                {FlightById.flight.duration}
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
