import {observer} from 'mobx-react';
import { Grid } from '@material-ui/core';
import FlightById from '../Store/FlightById';

const Flight = observer(()=>{
    return(
        <Grid>
           <h1>Flight by Id: {FlightById.flight.id}</h1> 
        <table>

        <thead>
            <tr>
                <th align='left'>Start airport</th>
                <th align='left'>End airport</th>
                <th align='left'>Plane departure time</th>
                <th align='left'>Flight duration</th>
            </tr>

        </thead>

        <tbody>
            
            <tr >
               <td align='left'> {FlightById.flight.startAirport}</td>
               <td align='left'> {FlightById.flight.endAirport}</td>
               <td align='left'> {FlightById.flight.startTime}</td>
               <td align='left'> {FlightById.flight.duration}</td>
            </tr>
            
        </tbody>

        </table> 
    </Grid>
    )
})
export default Flight;