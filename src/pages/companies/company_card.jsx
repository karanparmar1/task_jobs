import React from 'react';
import CompanyReview from './company_review';
import { BoldText, CompanyCardWrapper, CompanyProfileWrapper, DisabledText, GreenText } from './companies.styled';
import CompareIcon from '@material-ui/icons/CompareArrows';
import TickIcon from '@material-ui/icons/CheckCircleRounded';
import AddressIcon from '@material-ui/icons/Place';
import SearchIcon from '@material-ui/icons/Search';
import PhoneIcon from '@material-ui/icons/Phone';
import TimeIcon from '@material-ui/icons/AvTimer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const CompanyCard = ({ company }) => {
  return (
    <CompanyCardWrapper>
      <CompanyProfileWrapper>
        <div className="card-details">
          <div className="image-wrapper">
            <img src={company.image} className={'img-company'} alt={company.name} />
          </div>
          <div className="info-content">
            <div className="d-flex">
              <GreenText>Ad&nbsp;</GreenText>
              <BoldText>{company.name}</BoldText>&nbsp;
              <TickIcon className="fill-blue" />
            </div>
            <DisabledText className="d-flex">
              {company.type}&nbsp;&nbsp;
              <img src={`https://www.countryflags.io/${company.country}/flat/24.png`} alt="*" />
              &nbsp;<BoldText>{company.country}</BoldText>
            </DisabledText>

            {company.work_list?.length > 0 && (
              <div className="work-list">
                <ul>
                  {company.work_list?.map((work, i, list) => (
                    <li key={i}>
                      {work} {i === list.length - 1 && list.length > 5 && <span className="text-blue">More...</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="company-address">
              <AddressIcon className="fill-blue" />
              &nbsp;{company.address}
            </div>

            <div className="flex-separate">
              <div className="d-flex">
                <SearchIcon className="fill-blue" />
                &nbsp;Founding Year :&nbsp;{company.founding_year}
              </div>
              <div className="d-flex">
                <PhoneIcon className="fill-blue" />
                &nbsp;{company.contact}
              </div>
              <div className="d-flex">
                <TimeIcon className="fill-blue" />
                &nbsp;Open&nbsp;{company.open_time}
                &nbsp;Close&nbsp;{company.close_time}&nbsp;
                <ExpandMoreIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="card-bottom">
          <div className="d-flex">
            <div>
              Min Order&nbsp;:&nbsp;
              <BoldText>{company.min_order}</BoldText>
            </div>
            &nbsp;&nbsp;
            <div>
              Team&nbsp;:&nbsp;
              <BoldText>{company.team_size}</BoldText>
            </div>
            &nbsp;&nbsp;
            <div>
              Response Rate&nbsp;:&nbsp;
              <BoldText>{company.response_rate}</BoldText>
            </div>
          </div>
          <div className="d-flex">
            <Button startIcon={<CompareIcon className="fill-blue" />}> Compare</Button>
          </div>
        </div>
      </CompanyProfileWrapper>

      <CompanyReview company={company} />
    </CompanyCardWrapper>
  );
};

export default CompanyCard;
