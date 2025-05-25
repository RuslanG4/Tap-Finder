import React from 'react';
import { View } from 'react-native';
import PubHeader from './Components/PubHomePage/PubHeader';
import { SearchBar } from 'react-native-elements';
import DrinksMenu from './DrinksMenu';

const PubPage: React.FC = (

) => {
  return (
   <View>
      <PubHeader />
      <SearchBar
        containerStyle={{
          backgroundColor: 'transparent',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          paddingHorizontal: 10,
        }}
        inputContainerStyle={{
          backgroundColor: '#e0e0e0',
          borderRadius: 10,
        }}
        inputStyle={{
          color: 'black',
        }}
        lightTheme 
        round
        placeholder="Search..."
      />
      <DrinksMenu />
    </View>
  );
};

export default PubPage;
