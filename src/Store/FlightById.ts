import IFlight from "../Interfaces/IFlight";
import { makeAutoObservable } from "mobx";
import FlightService from "../Services/FlightService";

class FlightById {
  flight: IFlight = {
    startAirport: "",
    endAirport: "",
    startTime: "",
    duration: "",
    id: 0,
  };

  public async getFlight(id: number = 1) {
    FlightService.GetFlightById(id).then((result) => {
      this.flight = result.data;
    });
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new FlightById();
