import { FallbackOption } from "./FallbackOption";

export type Element = {
  /** Describes what to do when an unknown element is encountered or the requires of this or any children can't be met. */
  fallback?: Element | FallbackOption;
  /** Specifies the height of the element. */
  height?: BlockElementHeight;
  /** When true, draw a separating line at the top of the element. */
  separator?: boolean;
  /** Controls the amount of spacing between this element and the preceding element. */
  spacing?: Spacing;
  /** A unique identifier associated with the item. */
  id?: string;
  /** If false, this item will be removed from the visual tree. */
  isVisible?: boolean;
  /** A series of key/value pairs indicating features that the item requires with corresponding minimum version. When a feature is missing or of insufficient version, fallback is triggered. */
  requires: { [key: string]: string };
};

export type BlockElementHeight = "auto" | "stretch";
export type Spacing =
  | "default"
  | "none"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "padding";
