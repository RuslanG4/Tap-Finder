import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrinksDropDown from './DrinksDropDown';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const drinks= [
  {
    name: 'Guinness',
    price: 6.10,
    starRating:3 
  },
    {
    name: 'Harp',
    price: 5.80,
    starRating:4.5 
  },
]

const DrinksMenu : React.FC = ({
}) => {
  return (
     <View>
        <DrinksDropDown 
            title='Pints' 
            icon={<Ionicons name="beer" size={24} color="black" style={{ marginLeft: -10, marginRight:10 }} />
             }
             drinkInfo={drinks} />
        <DrinksDropDown 
            title='Ciders' 
            icon={<MaterialCommunityIcons name="beer" size={24} color="black" style={{ marginLeft: -10, marginRight:10 }} /> } 
            drinkInfo={drinks}/>
        <DrinksDropDown 
            title='Cocktails' 
            icon={<Fontisto name="cocktail" size={24} color="black" style={{ marginLeft: -10, marginRight:8 }} /> } 
            drinkInfo={drinks}/>
        <DrinksDropDown 
            title='Wines' 
            icon={<Ionicons name="wine" size={24} color="black" style={{ marginLeft: -9, marginRight:10 }}/> } 
            drinkInfo={drinks}/>
        <DrinksDropDown 
            title='Spirits' 
            icon={<FontAwesome5 name="glass-whiskey" size={16} color="black" style={{ marginLeft: -4, marginRight:14 }}/> } 
            drinkInfo={drinks}/>
     </View>
  )
}

export default DrinksMenu;