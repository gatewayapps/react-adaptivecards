/*
static propTypes = {
    /** The hostConfig object that is passed along to the native AdaptiveCards. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/hostconfig) 
    hostConfig: PropTypes.object,
    /** The card schema.  It must comply with the card schema. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/create/cardschema) 
    payload: PropTypes.object.isRequired,
    /** Method that will be invoked anytime a card action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actions) 
    onExecuteAction: PropTypes.func,
    /** Method that will be invoked when a Submit action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionsubmit) 
    onActionSubmit: PropTypes.func,
    /** Method that will be invoked when an Open Url action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionopenurl) 
    onActionOpenUrl: PropTypes.func,
    /** Method that will be invoked when a Show Card action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionshowcard) 
    onActionShowCard: PropTypes.func,
    /** Method that will be invoked if an error is thrown while trying to render a card. 
    onError: PropTypes.func,
    /** JSX styles that will be applied to the card conatiner 
    style: PropTypes.object
*/

import { Action } from "./types/Action";
import { Authentication } from "./types/Authentication";
import { Refresh } from "./types/Types/Refresh";

export type AdaptiveCardProps = {
  type: "AdaptiveCard";
  version: string;
  refresh?: Refresh;
  authentication?: Authentication;

  actions?: Action[];
};
