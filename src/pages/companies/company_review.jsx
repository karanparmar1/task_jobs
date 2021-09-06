import React from 'react';
import { ReviewWrapper } from './companies.styled';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import PencilIcon from '@material-ui/icons/BorderColor';
import ChatIcon from '@material-ui/icons/SmsRounded';
import InquiryIcon from '@material-ui/icons/CommentSharp';
import IconButton from '@material-ui/core/IconButton';

const CompanyReview = ({ company }) => {
  return (
    <ReviewWrapper>
      <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} max={5} size="large" readOnly />

      <div className="text-blue review-count">{(company.total_reviews || 0) + ' Reviews'}</div>

      <Button variant="outlined" disableElevation className="btn-review" startIcon={<PencilIcon />}>
        Write Review
      </Button>

      <div className="flex-separate w-100">
        <div className="btn-message">
          <IconButton>
            <ChatIcon fontSize="large" className="fill-blue" />
          </IconButton>
          <br />
          Chat Now
        </div>
        <div className="btn-message">
          <IconButton>
            <InquiryIcon fontSize="large" />
          </IconButton>
          <br />
          Enquiry
        </div>
      </div>
    </ReviewWrapper>
  );
};

export default CompanyReview;
