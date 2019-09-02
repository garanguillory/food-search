import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [businesses, setBusinesses] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'new york city'
        }
      });
      setBusinesses(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  }

  useEffect(() => {
    searchApi('breakfast');
  }, []);

  return [searchApi, businesses, errorMessage];
};