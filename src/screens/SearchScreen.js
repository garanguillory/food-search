import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const filterBusinessesByPrice = price => {
    return businesses.filter(businesses => {
      return businesses.price === price;
    });
  };

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={searchApi} 
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} businesses</Text>
      <BusinessesList businesses={filterBusinessesByPrice('$')} title="Cost Effective" />
      <BusinessesList businesses={filterBusinessesByPrice('$$')} title="Bit Pricier" />
      <BusinessesList businesses={filterBusinessesByPrice('$$$')} title="Big Spender" />
    </View>
  );
};

export default SearchScreen;
