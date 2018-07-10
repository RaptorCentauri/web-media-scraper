// import imdb from 'imdb'
const imdb = require('imdb-api');
    
const searchOMDB = async (str) => {
    const cli = new imdb.Client({ apiKey: '40e9cece'});
    let response = await cli.search({name: str});
    return response.results
}

export default searchOMDB;