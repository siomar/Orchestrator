import React, {ReactPropTypes} from "react";

export const Loading = (): JSX.Element => {
  return <div>Carregando...</div>;
};

export const Section = (props:any): JSX.Element => {
  return <section {...props}>{props.children}</section>;
};

export const Div = (props:any): JSX.Element => {
  return <div {...props}>{props.children}</div>;
};
