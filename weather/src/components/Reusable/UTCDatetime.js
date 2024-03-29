import { Typography } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();
  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '700',
        fontSize: { xs: '20px', sm: '12px' },
        color: 'white',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {utcFullDate} GMT
    </Typography>
  );
  return utcTimeValue;
};

export default UTCDatetime;