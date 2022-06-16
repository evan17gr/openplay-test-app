import {useEffect, useState} from 'react';

/**
 * Fetch data from a resource
 * @param {string} url - Url to fetch data from
 * @returns {{data:Array<Object>,isLoading:boolean;error:object}} - Fetched data, whether the request has been completed or not,error message in case of a failed request
 */

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {headers: {'Content-Type': 'application/json', Accept: 'application/json'}});
      let data = (await response.json())?.data;
      setData(data);
    } catch (err) {
      console.log(err, 'err');
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
