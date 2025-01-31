import AirOps from "@airops/airops-js";
import crypto from "crypto";

const AIROPS_URL = import.meta.env.VITE_AIROPS_URL;

const USER_ID = import.meta.env.VITE_AIROPS_USER_ID;
const WORKSPACE_ID = import.meta.env.VITE_AIROPS_WORKSPACE_ID;
const API_KEY = import.meta.env.VITE_AIROPS_API_KEY;

const key = Buffer.from(API_KEY, "utf-8");

// Hash the message using HMAC-SHA256 and the key
const hashedUserId = crypto
  .createHmac("sha256", key)
  .update(USER_ID)
  .digest("hex");

const AirOpsInstance = AirOps.identify({
  userId: USER_ID,
  workspaceId: WORKSPACE_ID,
  hashedUserId: hashedUserId,
});

const fetchAirOpsApps = async () => {
  const response = await fetch(`${AIROPS_URL}/public_api/airops_apps`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return await response.json();
};

export { AirOpsInstance, fetchAirOpsApps };
