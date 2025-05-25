import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import PubHeader from "./Components/PubHomePage/PubHeader";
import { SearchBar } from "react-native-elements";
import DrinksMenu from "./DrinksMenu";
import DrinksDropDownContent from "./DrinksDropDownContent";

//fake response
const drinks = [
  {
    type: "Pints",
    contents: [
      {
        name: "Guinness",
        price: 6.1,
        starRating: 3,
      },
      {
        name: "Harp",
        price: 5.8,
        starRating: 4.5,
      },
    ],
  },
  {
    type: "Ciders",
    contents: [
      {
        name: "Bulmers",
        price: 5.8,
        starRating: 2.5,
      },
    ],
  },
  {
    type: "Cocktails",
    contents: [
      {
        name: "Sex on the beach",
        price: 9.8,
        starRating: 4.75,
      },
    ],
  },
  {
    type: "Wines",
    contents: [
      {
        name: "Chardonnay",
        price: 6.8,
        starRating: 1.75,
      },
    ],
  },
  {
    type: "Spirits",
    contents: [
      {
        name: "Hennessey",
        price: 5.6,
        starRating: 5,
      },
      {
        name: "Bacardi",
        price: 5.3,
        starRating: 4,
      },
    ],
  },
];


const PubPage: React.FC = () => {
  const [search, SetSearch] = useState("");

  const allDrinks = drinks.flatMap(group =>
    group.contents.map(drink => ({
      ...drink,
      type: group.type,
    }))
  );

  const filteredData = search.length > 0
    ? allDrinks.filter(drink =>
        drink.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <View>
      <PubHeader />
      <SearchBar
        containerStyle={{
          backgroundColor: "transparent",
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
          paddingHorizontal: 10,
        }}
        inputContainerStyle={{
          backgroundColor: "#e0e0e0",
          borderRadius: 10,
        }}
        inputStyle={{
          color: "black",
        }}
        lightTheme
        round
        placeholder="Search..."
        value={search}
        onChangeText={(value) => SetSearch(value)}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DrinksDropDownContent
          baseProps={item}
          baseType={item.type}
          isSearched={true}
          />
        )}
      />
        <DrinksMenu
          drinksResponse={drinks.flatMap(group =>
            group.contents.map(drink => ({
              baseType: group.type,
              baseProps: drink,
            }))
          )}
        />
    </View>
  );
};

export default PubPage;
