import { IFlight } from '../Interfaces';
import { makeAutoObservable } from "mobx";
import GetAll from '../Services/Get'

class Flights{
    
    flights:IFlight[] = [];
    flightsFromWebApi =  GetAll.GetFlights('https://localhost:44387/api/flights').then(res => {this.flights = res.data.slice()})

    
constructor(){
    makeAutoObservable(this)
}

addFlight(){

}
removeFlight(id:number){
    //Тут можно принимать flightsFromWebApi и обновлять.
    // flightsFromWebApi = GetAll.DeleteFlightById('https://localhost:44387/api/flights',id).then(res => {this.flights = res.data.slice()})
    GetAll.DeleteFlightById('https://localhost:44387/api/flights',id);
}
}
export default new Flights();