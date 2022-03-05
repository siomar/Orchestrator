import React from "react";
interface IOrchestratorConfig {
    [data: string]: React.FC | any;
}
interface IProps {
    response: ILayout;
    refresh: boolean;
    OrchestratorConfig: IOrchestratorConfig;
}
interface ILayout {
    "orchestrator:component": string;
    props: any;
    child?: any;
    children?: ILayout[];
}
export declare const Orchestrator: ({ response, refresh, OrchestratorConfig }: IProps) => JSX.Element;
export {};
