import { Action } from "./Action";
import { TargetElement } from "../Types/TargetElement";

export type Action_ToggleVisibility = Action & {
  /** Must be "Action.ToggleVisibility". */
  type: "Action.ToggleVisibility";
  /** The array of TargetElements. It is not recommended to include Input elements with validation under Action.Toggle due to confusion that can arise from invalid inputs that are not currently visible */
  targetElements: Array<TargetElement | string>;
};
