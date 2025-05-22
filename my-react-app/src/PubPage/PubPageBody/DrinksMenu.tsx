import React from "react";
import DrinkOverview from "./DrinkOverview";
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import GuinessImage from "../../assets/Guiness.png"

//temp befre db
const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Pints',
    children: <>
   <DrinkOverview name='Guinness' filePath={GuinessImage} priceValue={5.10} ratingValue={5}/>
   <DrinkOverview name='NotGuinness' filePath={GuinessImage} priceValue={5.80} ratingValue={3}/>
   <DrinkOverview name='AnotherGuinness' filePath={GuinessImage} priceValue={6.40} ratingValue={4.3}/>
   </>,
  },
  {
    key: '2',
    label: 'Cocktails',
    children: <>
   <DrinkOverview name='Guinness' filePath={GuinessImage} priceValue={5.10} ratingValue={5}/>
   <DrinkOverview name='NotGuinness' filePath={GuinessImage} priceValue={5.80} ratingValue={3}/>
   <DrinkOverview name='AnotherGuinness' filePath={GuinessImage} priceValue={6.40} ratingValue={4.3}/>
   </>,
  },
  {
    key: '3',
    label: 'Wines',
    children: <>
   <DrinkOverview name='Guinness' filePath={GuinessImage} priceValue={5.10} ratingValue={5}/>
   <DrinkOverview name='NotGuinness' filePath={GuinessImage} priceValue={5.80} ratingValue={3}/>
   <DrinkOverview name='AnotherGuinness' filePath={GuinessImage} priceValue={6.40} ratingValue={4.3}/>
   </>,
  },
   {
    key: '4',
    label: 'Ciders',
    children: <>
   </>,
  },
   {
    key: '5',
    label: 'Spirits',
    children: <>
   </>,
  },
];

const DrinksMenu : React.FC = ({
}) => {
  return (
     <Collapse items={items} defaultActiveKey={['1']}/>
  )
}

export default DrinksMenu;