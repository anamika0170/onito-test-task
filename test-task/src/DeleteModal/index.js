import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

export default function DeleteAllData({open, setOpen,setRowData}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAll = () => {
    axios
      .delete("http://localhost:5000/api/deleteAll")
      .then((response) => {
        console.log("All data deleted successfully.", response);
        setRowData(response.data.data)
        // Handle success message or perform any additional actions
      })
      .catch((error) => {
        console.error("An error occurred while deleting data:", error);
        // Handle error message or perform any additional actions
      });
      setOpen(false)
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Delete All Data"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           Are You sure you want to delete all data
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleDeleteAll} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}