import { FC } from 'react';

import Image from 'next/image';
import { t } from '@lingui/macro';
import { Box, Container, Grid, Typography } from '@mui/material';

import { DrugsInDevelopmentTable } from './components/DrugsInDevelopmentTable';
import { TableCapture } from './components/DrugsInDevelopmentTable/TableCapture';
import { TableFilters } from './components/DrugsInDevelopmentTable/TableFilters';
import { DrugsInDevelopmentInfo } from './components/DrugsInDevelopmentTable/Info';

export const Main: FC = () => {
  return (
    <Box sx={{ marginTop: '65px' }}>
      <Box
        sx={{
          // TODO:
          backgroundImage: {
            xs: 'none',
            md: 'url(/images/main-background.png)',
          },
          backgroundSize: {
            md: 'contain',
            lg: 'cover',
          },
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { md: '0.9fr 1.1fr', lg: '0.7fr 1.3fr' },
              gridGap: { md: '100px' },
              // justifyItems: { xs: 'center', md: 'initial' },
              color: 'text.primary',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                justifyItems: { xs: 'center', md: 'initial' },
                gridTemplateAreas: {
                  xs: `
                    'title title'
                    'titleShape bluredViralCell'
                  `,
                  md: `
                    'title title title'
                    'titleShape titleShape titleShape'
                    '. bluredViralCell .'
                  `,
                },
                alignItems: {
                  xs: 'center',
                  md: 'initial',
                },
                alignSelf: {
                  md: 'end',
                },
                color: 'text.primary',
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  gridArea: 'title',
                  maxWidth: '350px',
                  wordBreak: 'break-word',
                  mb: '50px',
                }}
              >
                {t`DRUGS_IN_DEVELOPMENT_TITLE`}
              </Typography>
              <Box
                sx={{
                  gridArea: 'titleShape',
                  width: '70px',
                  height: '10px',
                  bgcolor: 'background.blue',
                  borderRadius: '0px 10px',
                  mb: '30px',
                  mt: {
                    xs: '-50px',
                    md: 'initial',
                  },
                  mr: {
                    xs: '-10px',
                    sm: '-150px',
                    md: 'initial',
                  },
                }}
              />
              <img
                src="/images/blured-viral-cell.png"
                style={{
                  gridArea: 'bluredViralCell',
                  maxWidth: '90px',
                  maxHeight: '90px',
                }}
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: 'grid',
                justifyContent: {
                  xs: 'space-around',
                  md: 'initial',
                },
                gridTemplateAreas: {
                  xs: `
                    'viralCell'
                    'dots'
                    'note'
                  `,
                  md: `
                    '. viralCell viralCell'
                    'dots viralCell viralCell'
                    'dots note note'
                  `,
                },
                mt: { xs: '30px', md: 'initial' },
                color: 'text.primary',
              }}
            >
              <Box
                sx={{
                  gridArea: 'dots',
                  width: {
                    xs: 'initial',
                    md: '125px',
                  },
                  maxWidth: {
                    lg: '125px',
                    xs: '125px',
                  },
                  maxHeight: {
                    xs: '255px',
                    lg: '255px',
                  },
                  mt: {
                    xs: '-180px',
                    md: 'initial',
                  },
                }}
              >
                <Image
                  src="/images/dots.png"
                  width="125px"
                  height="255px"
                  layout="responsive"
                />
              </Box>
              <Box
                sx={{
                  gridArea: 'viralCell',
                  ml: {
                    md: '-150px',
                  },
                  mb: {
                    md: '-140px',
                    lg: '-160px',
                  },
                  maxWidth: {
                    xs: '200px',
                    md: '310px',
                  },
                  maxHeight: '340px',
                }}
              >
                <Image
                  src="/images/viral-cell.png"
                  width="310px"
                  height="340px"
                  layout="responsive"
                />
              </Box>
              <Grid
                container
                xs={12}
                sx={{ gridArea: 'note', mt: { xs: '30px', md: 'initial' } }}
                alignItems="center"
              >
                <Grid item xs={4} lg={3}>
                  <Box
                    sx={{
                      width: {
                        xs: '50px',
                        lg: '80px',
                      },
                      height: '1px',
                      bgcolor: 'background.blue',
                    }}
                  />
                </Grid>
                <Grid item xs={7}>
                  <Typography fontWeight="bold">
                    {t`PLEASE_NOTE`}
                    :
                  </Typography>
                  <Typography>{t`DATA_UPDATED_QQUARTERLY`}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box>
            <TableFilters />
            <DrugsInDevelopmentInfo />
            <TableCapture />
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <DrugsInDevelopmentTable />
        </Container>
      </Box>
    </Box>
  );
};
