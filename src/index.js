import { fetchBreeds, fetchCatByBreed } from './cat-api';

const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

function hideLoader() {
  loader.style.display = 'none';
}
function showError() {
  error.style.display = 'block';
}

async function addBreedOption() {
  try {
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching breeds:', error);
    showError();
  }
}

async function displayCatInfo(breedID) {
  try {
    const catData = await fetchCatByBreed(breedID);
    const cat = catData[0];
    const catInfoHTML = `
    <h2>${cat[0].breeds[0].name}</h2>
    <p><strong>Description:</strong> ${cat[0].breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${cat[0].breeds[0].temperament}</p>
    <img src="${cat[0].url}" alt="${cat[0].breeds[0].name}" />
  `;
    catInfo.innerHTML = catInfoHTML;
    catInfo.style.display = 'block';
  } catch (error) {
    console.error('Error fetching cat info:', error);
    showError();
  }
}

breedSelect.addEventListener('change', async event => {
  const breedId = event.target.value;
  catInfo.style.display = 'none';
  loader.style.display = 'block';
  error.style.display = 'none';
  try {
    await displayCatInfo(breedId);
  } catch (error) {
    console.error('Error fetching cat info:', error);
    showError();
  } finally {
    hideLoader();
  }
});

addBreedOption().then(hideLoader());
