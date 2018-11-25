import axios from 'axios'

import TMDBCredentials from './TMDBCredentials';



const getById = async (id) =>{
      let searchParms = {
        params:{
          api_key: TMDBCredentials.key,
          // api_key: `4908d47c6d783b91c1720d4e471fd067`,
          language: `en-US`,
          append_to_response: `credits`
        }
      }

      let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, searchParms)

      let cast = response.data.credits.cast
      let crew = response.data.credits.crew



      let castArray = [];
      let crewObj = {};


      for (let castMember of cast) {
        if(castMember.profile_path){
        let newCastMember = {
          name: castMember.name,
          character: castMember.character,
          profilePic: `http://image.tmdb.org/t/p/w185${castMember.profile_path}`
        }
        castArray.push(newCastMember)
        }
      }


      for (let crewMember of crew) {
        if(crewMember.job === 'Director'){
          crewObj.director = crewMember.name
        }
        if(crewMember.job === 'Screenplay'){
          crewObj.writer = crewMember.name
        }


      }


      let infoObject = {
        title: response.data.title,
        overview: response.data.overview,
        poster: `http://image.tmdb.org/t/p/w500/${response.data.poster_path}`,
        backdrop: `http://image.tmdb.org/t/p/original/${response.data.backdrop_path}`,
        runtime: response.data.runtime,
        director: crewObj.director,
        writer: crewObj.writer,
        cast: castArray
      }

    return infoObject;
}

export default getById
