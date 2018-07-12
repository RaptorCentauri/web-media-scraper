// import imdb from 'imdb'
const imdb = require('imdb-api');
    
const searchOMDB = async (str) => {
    let results = [];
    const cli = new imdb.Client({ apiKey: '40e9cece'});
    let response = await cli.search({name: str});
    
    response.results.forEach(item => {
        if (item.type == "movie" || item.type == "series" ) {
            results.push(item);
        }
    });

    console.log(results);

    return results
}

export default searchOMDB;