
// this function returns a list of heroes filtered by publisher
// if the publisher is not valid, it throws an error
// the publisher must be one of the following: DC Comics, Marvel Comics
// the function is exported to be used in other files like HeroList.jsx

import {heroes} from '../data/heroes';

export const getHeroeByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" is not valid. Valid publishers are: ${validPublisher}`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);

}

