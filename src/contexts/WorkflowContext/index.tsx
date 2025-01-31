import { createContext } from "react";

import { Workflow } from "@types";

interface WorkflowContextType {
  workflows: Workflow[];
}

const WorkflowContext = createContext<WorkflowContextType>({
  workflows: [],
});

export default WorkflowContext;
