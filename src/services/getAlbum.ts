import axios from "axios";
import TrackInfo from "../models/SpotifyInterface";



//replace parameters with parameters from discogs api
export default function getAlbum(
  query: string, apiKey: string
  ): Promise<TrackInfo[]> {
    
   
    return axios
      .get<TrackInfo[]>(`https://api.spotify.com/v1/search`, {
        params: {
          q: query,
          apiKey: apiKey,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
