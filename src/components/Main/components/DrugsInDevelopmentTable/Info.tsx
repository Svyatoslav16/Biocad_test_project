import { FC } from 'react';

import { t } from '@lingui/macro';
import { Grid, useTheme } from '@mui/material';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const DrugsInDevelopmentInfo: FC = () => {
  const theme: any = useTheme();

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      sx={{ color: 'text.primary', padding: '50px 0' }}
    >
      <Grid container item xs={12} md={6} spacing={2} alignItems="center">
        <Grid item>
          <Circle color={theme.palette.background.blue} />
        </Grid>
        <Grid item>{t`ORPHAN_DISEASES`}</Grid>
        <Grid item><ArrowCircleRightIcon sx={{ display: 'block', color: 'background.blue' }} /></Grid>
      </Grid>
      <Grid container item xs={12} md={6} spacing={2} alignItems="center">
        <Grid item>
          <Circle color={theme.palette.background.cyan} />
        </Grid>
        <Grid item>{t`AUTOIMMUNE_DISEASES`}</Grid>
        <Grid item><ArrowCircleRightIcon sx={{ display: 'block', color: 'background.cyan' }} /></Grid>
      </Grid>
      <Grid container item xs={12} md={6} spacing={2} alignItems="center">
        <Grid item>
          <Circle color={theme.palette.background.red} />
        </Grid>
        <Grid item>{t`ONCOLOGY`}</Grid>
        <Grid item><ArrowCircleRightIcon sx={{ display: 'block', color: 'background.red' }} /></Grid>
      </Grid>
      <Grid container item xs={12} md={6} spacing={2} alignItems="center">
        <Grid item>
          <Circle color={theme.palette.background.violet} />
        </Grid>
        <Grid item>{t`OTHER`}</Grid>
      </Grid>
    </Grid>
  );
};

const Circle: FC<{ color: string }> = ({ color }) => (
  <span
    style={{
      display: 'block',
      backgroundColor: color,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
    }}
  />
);
