import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';

import salesData from '../../../../../assets/data/dashboards/sales-data.json';

import themeStyles from './table-widget.theme.style';


class TableWidget extends React.Component {
  state = {
    data: salesData,
    anchorEl: null
  };

  onItemClick = () => {
    this.setState({ data: this.state.data.reverse(), anchorEl: null });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { data, anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <Card className={classes['portal-sales-widget']}>
        <CardHeader
          action={
            <IconButton
              aria-owns={anchorEl ? 'store-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title="Sales Per Product"
          subheader="Top 4 products of the month"
        />
        <CardContent className={classes['portal-sales-widget__table']}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes['table-cell']} />
                <TableCell className={classes['table-cell']}>Product</TableCell>
                <TableCell className={classes['table-cell']} numeric>Sales Increase</TableCell>
                <TableCell className={classes['table-cell']} numeric>Sale Volume</TableCell>
                <TableCell className={classes['table-cell']} numeric>Discount</TableCell>
                <TableCell className={classes['table-cell']} numeric>Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(item => (
                <TableRow key={item.product}>
                  <TableCell className={classes['table-cell']}>
                    {<Avatar alt={item.product} src={`${process.env.PUBLIC_URL}/${item.photo}`} />}
                  </TableCell>
                  <TableCell className={classes['table-cell']}>{item.product}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.salesIncrease}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.sales}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.discount}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.stock}</TableCell>
                </TableRow>))
              }
            </TableBody>
          </Table>
        </CardContent>
        <Menu
          id="store-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem key={1} onClick={this.onItemClick}>Online Stores</MenuItem>
          <MenuItem key={2} onClick={this.onItemClick}>Physical Stores</MenuItem>
        </Menu>
      </Card>
    );
  }
}

TableWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(TableWidget);
