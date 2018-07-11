const imdb = require('imdb-api');

const getById = async (id) =>{
    const cli = new imdb.Client({ apiKey: '40e9cece' });
    let response = await cli.get({ id: id });
    // console.log(response);
    return response;
}

export default getById
