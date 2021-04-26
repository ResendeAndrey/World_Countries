import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../views/home';


const Routes: React.FC = () => {
  return (
    
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/:countryId"  />
        <Route path="*"  /> */}
      </Switch>
   
  );
}

export default Routes;