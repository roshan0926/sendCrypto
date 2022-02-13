import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_GIPHY_API;


const useFetch = ({ keyword }) => {
  const [gifUrl, setgifUrl] = useState('');

  const fetchGifs = async () => {
    try {
      const respoons = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(' ').join('')}&limit=1`);
      const { data } = await respoons.json();

      setgifUrl(data[0]?.images?.dowsized_medium?.url)
    } catch (error) {
      setgifUrl('https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif')
    }
  }
  useEffect(() => {
    if (keyword) fetchGifs();
  },[keyword]);

  return gifUrl;
}

export default useFetch;