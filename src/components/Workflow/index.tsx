import WorkflowRow from "./WorkflowRow";

import { WorkflowTableProps } from "@types";

const WorkflowTable: React.FC<WorkflowTableProps> = ({ workflows }) => (
  <div className=" p-4">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b text-left">
          <th className="p-2">Type</th>
          <th className="p-2">Name</th>
          <th className="p-2">Tags</th>
          <th className="p-2">Last Updated</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {workflows.map((workflow, index) => (
          <WorkflowRow key={index} {...workflow} />
        ))}
      </tbody>
    </table>
  </div>
);

export default WorkflowTable;
