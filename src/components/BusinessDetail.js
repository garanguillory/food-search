import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components';

const BusinessDetail = ({ business }) => {
  return (
    <BusinessDetailContainer>
      <BusinessImage source={{ uri: business.image_url }}/>
      <BusinessName>{business.name}</BusinessName>
      <BusinessReviews>{business.rating} Stars, {business.review_count} Reviews</BusinessReviews>
    </BusinessDetailContainer>
  );
};

const BusinessDetailContainer = styled(View)`
  margin-left: 15px;
`;

const BusinessImage = styled(Image)`
  border-radius: 5px;
  height: 150px;
  margin-bottom: 5px;
  width: 200px;
`;

const BusinessName = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

const BusinessReviews = styled(Text)`
  font-size: 14px;
`;

export default BusinessDetail;
