export type TokenExchangeResource = {
  /** The unique identified of this token exchange instance */
  id: string;
  /** An application ID or resource identifier with which to exchange a token on behalf of. This property is identity provider- and application-specific. */
  uri: string;
  /** An identifier for the identity provider with which to attempt a token exchange */
  providerId: string;
};
