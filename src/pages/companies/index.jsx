import React, { useEffect, useState } from 'react';
import { getCompaniesByLocationList } from '../../utils/api';
import CompanyList from './company_list';
import FiltersPanel from './filters_panel';
import { CompaniesWrapper } from './companies.styled';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [locations, setLocationList] = useState(['Mumbai', 'Kolkata', 'Delhi']);

  useEffect(() => {
    setCompanies(() => getCompaniesByLocationList(locations));
  }, [locations]);

  return (
    <CompaniesWrapper>
      <FiltersPanel locations={locations} setLocationList={setLocationList} />

      <CompanyList companies={companies} />
    </CompaniesWrapper>
  );
};

export default Companies;
