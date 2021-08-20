import { Action_Execute } from "../Action.Execute";

export type Refresh = {
  /** The action to be executed to refresh the card. Clients can run this refresh action automatically or can provide an affordance for users to trigger it manually. */
  action?: Action_Execute;
  /** A list of user Ids informing the client for which users should the refresh action should be run automatically. Some clients will not run the refresh action automatically unless this property is specified. Some clients may ignore this property and always run the refresh action automatically. */
  userIds?: string[];
};
