import {observer} from 'mobx-react';
import { Grid } from '@material-ui/core';
import Flights from '../Store/Flights';

const FlightList = observer(()=>{
    return(
        <Grid>
            <h1> Flights list</h1>
    <table>

        <thead>
            <tr>
                <th align='left'>Flight Id</th>
                <th align='left'>Start airport</th>
                <th align='left'>End airport</th>
                <th align='left'>Plane departure time</th>
                <th align='left'>Flight duration</th>
            </tr>

        </thead>

        <tbody>
        {Flights.flights.map(f => {
            return(
            <tr key ={f.id}>
               <td align='left'> {f.id}</td>
               <td align='left'> {f.startAirport}</td>
               <td align='left'> {f.endAirport}</td>
               <td align='left'> {f.startTime}</td>
               <td align='left'> {f.duration}</td>
              <td> <button onClick={() => Flights.removeFlight(f.id)}>X</button> </td>
            </tr>
            )
        })}
        </tbody>

    </table> 
    </Grid>
    )
})
export default FlightList;