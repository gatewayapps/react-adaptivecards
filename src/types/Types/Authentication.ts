import { AuthCardButton } from "./AuthCardButton";
import { TokenExchangeResource } from "./TokenExchangeResource";

export type Authentication = {
  /** Text that can be displayed to the end user when prompting them to authenticate. */
  text?: string;
  /** The identifier for registered OAuth connection setting information. */
  connectionName?: string;
  /** Provides information required to enable on-behalf-of single sign-on user authentication. */
  tokenExchangeResource?: TokenExchangeResource;
  /** Buttons that should be displayed to the user when prompting for authentication. The array MUST contain one button of type “signin”. Other button types are not currently supported. */
  buttons?: AuthCardButton[];
};
