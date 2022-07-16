import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  changeModal,
  changeButtonType,
  changeEditedRecord,
} from "../redux/slices/buttonSlice";

import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const ModifyButton = ({ action, userInfo }) => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.buttonState.show);

  const handleButtonClick = () => {
    dispatch(changeModal(!type));
    dispatch(changeButtonType(action));
    action === "edit" ? dispatch(changeEditedRecord(userInfo._id)) : null;
  };

  if (action === "new") {
    return (
      <Button
        variant="contained"
        onClick={handleButtonClick}
        data-testid="edit-new"
      >
        New
      </Button>
    );
  }
  if (action === "edit") {
    return (
      <Button
        variant="contained"
        color="warning"
        onClick={handleButtonClick}
        data-testid="edit-new"
      >
        <EditIcon />
      </Button>
    );
  }
};

export default ModifyButton;
