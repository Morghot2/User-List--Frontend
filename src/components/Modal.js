import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeModal } from "../redux/slices/buttonSlice";

import ActionButton from "./ActionButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@material-ui/core/Grid";
import Modal from "@mui/material/Modal";
import TextField from "@material-ui/core/TextField";
import Typography from "@mui/material/Typography";

import "../modal.css";

const MyModal = () => {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.buttonState.show);
  const type = useSelector((state) => state.buttonState.type);

  const [userValues, setUserValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "0",
  });
  const handleUserValueChange = (e) => {
    const { name, value } = e.target;
    setUserValues({
      ...userValues,
      [name]: value,
    });
  };
  return (
    <Modal
      className="modal"
      open={isShown}
      onClose={() => dispatch(changeModal(!type))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-box">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <Typography variant="h5" data-testid="modal-heading">
            User details
          </Typography>
          <Button
            color="error"
            size="medium"
            onClick={() => dispatch(changeModal(!type))}
          >
            <CloseIcon />
          </Button>
        </div>

        <form className="user-form">
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Grid item>
              <TextField
                id="first-input"
                name="firstName"
                label="First Name"
                type="text"
                onChange={(e) => handleUserValueChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="last-name"
                name="lastName"
                label="Last Name"
                type="text"
                onChange={(e) => handleUserValueChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                name="email"
                label="Email"
                type="text"
                onChange={(e) => handleUserValueChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="age"
                name="age"
                label="Age"
                type="number"
                onChange={(e) => handleUserValueChange(e)}
              />
            </Grid>
            <ActionButton userValues={userValues} action={"edit"} />
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default MyModal;
