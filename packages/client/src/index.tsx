import React, { Suspense } from "react";

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
  const _createLayout = (
    component: any,
    props: any = {},
    children: any,
    stacks: any = []
  ): any => {
    try {
      for (const child of children) {
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

      return React.createElement(
        component,
        { ...props, key: `orchestrator-${Math.random()}` },
        stacks
      );
    } catch (error) {
      throw new Error(`Error Orchestrator: ${error}`);
    }
  };

  const _loadingLayout = () => {
    return (
      <Suspense fallback={<h1>Loading profile...</h1>}>
        {
          _createLayout(
            components[response["orchestrator:component"]],
            { key: `orchestrator-${Math.random()}`, ...response.props },
            response.child
          ) // first component
        }
      </Suspense>
    );
  };
  return _loadingLayout();
};
