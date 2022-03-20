import React from "react";
import { CardError, CardErrorTitle, CardErrorDescription } from './styles';
const Warning = (props) => {
    return (React.createElement(CardError, null,
        React.createElement(CardErrorTitle, null, "Error"),
        React.createElement(CardErrorDescription, null, props.children)));
};
export default Warning;
