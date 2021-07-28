import axios from 'axios';
import {IFlight} from '../Interfaces'

const GetAll = {
    GetFlights:async function(url:string) {  
      return await axios.get<IFlight[]>(url);
    },
    
    GetFlightById:async function(url:string,id:number)  {  
      return await axios.get<IFlight>(url+"/"+id);
      },
  
    DeleteFlightById:async function(url:string,id:number)  {  
      //тут можно возвращать getаll и в сторе флайтс получать
      return await axios.delete<IFlight>(url+"/"+id);
      }
}
export default GetAll