import React from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

  return (
    <SearchBarContainer>
      <SearchIcon name="search" />
      <SearchField
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder="Search"
        value={term}
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled(View)`
  align-self: center;
  background-color: rgb(240,240,240);
  border-radius: 5px;
  flex-direction: row;
  justify-content: flex-start;
  height: 50px;
  margin-bottom: 20px;
  margin-top: 15px;
  width: 90%;
`;

const SearchIcon = styled(Feather)`
  align-self: center;
  font-size: 40px;
  marginHorizontal: 10;
`;

const SearchField = styled(TextInput)`
  flex: 1;
  font-size: 20px;
`;

export default SearchBar;
