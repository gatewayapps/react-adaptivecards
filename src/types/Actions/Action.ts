import { Url } from "url";
import { ActionStyle } from "./ActionStyle";
import { FallbackOption } from "../Types/FallbackOption";

export type Action = {
  type:
    | "Action.OpenUrl"
    | "Action.Submit"
    | "Action.ShowCard"
    | "Action.ToggleVisibility"
    | "Action.Execute";
  /** Label for button or link that represents this action. */
  title?: string;
  /** Optional icon to be shown on the action in conjunction with the title. Supports data URI in version 1.2+ */
  iconUrl?: Url;
  /** Controls the style of an Action, which influences how the action is displayed, spoken, etc. */
  style?: ActionStyle;
  /** Describes what to do when an unknown element is encountered or the requires of this or any children can’t be met. */
  fallback?: Action | FallbackOption;
  /** A series of key/value pairs indicating features that the item requires with corresponding minimum version. When a feature is missing or of insufficient version, fallback is triggered. */
  requires: { [key: string]: string };
};
