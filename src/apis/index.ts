const REACT_APP_BASE_URL_CAT = 'https://api.thecatapi.com/v1/';
const REACT_APP_BASE_URL_DOG = 'https://api.thedogapi.com/v1/';

export const Apis = {
    'get-cat-dog': {
        endpoint: (type: string, breedId?: string, page?: string) => (type === 'cat' ? REACT_APP_BASE_URL_CAT : REACT_APP_BASE_URL_DOG) + `images/search?limit=10&has_breeds=1&breed_ids=${breedId ? breedId : ""}&page=${page}`
    },
    'get-cat-dog-breeds': {
        endpoint: (type: string) => (type === 'cat' ? REACT_APP_BASE_URL_CAT : REACT_APP_BASE_URL_DOG) + 'breeds'
    }
}