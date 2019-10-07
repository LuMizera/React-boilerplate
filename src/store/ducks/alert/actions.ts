import { AlertTypes } from "./types";

export const shootAlert = (payload: string) => ({
  type: AlertTypes.DISPLAY_ALERT,
  payload
});
