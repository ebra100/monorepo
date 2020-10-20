import * as urls from "../../constants/urls"

export const getMovies = function () {

    const response = fetch(urls.GET_MOVIES_LINK, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

    });

    return response
}