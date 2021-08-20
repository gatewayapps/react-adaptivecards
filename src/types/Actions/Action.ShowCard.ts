import { AdaptiveCardProps } from "../AdaptiveCardProps";
import { Action } from "./Action";

export type Action_ShowCard = Action & {
  /** Must be "Action.ShowCard". */
  type: "Action.ShowCard";
  /** The Adaptive Card to show. Inputs in ShowCards will not be submitted if the submit button is located on a parent card.  */
  card?: AdaptiveCardProps;
};
