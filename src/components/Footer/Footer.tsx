import { ReactNode } from 'react';

import Link from 'next/link';

import { t } from '@lingui/macro';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

import { VkIcon } from '@/icons/VkIcon';
import { FacebookIcon } from '@/icons/FacebookIcon';
import { LinkedInIcon } from '@/icons/LinkedInIcon';
import { YoutubeIcon } from '@/icons/YoutubeIcon';
import { InstagramIcon } from '@/icons/InstagramIcon';
import { TwitterIcon } from '@/icons/TwitterIcon';
import { currYear } from '@/utils/date';

export const Footer: React.FC = () => {
  const theme: any = useTheme();

  return (
    <Box
      sx={{ borderTop: '1px solid', borderColor: 'border.lightGrey2', color: 'text.primary', padding: '60px 0' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, sm: 2, md: 5 }} sx={{ borderBottom: '1px solid', borderColor: 'border.lightGrey2', padding: '0 0 34px 0', fontSize: '14px' }}>
          <Grid container item spacing={2} xs={12} sm={2}>
            <Grid item xs={6} md={4}>
              <SocialMediaIcon href="/facebook">
                <FacebookIcon color={theme.palette.text.primary} />
              </SocialMediaIcon>
            </Grid>
            <Grid item xs={6} md={4}>
              <SocialMediaIcon href="/vk">
                <VkIcon color={theme.palette.text.primary} />
              </SocialMediaIcon>
            </Grid>
            <Grid item xs={6} md={4}>
              <SocialMediaIcon href="/youtube">
                <YoutubeIcon color={theme.palette.text.primary} />
              </SocialMediaIcon>
            </Grid>
            <Grid item xs={6} md={4}>
              <SocialMediaIcon href="/instagram">
                <InstagramIcon color={theme.palette.text.primary} />
              </SocialMediaIcon>
            </Grid>
            <Grid item xs={6} md={4}>
              <SocialMediaIcon href="/twitter">
                <TwitterIcon color={theme.palette.text.primary} />
              </SocialMediaIcon>
            </Grid>
            <Grid item xs={6} md={4}>
              <SocialMediaIcon href="/linkedin">
                <LinkedInIcon color={theme.palette.text.primary} />
              </SocialMediaIcon>
            </Grid>
          </Grid>
          <Grid item container spacing={2} xs={12} sm={10}>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/course-to-recovery">
                <a>{t`COURSE_TO_RECOVERY`}</a>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/commercial-policy">
                <a>{t`COMMERCIAL_POLICY`}</a>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/use-of-cookies">
                <a>{t`USE_OF_COOKIES`}</a>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/for-students">
                <a>{t`FOR_STUDENTS`}</a>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/policy-on-processing-of-personal-data">
                <a>{t`POLICY_ON_PROCESSING_OF_PERSONAL_DATA`}</a>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/anti-corruption-policy">
                <a>{t`ANTI_CORRUPTION_POLICY`}</a>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/drug-safety">
                <a>{t`DRUG_SAFETY`}</a>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/user-agreement">
                <a>{t`USER_AGREEMENT`}</a>
              </Link>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Link href="/quality-policy">
                <a>{t`QUALITY_POLICY`}</a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Typography sx={{ marginTop: '35px', fontSize: '13px' }}>
          Copyright © 2001-
          {currYear}
        </Typography>
      </Container>
    </Box>
  );
};

const SocialMediaIcon = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  const theme: any = useTheme();

  return (
    <Link href={href}>
      <a>
        <Box
          sx={{
            background: theme.palette.icon.lightGrey,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
          }}
        >
          {children}
        </Box>
      </a>
    </Link>
  );
};
