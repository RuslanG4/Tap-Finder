import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrinksDropDown from './DrinksDropDown';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { DrinksDropDownContentProps } from './DrinksDropDownContent';

type DrinksMenuProps={
  drinksResponse: DrinksDropDownContentProps[];
}

const DrinksMenu : React.FC<DrinksMenuProps> = ({
  drinksResponse
}) => {
  return (
     <View>
        <DrinksDropDown 
            title='Pints' 
            icon={<Ionicons name="beer" size={24} color="black" style={{ marginLeft: -10, marginRight:10 }} />
             }
             drinkInfo={drinksResponse} />
        <DrinksDropDown 
            title='Ciders' 
            icon={<MaterialCommunityIcons name="beer" size={24} color="black" style={{ marginLeft: -10, marginRight:10 }} /> } 
            drinkInfo={drinksResponse}/>
        <DrinksDropDown 
            title='Cocktails' 
            icon={<Fontisto name="cocktail" size={24} color="black" style={{ marginLeft: -10, marginRight:8 }} /> } 
            drinkInfo={drinksResponse}/>
        <DrinksDropDown 
            title='Wines' 
            icon={<Ionicons name="wine" size={24} color="black" style={{ marginLeft: -9, marginRight:10 }}/> } 
            drinkInfo={drinksResponse}/>
        <DrinksDropDown 
            title='Spirits' 
            icon={<FontAwesome5 name="glass-whiskey" size={16} color="black" style={{ marginLeft: -4, marginRight:14 }}/> } 
            drinkInfo={drinksResponse}/>
     </View>
  )
}

export default DrinksMenu;