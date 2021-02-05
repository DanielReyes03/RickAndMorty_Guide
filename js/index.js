import {fetchData} from './utils/getData.js'
const API = 'https://rickandmortyapi.com/api/character/';
const charactersData = []


const fetchCharacters = async (url_API) => {
    try{
        loading(false);
        await fetchData(url_API)
                .then(data => {
                    data.results.map(result => charactersData.push(result))
                    loading(true);
                })
                .catch(error => console.error(new Error('Some error ocurrs' + error)))
    }catch(err){
        console.error(new Error('Some error occurrs'))
    }
}
const loading = (status) => {
    if(status){
        console.log('loaded', new Date().getMilliseconds())
    }else{
        console.log('loading', new Date().getMilliseconds())
    }

}
fetchCharacters(API)