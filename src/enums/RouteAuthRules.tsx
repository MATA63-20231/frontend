/* eslint-disable no-shadow */

export enum RouteUserRules {
  SAME_USER_ONLY,
}

export enum RouteGeneralRules {
  NO_RULE = 1,
  SIGNED_ONLY,
  NO_SIGNED_ONLY,
}

const RouteAuthRules = { ...RouteUserRules, ...RouteGeneralRules };

export default RouteAuthRules;
