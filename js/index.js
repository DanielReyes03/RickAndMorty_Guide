import {fetchData} from './utils/getData.js'
const API = 'https://rickandmortyapi.com/api/character/';
const charactersData = []
const fetchCharacters = async (url_API) => {
    try{
        await fetchData(url_API)
                .then(data => {
                    data.results.map(result => charactersData.push(result))
                    console.log(charactersData)
                    createInput();
                    showCharacters(5)
                })
                .catch(error => console.error(new Error('Some error ocurrs' + error)))
    }catch(err){
        console.error(new Error('Some error occurrs'))
    }
}

const showCharacters = (charactersNumber) => {
    let characters = [];
    for (let i = 0; i < charactersNumber; i++) {characters.push(charactersData[i])}
    $('.col').empty();
    for (let i = 0; i < charactersNumber; i++) {
      if(characters[i].status === 'Alive'){
        $(
          `   
          <div class="character-container__card">
          <div class="character-container__card--img">
              <img src="${characters[i].image}" alt="" srcset="">
          </div>
          <div class="character-container__card--description">
              <h3>${characters[i].name}</h3>
              <ul>
                  <li><b>Gender:</b> ${characters[i].gender}</li>
                  <li><b>Origin:</b> ${characters[i].origin.name}</li>
                  <li><b>Status:</b> <button class="status__alive">${characters[i].status}</button></li>
              </ul>
          </div>
      </div>
        `
      ).appendTo('.col');
      }else if(characters[i].status === 'Dead'){
        $(
          `   
          <div class="character-container__card">
          <div class="character-container__card--img">
              <img src="${characters[i].image}" alt="" srcset="">
          </div>
          <div class="character-container__card--description">
              <h3>${characters[i].name}</h3>
              <ul>
                  <li><b>Gender:</b> ${characters[i].gender}</li>
                  <li><b>Origin:</b> ${characters[i].origin.name}</li>
                  <li><b>Status:</b> <button class="status__dead">${characters[i].status}</button></li>
              </ul>
          </div>
      </div>
        `
      ).appendTo('.col');
      }else if(characters[i].status === 'unknown'){
        $(
          `   
          <div class="character-container__card">
          <div class="character-container__card--img">
              <img src="${characters[i].image}" alt="" srcset="">
          </div>
          <div class="character-container__card--description">
              <h3>${characters[i].name}</h3>
              <ul>
                  <li><b>Gender:</b> ${characters[i].gender}</li>
                  <li><b>Origin:</b> ${characters[i].origin.name}</li>
                  <li><b>Status:</b> <button class="status__unknown">${characters[i].status}</button></li>
              </ul>
          </div>
      </div>
        `
      ).appendTo('.col');
      }    
    }
}
const createInput = () => {
  for (let i = 1; i <= charactersData.length; i++) {
    $('#options__charactersNumber').append(
      `
      <option value="${i}">${i}</option>
      `
    )
  }
}
const readInputValue = () => {
  $('#options__charactersNumber').change(function() {
    let value = $('#options__charactersNumber option:selected').text()
    showCharacters(value)
  });
}
fetchCharacters(API)
readInputValue()