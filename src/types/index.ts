interface Tag {
  name: string;
  color: string;
}

interface AirOpsApp {
  id: number;
  uuid: string;
  version: number;
  name: string;
  updated_at: string;
}

interface Workflow {
  id: number;
  uuid: string;
  version: number;
  name: string;
  type: string;
  tags: Tag[];
  lastUpdated: string;
}

interface WorkflowTableProps {
  workflows: Workflow[];
}

export type { Workflow, WorkflowTableProps, AirOpsApp, Tag };
