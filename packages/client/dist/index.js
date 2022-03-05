import React, { Suspense } from "react";
export const Orchestrator = ({ response, components, refresh = false, }) => {
    const _createLayout = (component, props = {}, children, stacks = []) => {
        try {
            for (const child of children) {
                if (child.children) {
                    stacks.push(_createLayout(components[child["orchestrator:component"]], Object.assign(Object.assign({}, child.props), { key: `orchestrator-${Math.random()}` }), child.children));
                }
                if (child.child) {
                    stacks.push(React.createElement(components[child["orchestrator:component"]], Object.assign(Object.assign({}, child.props), { key: `orchestrator-${Math.random()}` }), child.child));
                }
            }
            return React.createElement(component, Object.assign(Object.assign({}, props), { key: `orchestrator-${Math.random()}` }), stacks);
        }
        catch (error) {
            throw new Error(`Error Orchestrator: ${error}`);
        }
    };
    const _loadingLayout = () => {
        return (React.createElement(Suspense, { fallback: React.createElement("h1", null, "Loading profile...") }, _createLayout(components[response["orchestrator:component"]], Object.assign({ key: `orchestrator-${Math.random()}` }, response.props), response.child)));
    };
    return _loadingLayout();
};
