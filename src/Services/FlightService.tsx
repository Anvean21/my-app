import axios from "axios";
import IFlight from "../Interfaces/IFlight";
import IPaginate from "../Interfaces/IPaginate";
import flightsApiURL from "../appsettings.json";

let url: string = flightsApiURL.flightsApiURL;

class FlightService {
  async GetFlights(
    pageNumber: number = 1,
    sorting: number = 0,
    property: string = "Id",
    seacrhData: string = ""
  ) {
    return await axios.get<IPaginate<IFlight>>(
      url +
        "?pageNumber=" +
        pageNumber +
        "&sorting=" +
        sorting +
        "&property=" +
        property +
        "&seacrhData=" +
        seacrhData
    );
  }

  async GetFlightById(id: number) {
    return await axios.get<IFlight>(url + id);
  }

  async DeleteFlight(id: number) {
    return await axios.delete<IFlight>(url + id);
  }
}
export default new FlightService();
