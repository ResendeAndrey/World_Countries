import React from 'react';
import Dropdown from '../../components/Dropdown';
import { HomPage } from './style';


import dropDownOptions from './utils';

const Home: React.FC = () => {
  return (
    <HomPage>
      
      <nav>
     <div>
       <input type="text"/>
      </div> 
      <div>
        <Dropdown 
          placeholder="Filter by Region"
          options={dropDownOptions}
          onChange={() => {}}
        />
      </div>
      </nav>
     
    </HomPage>
  );
}

export default Home;