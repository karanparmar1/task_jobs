import styled from 'styled-components';

export const CompaniesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 100px 55px 32px;
  @media only screen and (max-width: 1024px) {
    padding-right: 32px;
  }
  .MuiButton-root {
    text-transform: none !important;
  }
`;

export const FiltersWrapper = styled.div`
  position: sticky;
  top: 8px;
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  min-width: 250px;
  max-height: calc(100vh - 70px);
  padding: 24px 12px;
  margin-right: 10px;
  overflow-y: auto;
  border: 1px solid #33333340;
  transition: all 0.3s ease-in;

  @media only screen and (max-width: 1024px) {
    position: relative;
    top: 0px;
    flex-basis: 100%;
    margin: 24px 0;
    max-height: 100%;
  }

  .filtered-locations {
    width: 100%;
    margin: 10px 0;
  }
`;

export const FilterTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  h3 {
    margin: 0;
  }
`;

export const ClearButton = styled.button`
  background: none !important;
  border: 0 !important;
  outline: 0 !important;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

export const CompanyListWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const CompanyCardWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #33333340;
  margin-bottom: 10px;
`;

export const CompanyProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-right: 1px solid #33333340;
  .card-details {
    width: 100%;
    display: flex;
    padding: 30px 20px 16px;

    .image-wrapper {
      width: 16%;
      min-width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      img {
        max-width: 100%;
        height: auto;
        border: 1px solid #33333340;
      }
    }

    .info-content {
      padding-left: 20px;
      flex: 1;

      .work-list {
        ul {
          display: inline-flex;
          flex-wrap: wrap;
          padding-inline-start: 20px;
        }
        li {
          flex-basis: 50%;
          &::marker {
            color: rgb(128, 128, 128);
          }
        }
      }

      .company-address {
        display: flex;
        margin: 8px 0 16px;
      }
    }
  }
  .card-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
    border-top: 1px solid #33333340;
  }
`;

export const GreenText = styled.span`
  color: rgba(118, 205, 66);
`;

export const BoldText = styled.h4`
  margin: 0;
  display: inline-block;
`;

export const DisabledText = styled.span`
  color: rgba(193, 193, 193);
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-basis: 20%;
  min-width: 180px;
  padding: 0 32px;

  .review-count {
    margin: 16px auto 0;
  }

  .btn-review {
    background: rgba(145, 145, 145, 0.2);
    border-radius: 100px;
    text-transform: none;
    margin: 16px auto 32px;
  }

  .btn-message {
    flex: 1;
    align-self: flex-start;
  }
`;
