import React, { useState, useEffect, ReactElement } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import DrinksDropDownContent from "./DrinksDropDownContent";
import { DrinksDropDownContentProps } from "./DrinksDropDownContent";
import { InteractionManager } from "react-native";

type DrinksDropDownProps = {
  drinkInfo: DrinksDropDownContentProps[];
  icon: ReactElement;
  title: string;
};

const DrinksDropDown: React.FC<DrinksDropDownProps> = ({
  drinkInfo,
  icon,
  title,
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const filteredDrinks = drinkInfo.filter((drink) => drink.baseType === title);

  return (
    <View>
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
        <FlatList
          data={filteredDrinks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem>
              <ListItem.Content>
                <DrinksDropDownContent
                  baseType={item.baseType}
                  baseProps={item.baseProps}
                />
              </ListItem.Content>
            </ListItem>
          )}
        />
      </ListItem.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DrinksDropDown;
