import axios from 'axios'

const config = {
    headers: {
        'X-RapidAPI-Key': '371ffef09amsh80675fac4a9caa8p150e61jsn13e7dbc5fc09',
        'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
    }
}

export async function worldCharts(){
    
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', config);
        return response.data;
    }catch (error) {
        throw error;
    }
}