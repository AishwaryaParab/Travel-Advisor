import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async(sw, ne) => {

    try {
        const response = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            // headers: {
            //   'X-RapidAPI-Key': '27c5f637f1msh080720edd67f4afp145631jsn6a375b8c69db',
            //   'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            // }
            headers: {
              'X-RapidAPI-Key': 'd4b3fb52f5mshf31db97942d351bp15bd24jsn9620de3778a0',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return response.data.data; //because response.data gives the data part of the response
    }catch(error) {
        console.error(error);
    }
};