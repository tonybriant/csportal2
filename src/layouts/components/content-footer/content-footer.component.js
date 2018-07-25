import React from 'react';
import PropTypes from 'prop-types';

// Material components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import FontAwesome from 'react-fontawesome';

import themeStyles from './content-footer.theme.style';

const ContentFooter = (props) => {
  const { classes, ...other } = props;

  return (
    <AppBar
      color="default"
      position="static"
      {...other}
    >
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          noWrap
        >
          <small>&copy; 2018 Oxygenna</small>
        </Typography>
        <span className="portal-flex" />
        <FontAwesome name="facebook" className={classes.coloredIcon} />
        <FontAwesome name="twitter" className={classes.coloredIcon} />
      </Toolbar>
    </AppBar>
  );
};

ContentFooter.propTypes = {
  classes: PropTypes.shape({}).isRequired
};


export default withStyles(themeStyles)(ContentFooter);
