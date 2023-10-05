import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_KDN5iQ8R31cbA8LGzyld9yVAlR8XDjYbZulQwscfHo6qfaD25PavZK6o3ujcLe2K';

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatByBreed(breedID) {
  try {
    const response = await axios.get(
      'https://api.thecatapi.com/v1/images/search?breed_ids=${breedID}'
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
