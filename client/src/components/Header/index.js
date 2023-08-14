import * as React from "react";
import Auth from "../../utils/auth.js";
import { Link, useLocation } from "react-router-dom";

// local import
import logo from "../../assets/images/aarr.png";

// MUI Components
import AppBar from "@mui/material/AppBar/index.js";
import Box from "@mui/material/Box/index.js";
import Toolbar from "@mui/material/Toolbar/index.js";
import IconButton from "@mui/material/IconButton/index.js";
import Typography from "@mui/material/Typography/index.js";
import Menu from "@mui/material/Menu/index.js";
import Container from "@mui/material/Container/index.js";
import Avatar from "@mui/material/Avatar/index.js";
import Button from "@mui/material/Button/index.js";
import Tooltip from "@mui/material/Tooltip/index.js";
import MenuItem from "@mui/material/MenuItem/index.js";

// MUI Icons
import MenuIcon from "@mui/icons-material/Menu.js";

const pages = ["About", "Contact", "Home", "Projects", "Donate"];

const pagesHref = ["/about", "/contact", "/", "/projects", "/donate"];

const settings = ["Profile", "Donation History", "Login", "Signup"];

const settingsHref = ["/profile", "/donation-history", "/login", "/signup"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { pathname } = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log(navigation);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className='ifelse-header'>
          <MenuItem key='OrderHistory' onClick={handleCloseNavMenu}>
            <Link to='/orderHistory'>Order History</Link>
          </MenuItem>

          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <MenuItem key='Logout' onClick={() => Auth.logout()}>
            Logout
          </MenuItem>
        </div>
      );
    } else {
      return (
        <div className='ifelse-header'>
          <MenuItem key='Signup' onClick={handleCloseNavMenu}>
            <Link to='/signup'>Signup</Link>
          </MenuItem>
          <MenuItem key='Login' onClick={handleCloseNavMenu}>
            <Link to='/login'>Login</Link>
          </MenuItem>
        </div>
      );
    }
  }

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              All Animal R&R
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
                id='menu-icon'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={pagesHref[i]}>
                      <Typography
                        textAlign='center'
                        color={pagesHref[i] === pathname ? "black" : "pink"}
                      >
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <img src={logo} alt='aarr logo' id='logo' />{" "}
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                marginLeft: "1rem",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  className={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    ["&.Contact"]: { color: "black" },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, indexOf) => (
                  <MenuItem key={setting.indexOf} onClick={handleCloseUserMenu}>
                    <Link to={settingsHref}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        {showNavigation()}
      </AppBar>
    </>
  );
}

export default Header;
