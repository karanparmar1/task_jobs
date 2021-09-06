import React from 'react';
import CompanyCard from './company_card';
import { CompanyListWrapper } from './companies.styled';

const CompanyList = ({ companies }) => {
  return (
    <CompanyListWrapper>{companies?.length ? companies.map((company) => <CompanyCard key={company.id} company={company} />) : 'No Relevant Job found.'}</CompanyListWrapper>
  );
};

export default CompanyList;
