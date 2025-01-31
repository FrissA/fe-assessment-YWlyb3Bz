import { useState, useEffect, useCallback } from "react";

import Header from "@components/Header";
import Sidebar from "@components/SideBar";
import WorkflowTable from "@components/Workflow";
import WorkflowContext from "@contexts/WorkflowContext";
import Spinner from "@components/Spinner";
import { lastUpdatedFromUpdatedAt, tagGenerator } from "@utils";

import { fetchAirOpsApps } from "@api/airops";

import { Workflow, AirOpsApp } from "@types";

const App: React.FC = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);

  const getApps = useCallback(async () => {
    try {
      const apps: AirOpsApp[] = await fetchAirOpsApps();

      const workflows = apps.map(
        ({ id, uuid, name, version, updated_at }, index) => ({
          id,
          uuid,
          type: "Workflow",
          name,
          version,
          tags: tagGenerator(index),
          lastUpdated: lastUpdatedFromUpdatedAt(updated_at),
        })
      );

      setWorkflows(workflows);
    } catch (err) {
      //ToDo: replace with actual error message on screen instead of console.log
      console.log("error", err);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getApps();
  }, [getApps]);

  return (
    <div className="flex h-screen">
      <WorkflowContext.Provider value={{ workflows }}>
        <Sidebar />
        <main className="flex-1">
          <Header />
          {loading ? <Spinner /> : <WorkflowTable workflows={workflows} />}
        </main>
      </WorkflowContext.Provider>
    </div>
  );
};

export default App;
