import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import layout from "./layout.json";
import OrchestratorConfig from "./orchestrator_config";
import { Orchestrator } from "@orchestrator/client";



ReactDOM.render(
  <React.StrictMode>
     <Orchestrator response={layout} components={OrchestratorConfig} />
  </React.StrictMode>,
  document.getElementById('root')
)
