
    import { IFlight } from '../Interfaces';
    import { makeAutoObservable } from "mobx";
    import GetAll from '../Services/Get' 

    class FlightById{
        
    flight:IFlight = {startAirport:'', endAirport:'', startTime:'', duration:'', id:0 }
    flightFromWebApi =  GetAll.GetFlightById('https://localhost:44387/api/flights',1).then(res => {this.flight = res.data})

        
    constructor(){
        makeAutoObservable(this)
    }
    
    }
    export default new FlightById();
