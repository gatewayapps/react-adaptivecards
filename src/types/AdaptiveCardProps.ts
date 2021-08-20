import { Action } from "./Actions/Action";
import { Authentication } from "./Types/Authentication";
import { Refresh } from "./Types/Refresh";

export type AdaptiveCardProps = {
  type: "AdaptiveCard";
  version: string;
  refresh?: Refresh;
  authentication?: Authentication;

  actions?: Action[];
};
