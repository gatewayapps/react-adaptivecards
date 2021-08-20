import { Url } from "url";
import { Action } from "./Action";

export type Action_OpenUrl = Action & {
  /** Must be "Action.OpenUrl". */
  type: "Action.OpenUrl";
  /** The URL to open. */
  url: Url;
};
