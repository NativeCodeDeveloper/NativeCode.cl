"use client"
import * as React from 'react';
import { Michroma } from "next/font/google";
import Image from "next/image";
import { Link } from 'next-view-transitions';
const michroma = Michroma({ subsets: ["latin"], weight: "400", display: "swap" });
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Label } from '@headlessui/react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { label: 'Proyectos', href: '/portafolio' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Quiénes Somos', href: '/sobreNosotros' },
  { label: 'Contacto', href: '/soporte' },
  { label: 'Contratación', href: '/comprar' }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className={michroma.className}
      position="sticky"
      color="transparent"
      enableColorOnDark
      sx={{
        backgroundColor: 'rgba(17,17,17,0.85) !important',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 6px 28px rgba(0,0,0,0.35)',
        fontFamily: michroma.style.fontFamily,
      }}
    >
      <Container maxWidth="xl">
        <Box style={{ color: 'white' }}>
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: { xs: 1, md: 2 } }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5, mr: 2 }}>
              <Link
                href="/"
                style={{ textDecoration: 'none' }}
              >
                <Image
                  src="/ico2.png"
                  alt="NativeCode logo"
                  width={88}
                  height={44}
                  style={{ objectFit: 'contain', borderRadius: '12px', padding: '4px' }}
                />
              </Link>
              <Typography
                className={michroma.className}
                component="a"
                href="/"
                style={{ color: 'white', fontFamily: michroma.style.fontFamily }}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontFamily: michroma.style.fontFamily,
                  letterSpacing: '.10em',
                  fontSize: '1.0rem',
                  lineHeight: 1.05,
                  opacity: 0.92,
                  '&:hover': { opacity: 1 }
                }}
              >
                Ingenieria de Software
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                PaperProps={{
                  sx: {
                    backgroundColor: '#111',
                    color: 'white',
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
                    mt: 1,
                    fontFamily: michroma.style.fontFamily,
                  }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu} sx={{ px: 2, py: 1.25 }}>
                    <Typography
                      className={michroma.className}
                      component="a"
                      href={page.href}
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        fontFamily: michroma.style.fontFamily,
                        letterSpacing: '.06em',
                        display: 'block',
                        width: '100%',
                        lineHeight: 1.2,
                        whiteSpace: 'normal'
                      }}
                    >
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              className={michroma.className}
              component="a"
              href="/"
              style={{ color: 'white', fontFamily: michroma.style.fontFamily }}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                textDecoration: 'none',
                letterSpacing: '.06em',
                fontSize: { xs: '1.0rem', sm: '1.05rem' },
                fontWeight: 700,
                fontFamily: michroma.style.fontFamily,
                lineHeight: 1.15,
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                overflow: 'visible'
              }}
            >
             Ingenieria de Software
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', gap: 0 }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  className={michroma.className}
                  component="a"
                  href={page.href}
                  sx={{
                    my: 1.5,
                    mx: 0.5,
                    px: 2.25,
                    py: 1,
                    color: 'white',
                    fontFamily: michroma.style.fontFamily,
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    letterSpacing: '.08em',
                    textTransform: 'none',
                    borderRadius: 2,
                    opacity: 0.9,
                    transition: 'all .2s ease',
                    '&:hover': {
                      opacity: 1,
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  {page.label}
                </Button>
              ))}
              <Button
                component="a"
                href="https://wa.me/56966091038?text=Quiero%20cotizar%20proyecto"
                target="_blank"
                rel="noopener"
                className={michroma.className}
                sx={{
                  my: 1.5,
                  ml: 1.5,
                  px: 2.75,
                  py: 1.1,
                  color: '#0ff',
                  fontFamily: michroma.style.fontFamily,
                  fontWeight: 700,
                  borderColor: 'rgba(255,255,255,0.22)',
                  textTransform: 'none',
                  letterSpacing: '.08em',
                  fontSize: '0.94rem',
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'linear-gradient(to right, rgba(99,102,241,0.15), rgba(34,211,238,0.15))',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
                  transition: 'all .2s ease',
                  '&:hover': {
                    background: 'linear-gradient(to right, rgba(99,102,241,0.22), rgba(34,211,238,0.22))',
                    transform: 'translateY(-1px)',
                    borderColor: 'rgba(255,255,255,0.28)'
                  }
                }}
              >
                Cotizar
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;