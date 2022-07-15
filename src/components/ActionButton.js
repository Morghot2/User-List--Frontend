import React from "react";

import { useRemoveRecordMutation } from "../redux/slices/services/recordsApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { changeModal, changeButtonType } from "../redux/slices/buttonSlice";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButton = ({ action, userValues, userInfo }) => {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.buttonState.show);
  const type = useSelector((state) => state.buttonState.type);
  let buttonProperties = { text: "", color: "" };

  const [removeRecord] = useRemoveRecordMutation();

  if (action === "delete") {
    buttonProperties.text = <DeleteIcon />;
    buttonProperties.color = "error";
  } else if (type === "edit") {
    buttonProperties.text = "Update";
    buttonProperties.color = "warning";
  } else {
    buttonProperties.text = "Add";
    buttonProperties.color = "success";
  }

  const handleUser = () => {
    if (action === "delete") {
      // removeUser({ position });
      removeRecord(userInfo._id);
    } else if (type === "new") {
      // addUser(userValues);
      dispatch(changeModal(!isShown));
      // changeButton({ show: !data.show, type: '' });
    } else if (type === "edit") {
      // updateUser({ userValues, currentUserPosition });
      dispatch(changeModal(!isShown));
      // changeButton({ show: !data.show, type: '' });
    }
  };

  return (
    <Button
      variant="contained"
      color={buttonProperties.color}
      onClick={handleUser}
    >
      {buttonProperties.text}
    </Button>
  );
};

export default ActionButton;
