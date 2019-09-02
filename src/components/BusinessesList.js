import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components';
import BusinessDetail from './BusinessDetail';

const BusinessList = ({ title, businesses }) => {
  return (
    <BusinessListContainer>
      <Title>{title}</Title>
      {/* <Text>Businesses: {businesses.length}</Text> */}
      <FlatList 
        data={businesses}
        horizontal
        keyExtractor={ business => business.id}
        renderItem={({ item }) => {
          return <BusinessDetail business={item} />
        }}
      />
    </BusinessListContainer>
  );
};

const BusinessListContainer = styled(View)`
  
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
`;

export default BusinessList;

