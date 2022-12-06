import axios from "axios";
import Information from "../models/id-models";

//install axios
//replace parameters with parameters from discogs api
export default function getInfo(
    id: number,
): Promise<Information | void> {
    return axios
    .get<Information>(`https://api.discogs.com/database/search${encodeURIComponent(id)}/information`, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
      },
    })
    .then((response) => {
      return response.data;
    });

}    