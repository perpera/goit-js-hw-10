import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

window.addEventListener('load', addBreedOption);

async function addBreedOption() {
  let breedsData;

  try {
    breedsData = await fetchBreeds();

    breedsData.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });

    breedSelect.classList.remove('is-hidden');
    loader.classList.add('is-hidden');
  } catch (error) {
    console.error(error);
    error.classList.remove('is-hidden');
    breedSelect.classList.add('is-hidden');
    loader.classList.add('is-hidden');
  }

  breedSelect.addEventListener('change', async () => {
    const selectBreedId = breedSelect.value;

    loader.classList.remove('is-hidden');
    catInfo.classList.add('is-hidden');
    error.classList.add('is-hidden');

    try {
      const result = await fetchCatByBreed(selectBreedId);
      const catData = result[0];
      const breedData = breedsData.find(
        breed => breed.id === catData.breeds[0].id
      );

      const markup = createMarkup(catData, breedData);
      catInfo.innerHTML = markup;

      loader.classList.add('is-hidden');
      catInfo.classList.remove('is-hidden');
    } catch (error) {
      console.error(error);
      error.classList.remove('is-hidden');
      loader.classList.add('is-hidden');
    }
  });
}

function createMarkup(catData, breedData) {
  return `
    <img src='${catData.url}' width='400' alt='${breedData.name}'/>
    <div class='textInfo'>
      <h1>${breedData.name}</h1>
      <p>${breedData.description}</p>
      <p><b>Temperament:</b> ${breedData.temperament}</p>
    </div>
  `;
}
