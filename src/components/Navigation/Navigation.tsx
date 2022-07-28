/** @jsxRuntime classic */
/** @jsx jsx */

import { t } from '@lingui/macro';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import Image from 'next/image';
import { css, jsx, useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const Navigation: React.FC = () => {
  const { pathname, locale } = useRouter();
  const theme: any = useTheme();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const nextLocaleText = locale === 'en' ? 'rus' : 'eng';

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="transparent" sx={{ boxShadow: 'initial', backdropFilter: 'blur(5px)' }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: { lg: '40px' },
          }}
        >
          <div css={desktopLogoCSS}>
            <Image
              src="/logo.svg"
              alt={t`COMPANY_LOGO`}
              width="96px"
              height="24px"
            />
          </div>
          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={!!anchorElNav}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/products">{t`PRODUCTS`}</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/science">{t`SCIENCE`}</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/production">{t`PRODUCTION`}</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/career">{t`CAREER`}</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/science">{t`SCIENCE`}</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/sustainable-development">{t`SUSTAINABLE_DEVELOPMENT`}</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/news">{t`NEWS`}</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/contacts">{t`CONTACTS`}</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/Partnership">{t`PARTNERSHIP`}</Link>
              </MenuItem>
            </Menu>
          </Box>
          <div css={mobileLogoCSS}>
            <Image
              src="/logo.svg"
              alt={t`COMPANY_LOGO`}
              width="96px"
              height="24px"
            />
          </div>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', lg: 'flex' },
              color: theme.palette.primary.main,
              justifyContent: 'space-between',
            }}
          >
            <Link href="/products">
              <a>{t`PRODUCTS`}</a>
            </Link>
            <Link href="/science">
              <a>{t`SCIENCE`}</a>
            </Link>
            <Link href="/production">
              <a>{t`PRODUCTION`}</a>
            </Link>
            <Link href="/career">
              <a>{t`CAREER`}</a>
            </Link>
            <Link href="/science">
              <a>{t`SCIENCE`}</a>
            </Link>
            <Link href="/sustainable-development">
              <a>{t`SUSTAINABLE_DEVELOPMENT`}</a>
            </Link>
            <Link href="/news">
              <a>{t`NEWS`}</a>
            </Link>
            <Link href="/contacts">
              <a>{t`CONTACTS`}</a>
            </Link>
            <Link href="/Partnership">
              <a>{t`PARTNERSHIP`}</a>
            </Link>
          </Box>

          <Link
            href={pathname}
            locale={nextLocaleText.slice(0, 2)}
          >
            <a css={langCSS}>{nextLocaleText}</a>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const langCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  padding: 5px;
  max-width: 40px;
  max-height: 20px;
  background: #0c204d;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
`;

const desktopLogoCSS = (theme: any) => css`
  ${theme.breakpoints.down('lg')} {
    display: none !important;
  }
`;

const mobileLogoCSS = (theme: any) => css`
  ${theme.breakpoints.up('lg')} {
    display: none !important;
  }
`;
