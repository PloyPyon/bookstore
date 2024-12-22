import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Layout() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              ร้านหนังสือออนไลน์
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            เข้าสู่ระบบ
          </Button>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}

export default Layout;