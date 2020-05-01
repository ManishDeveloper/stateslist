import React from 'react';
import {AppBar,Box,Toolbar,Typography,makeStyles,Link} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
      }
}));
const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <Box component="nav">
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              My Portfolio
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Clients
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Get in Touch
            </Link>
          </nav>
        </Toolbar>
      </AppBar> 
        </Box>
        </>
    )
}

export default Navbar;
