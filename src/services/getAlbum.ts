import axios from "axios";
import { Results, Search} from "../models/id-models";



//replace parameters with parameters from discogs api
export default function getAlbum(
    query: string,
  ): Promise<Search[] | void> {
    return axios
      .get<Results>(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          addRecipeNutrition: true,
          addRecipeInformation: true,
          query: query,
        },
      })
      .then((response) => {
        return response.data.results;
      });
  }