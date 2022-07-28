import { t } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export const TableCapture: FC = () => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: '0.556fr 0.444fr',
      textAlign: 'center',
      color: 'primary.main',
      border: '1px solid',
      borderColor: 'border.grey',
      borderBottom: '0',
      fontSize: '18px',
    }}
  >
    <Typography
      sx={{
        padding: '13px 0',
        borderRight: '1px solid',
        borderColor: 'inherit',
      }}
    >
      {t`PRODUCT_INFO`}
    </Typography>
    <Typography sx={{ padding: '13px 0' }}>{t`DEVELOPMENT_STAGES`}</Typography>
  </Box>
);
