import IFlight from "../Interfaces/IFlight";
import { makeAutoObservable } from "mobx";
import FlightService from "../Services/FlightService";

class Flights {
  flights: IFlight[] = [];
  pagesCount: number = 0;
  totalCount: number = 0;

  public async searchedData(
    pageNumber: number,
    sorting?: number,
    property?: string,
    seacrhData?: string
  ) {
    FlightService.GetFlights(pageNumber, sorting, property, seacrhData).then(
      (result) => {
        this.flights = result.data.flights;
        this.pagesCount = result.data.pagesCount;
        this.totalCount = result.data.totalItems;
      }
    );
  }
  constructor() {
    makeAutoObservable(this);
  }

  removeFlight(id: number) {
    FlightService.DeleteFlight(id);
  }
}
export default new Flights();
