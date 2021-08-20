import { AssociatedInputs } from "../Types/AssociatedInputs";

export type Action_Submit = {
  /** Must be "Action.Submit". */
  type: "Action.Submit";
  /** Initial data that input fields will be combined with. These are essentially ‘hidden’ properties. */
  data?: string | object;
  /** Controls which inputs are associated with the submit action. */
  associatedInputs: AssociatedInputs;
};
