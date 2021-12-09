import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '709528d184msh760cdd5e4c34cecp1c13b3jsnac67ab5fe69b'
    }
  });
    
  return data;
}


