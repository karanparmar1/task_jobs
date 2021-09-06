// API Callbacks

import { COMPANY_LIST } from './constants';

export const getCompaniesByLocationList = (locations = []) => {
  return COMPANY_LIST.filter(({ location }) => locations.map((x) => x?.toLowerCase()).includes(location?.toLowerCase()));
};
