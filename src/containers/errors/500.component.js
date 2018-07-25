import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';

import SearchIcon from 'material-ui-icons/Search';
import { withStyles } from 'material-ui/styles';

import themeStyles from './500.theme.style';
import scss from './500.module.scss';

const Error500 = (props) => {
  const {
    classes
  } = props;

  return (
    <div className={classes.background}>
      <Card className={scss.card} raised>
        <CardContent className={scss['card-content']}>
          <Typography variant="headline" component="h2" gutterBottom>
            Internal Server Error
          </Typography>
          <Typography className={scss['card-text']}>
            Oops looks liks something has gone wrong
          </Typography>
          <Input
            className={scss['card-search-input']}
            placeholder="Search Portal"
            endAdornment={<SearchIcon />}
          />
        </CardContent>
        <CardActions className={scss['card-actions']}>
          <Button href="/">Go Home</Button>
        </CardActions>
      </Card>
    </div>
  );
};


Error500.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Error500);
