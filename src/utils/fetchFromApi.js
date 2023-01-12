import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "1a2e4c92b6msheeec672880a29c4p18457fjsnfebbc9647ca8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

//logic for getting data from the api
export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
