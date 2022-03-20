import React from "react";
import { CardError,CardErrorTitle,CardErrorDescription } from './styles';

const Warning: React.FC = (props) => {
  return (
    <CardError>
      <CardErrorTitle>Error</CardErrorTitle>
      <CardErrorDescription>{props.children}</CardErrorDescription>
    </CardError>
  );
};

export default Warning;
