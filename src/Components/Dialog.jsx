import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import MButton from "./MButton";
import { Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";
import { db, doc, updateDoc } from "../Config/Firebase";
import Notification from "../Components/Notification";

export default function FormDialog({ placeholder, style, uid }) {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const updateUserName = async () => {
    const docRef = doc(db, "Users", uid);
    await updateDoc(docRef, {
      name: userName,
    });
    setNotify({
      isOpen: true,
      message: "Name change successfully",
      type: "success",
    });
    handleClose();
    window.location.reload(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={style}>
      <IconButton
        aria-label="edit"
        onClick={handleClickOpen}
        sx={{
          color: red[500],
          ":hover": {
            background: red[100],
          },
        }}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Preferences
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            fullWidth
            label="Full Name"
            type="text"
            value={userName}
            placeholder={placeholder}
            variant="standard"
            onChange={(e) => setUserName(e.target.value)}
            sx={{ my: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <MButton
            onClick={updateUserName}
            value="Save"
            sx={{
              color: "#f9f9f9",
              fontSize: "14px",
              background: "#292C6D",
              px: 2,
              textTransform: "capitalize",
              ":hover": {
                background: "#161853",
              },
            }}
          />
          <MButton
            onClick={handleClose}
            value="Cancel"
            sx={{
              color: "#313131",
              fontSize: "14px",
              background: "#f9f9f9",
              px: 2,
              ml: 1,
              textTransform: "capitalize",
              ":hover": {
                background: "#d3d3d3",
              },
            }}
          />
        </DialogActions>
      </Dialog>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
