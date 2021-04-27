import { CircularProgress } from '@material-ui/core';
import React from 'react';

import { IsLoading } from './styles';

const Loading: React.FC = () => {
  return (
    <IsLoading>
          <CircularProgress /> 
    </IsLoading>
  );
}

export default Loading;