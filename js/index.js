import {fetchData} from './utils/getData.js'
const API = 'https://rickandmortyapi.com/api/character/';
const charactersData = []
const fetchCharacters = async (url_API) => {
    try{
        await fetchData(url_API)
                .then(data => {
                    data.results.map(result => charactersData.push(result))
                    showCharacters(charactersData)
                })
                .catch(error => console.error(new Error('Some error ocurrs' + error)))
    }catch(err){
        console.error(new Error('Some error occurrs'))
    }
}

const showCharacters = (characters) => {
    $(
        `       
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      `
    ).appendTo('#characters');
}
fetchCharacters(API)