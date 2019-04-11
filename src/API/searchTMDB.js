import axios from 'axios'
import TMDBCredentials from './TMDBCredentials';

const searchTMDB = async (search) => {

  let searchParams = {
    params:{
      api_key: TMDBCredentials.key,
      query: search,
      language: `en-US`,
      include_adult: `credits`
    }
  }

    let response = await axios.get(`https://api.themoviedb.org/3/search/movie`, searchParams)

    let results = response.data.results

    let searchResults = []

    for (let result of results) {
      if(result.poster_path){

        let searchObj = {
          title: result.title,
          id: result.id,
          poster: `https://image.tmdb.org/t/p/w185${result.poster_path}`
        }

        searchResults.push(searchObj)

      }

    }
    return searchResults
}
export default searchTMDB;
