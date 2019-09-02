import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import BusinessDetail from './BusinessDetail';

const BusinessList = ({ title, businesses, navigation }) => {
  if(!businesses.length){
    return null;
  }
  return (
    <BusinessListContainer>
      <Title>{title}</Title>
      <FlatList 
        data={businesses}
        horizontal
        keyExtractor={ business => business.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('BusinessShow', { id: item.id })}>
              <BusinessDetail business={item} />
            </TouchableOpacity>
          );
        }}
      />
    </BusinessListContainer>
  );
};

const BusinessListContainer = styled(View)`
  margin-bottom: 20px;
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 15px;
`;

export default withNavigation(BusinessList);

