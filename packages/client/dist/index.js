import React from "react";
import Warning from "./components/Warning";
export const Orchestrator = ({ response, components, refresh = false, }) => {
    const ErrorComponent = (message = "") => [
        React.createElement(Warning, {}, [`Error Orchestrator: ${message}`]),
    ];
    const CreateClassStyle = () => { };
    const _createLayout = (component, props = {}, children, stacks = []) => {
        if (component === undefined) {
            return ErrorComponent(`Estrutura de layout incorreta! \n verifique as declarações e components incorporados.`);
        }
        try {
            for (const child of children) {
                if (components[child["orchestrator:component"]] === undefined) {
                    return ErrorComponent(`component ${child["orchestrator:component"]} não encontrado!`);
                }
                else {
                    if (child.children) {
                        stacks.push(_createLayout(components[child["orchestrator:component"]], Object.assign(Object.assign({}, child.props), { key: `orchestrator-${Math.random()}` }), child.children));
                    }
                    if (child.child) {
                        stacks.push(React.createElement(components[child["orchestrator:component"]], Object.assign(Object.assign({}, child.props), { key: `orchestrator-${Math.random()}` }), child.child));
                    }
                }
            }
            return React.createElement(component, Object.assign(Object.assign({}, props), { key: `orchestrator-${Math.random()}` }), stacks);
        }
        catch (error) {
            new Error(`Error Orchestrator: ${error}`);
        }
    };
    const _loadingLayout = () => {
        return _createLayout(components[response["orchestrator:component"]], Object.assign({ key: `orchestrator-${Math.random()}` }, response.props), response.child);
    };
    return _loadingLayout();
};
