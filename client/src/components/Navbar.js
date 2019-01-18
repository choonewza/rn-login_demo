import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 2222,
    marginRight: 2000
  }
};

class Header extends Component {
  render() {
    return (
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          <Grid container alignItems="center" spacing={16}>
            <Grid item xs={6} sm={4}>
              xxx
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
