import { useState } from 'react'
import './App.css'
import 'leaflet/dist/leaflet.css';
import DrinksMenu from './PubPage/PubPageBody/DrinksMenu';
import { Input} from 'antd';
import PubHeader from './PubPage/PubNameHeader/PubHeader';
const { Search } = Input;

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <PubHeader/>
      <Search placeholder="Search drink..." style={{ width: '95%' , margin:'10px' }} />
      <DrinksMenu/>
    </div>
  )
}

export default App
