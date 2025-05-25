import React, { useState, ReactElement } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ListItem } from "react-native-elements";
import DrinksDropDownContent from "./DrinksDropDownContent";
import { DrinksDropDownContentProps } from "./DrinksDropDownContent";

type DrinksDropDownProps = {
  drinkInfo : DrinksDropDownContentProps[];
  icon: ReactElement;
  title: string;
}

const DrinksDropDown : React.FC<DrinksDropDownProps> = ({
    drinkInfo,
    icon,
    title
}) => {
    const [isExpanded, setExpanded] = useState(false);

  return (
     <View>
        {
        <ListItem.Accordion
        content={
            <View style={styles.row}>
            <View style={styles.leftContent}>
                {icon}
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        }
         isExpanded={isExpanded}
        onPress={() => setExpanded(!isExpanded)}
        >
          {
  drinkInfo.map((drink, index) => (
    <ListItem key={index}>
      <ListItem.Content>
        <DrinksDropDownContent 
          name={drink.name} 
          price={drink.price} 
          starRating={drink.starRating} 
        />
      </ListItem.Content>
    </ListItem>
  ))
}
        
      </ListItem.Accordion>
        }
     </View>
  )
}

const styles = StyleSheet.create({
 row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DrinksDropDown;