import { AssociatedInputs } from "../AssociatedInputs";
import { Action } from "./Action";

export type Action_Execute = Action & {
  /** Must be "Action.Execute" */
  type: "Action.Execute";
  /** The card author-defined verb associated with this action. */
  verb?: string;
  /** Initial data that input fields will be combined with. These are essentially ‘hidden’ properties. */
  data?: string | object;
  /** Controls which inputs are associated with the action. */
  associatedInputs?: AssociatedInputs;
};
