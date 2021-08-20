export type AuthCardButton = {
  /** The type of the button. */
  type: string;
  /** The value associated with the button. The meaning of value depends on the button’s type. */
  value: string;
  /** The caption of the button. */
  title?: string;
  /** A URL to an image to display alongside the button’s caption. */
  image?: string;
};
