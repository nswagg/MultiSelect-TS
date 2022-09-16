import type { NextPage } from 'next'
import Select from '../components/Select';
import {data} from '../lib/data';
import { useState } from 'react';

const Home: NextPage = () => {
  //Multiple state objects to hold each select form
  const [select0, setSelected0] = useState([]);
  const [select1, setSelected1] = useState([]);

  return (
    <div> 
      <Select  
        options={data} // All available data options. Could be fetched from query
        title="Animal" //Placeholder
        setSelected={setSelected0} // Callback 
        selected={select0} // Active, selected values
      />
      <br />
      {/* Hide menu items on select */}
      <Select  
        options={data} // All available data options. Could be fetched from query
        title="Hidden Animals" //Placeholder
        setSelected={setSelected1} // Callback 
        selected={select1} // Active, selected values
        hide={true}
      />
    </div>
  )
}

export default Home
