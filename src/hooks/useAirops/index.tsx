import { AirOpsInstance } from "@api/airops";
import { useCallback } from "react";

const useAirOps = () => {
  const executeAirops = useCallback(
    async ({
      appId,
      version,
      review,
    }: {
      appId: string;
      version: number;
      review: string;
    }) => {
      const response = await AirOpsInstance.apps.execute({
        appId,
        version,
        payload: {
          inputs: {
            restaurant_review: review,
          },
        },
      });

      const result = await response.result();

      // ToDo: Show result in screen
      console.log("result", result);

      await response.cancel();
    },
    []
  );

  return {
    executeAirops,
  };
};

export default useAirOps;
