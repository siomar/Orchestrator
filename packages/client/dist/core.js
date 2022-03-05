var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect, Suspense } from "react";
export const Orchestrator = ({ response, refresh, OrchestratorConfig }) => {
    const [layout, setLayout] = useState({});
    useEffect(() => {
        try {
            _init();
        }
        catch (err) {
            Error(`Error:`);
        }
    }, [refresh]);
    const _init = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const initial_component = OrchestratorConfig[response["orchestrator:component"]];
            const constructor_layout = yield _createLayout(initial_component, {}, response.children);
            yield setLayout(constructor_layout);
        }
        catch (error) {
            Error(`Error: `);
        }
    });
    const _createLayout = (component, props, children, stacks) => {
        for (const child of children) {
            if (child.children) {
                stacks.push(_createLayout(OrchestratorConfig[child["orchestrator:component"]], Object.assign({}, child.props, { key: `orchestrator-${Math.random()}` })));
            }
            console.log(child);
            React.createElement(OrchestratorConfig[child["orchestrator:component"]], Object.assign({}, child.props, { key: `orchestrator-${Math.random()}` }), child.child && child.child);
        }
        return React.createElement(component, props, stacks);
    };
    return (React.createElement(Suspense, { fallback: OrchestratorConfig["orchestrator:loading"] }, layout));
};
