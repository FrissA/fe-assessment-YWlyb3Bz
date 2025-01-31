import useAirOps from "@hooks/useAirops";

import { Workflow } from "@types";

import pencil from "@assets/pencil.svg";
import trashCan from "@assets/trashCan.svg";

import { RESTAURANT_REVIEWS } from "@constants/index";

const WorkflowRow: React.FC<Workflow> = ({
  uuid,
  version,
  type,
  name,
  tags,
  lastUpdated,
}) => {
  const airOps = useAirOps();

  return (
    <tr className="border-b">
      <td className="p-2">{type}</td>
      <td className="p-2">
        <button
          onClick={() =>
            airOps.executeAirops({
              appId: uuid,
              version,
              review:
                RESTAURANT_REVIEWS[
                  Math.trunc(Math.random() * RESTAURANT_REVIEWS.length)
                ],
            })
          }
        >
          {name}
        </button>
      </td>
      {/* ToDo: Match tag styles to design */}
      <td className="p-2 flex space-x-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded"
          >
            {tag.name}
          </span>
        ))}
      </td>
      <td className="text-gray-400 p-2">{lastUpdated}</td>
      <td className="p-2">
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-100 rounded-md">
            <img className="w-13 h-13" alt="Modify Icon" src={pencil} />
          </button>
          <button className="p-2 bg-gray-100 rounded-md">
            <img className="w-13 h-13" alt="Delete Icon" src={trashCan} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WorkflowRow;
