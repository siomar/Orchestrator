import React from 'react';

import { Animation,AnimationLoading } from './styles';

const Loading: React.FC = () => {
  return <Animation>
    <AnimationLoading></AnimationLoading>
  </Animation>;
}

export default Loading;