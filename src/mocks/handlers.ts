import { http, HttpResponse } from 'msw';
import { MOCK_DATA } from './data';

export const handlers = [
    // Intercept "GET https://example.com/user" requests...
    http.get('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&breed_ids=abob&page=0', () => {
        // ...and respond to them using this JSON response.
        return HttpResponse.json(MOCK_DATA)
    }),
]