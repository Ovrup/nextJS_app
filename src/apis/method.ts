// cat_api_key=live_S5lC15IDou6v3gXpzOPtT7wcsZkwVhIj4smxDPC676J1WKmB3jHJMHm5AtDSCZdq
// dog_api_key=live_o2o7TlIABj38tzLimPwYaPbbSYqVzG9SE6MecD9WukcL6HXxaAb0AelUM0aPEdMH
//https://dog.ceo/api/breeds/list/all
//https://api.thecatapi.com/v1/images/search?limit=30

import { Apis } from "./index";

export const getCatDogData = async (type: string = 'cat', breedId?: string, page?: string) => {
    const response = await fetch(Apis['get-cat-dog'].endpoint(type, breedId, page), {
        cache: 'no-store',
        // headers: {
        //     'x-api-key': 'live_o2o7TlIABj38tzLimPwYaPbbSYqVzG9SE6MecD9WukcL6HXxaAb0AelUM0aPEdMH'
        // }
    });
    const data = await response.json();
    data.pop()

    return data.map((ele: any) => {
        let obj: any = {
            id: ele.id,
            url: ele.url
        }
        if (ele.breeds && ele.breeds.length) {
            obj['details'] = {
                name: ele.breeds[0].name,
                life_span: ele.breeds[0].life_span,
                group: ele.breeds[0].breed_group,
                weight: ele.breeds[0].weight.imperial,
                height: ele.breeds[0].height.imperial
            }
        }

        return obj
    })
}

export const getCatDogBreedsData = async (type: string) => {
    const response = await fetch(Apis['get-cat-dog-breeds'].endpoint(type));
    let breeds = await response.json();

    return breeds.map((breed: any) => {
        return { id: breed.id, name: breed.name }
    });

}