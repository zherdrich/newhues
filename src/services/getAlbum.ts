import axios from "axios";
import { Results, Search} from "../models/id-models";



//replace parameters with parameters from discogs api
export default function getAlbum(
  query: string, apiKey: string
  ): Promise<Results> {
    
   
    return axios
      .get<Results>(`https://api.discogs.com/database/search`, {
        params: {
          q: query,
          apiKey: apiKey,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
