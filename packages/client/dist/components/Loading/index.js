import React from 'react';
import { Animation, AnimationLoading } from './styles';
const Loading = () => {
    return React.createElement(Animation, null,
        React.createElement(AnimationLoading, null));
};
export default Loading;
