import React from "react";
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
export declare const Orchestrator: ({ response, components, refresh, }: IProps) => JSX.Element;
export {};
