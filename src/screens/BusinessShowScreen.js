import React, { useEffect, useState } from 'react';
import { FlatList, Image,  View, Text } from 'react-native';
import yelp from '../api/yelp';
import styled from 'styled-components';

const BusinessShowScreen = ({ navigation }) => {
  const [business, setBusiness] = useState(null);
  const id = navigation.getParam('id');

  const getBusiness = async id => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, [])

  if(!business){
    return null;
  }

  return (
    <View>
      <Text>{business.name}</Text>
        <FlatList 
          data={business.photos}
          keyExtractor={photo => photo}
          renderItem={({item}) => {
            return <BusinessImage source={{ uri: item }} />
          }}
        />
    </View>
  );
};

const BusinessImage = styled(Image)`
  border-radius: 5px;
  height: 150px;
  margin-bottom: 5px;
  width: 200px;
`;

export default BusinessShowScreen;
