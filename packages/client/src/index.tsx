import React, { Suspense } from "react";

import Warning from "./components/Warning";

interface ILayout {
  "orchestrator:component": string;
  props: any;
  child?: ILayout | string;
  children?: ILayout[];
}

interface IOrchestratorConfig {
  [data: string]: React.FC | any;
}

interface IProps {
  response: ILayout;
  components: IOrchestratorConfig;
  refresh?: boolean;
}

export const Orchestrator = ({
  response,
  components,
  refresh = false,
}: IProps) => {
  const ErrorComponent = (message:string = "") => [
    React.createElement(Warning, {}, [`Error Orchestrator: ${message}`]),
  ];
  const CreateClassStyle = () => {};
  const _createLayout = (
    component: any,
    props: any = {},
    children: any,
    stacks: any = []
  ): any => {
    if (component === undefined) {
      return ErrorComponent(`Estrutura de layout incorreta! \n verifique as declarações e components incorporados.`);
    }
    try {
      for (const child of children) {
        if (components[child["orchestrator:component"]] === undefined) {
          return ErrorComponent(`component ${child["orchestrator:component"]} não encontrado!`);
        } else {
          if (child.children) {
            stacks.push(
              _createLayout(
                components[child["orchestrator:component"]],
                { ...child.props, key: `orchestrator-${Math.random()}` },
                child.children
              )
            );
          }
          if (child.child) {
            stacks.push(
              React.createElement(
                components[child["orchestrator:component"]],
                { ...child.props, key: `orchestrator-${Math.random()}` },
                child.child
              )
            );
          }
        }
      }

      return React.createElement(
        component,
        { ...props, key: `orchestrator-${Math.random()}` },
        stacks
      );
    } catch (error) {
      new Error(`Error Orchestrator: ${error}`);
    }
  };

  const _loadingLayout = () => {
    return _createLayout(
      components[response["orchestrator:component"]],
      { key: `orchestrator-${Math.random()}`, ...response.props },
      response.child
    );
  };
  return _loadingLayout();
};
