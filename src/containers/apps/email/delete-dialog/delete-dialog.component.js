import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

class DeleteDialog extends React.Component {
  handleCancel = () => {
    this.props.onClose(null);
  };

  handleDelete = () => {
    this.props.onClose(this.props.message);
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleCancel}
        aria-labelledby="confirm-delete-dialog-title"
        aria-describedby="confirm-delete-dialog-description"
      >
        <DialogTitle id="confirm-delete-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-delete-dialog-description">
            Are you sure you want to delete this message?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DeleteDialog.defaultProps = {
  message: null
};

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.shape({}),
  onClose: PropTypes.func.isRequired
};

export default DeleteDialog;
