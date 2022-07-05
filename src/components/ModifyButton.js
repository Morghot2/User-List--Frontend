import React from "react";
import {
  useChangeButtonMutation,
  useChangeCurrentUserMutation,
  useGetButtonQuery,
} from "../redux/slices/apiSlice";

import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const ModifyButton = ({ action, position }) => {

  const [changeButton] = useChangeButtonMutation();
  const { data, isFetching } = useGetButtonQuery();
  const [changeCurrentUser] = useChangeCurrentUserMutation();

  if (isFetching) return "Loading"


  const handleButtonClick = () => {
    changeButton({ show: !data.show, type: action });
    if (position >= 0) {
      changeCurrentUser({position});
    }
  };

  if (action === "new") {
    return (
      <Button variant="contained" onClick={handleButtonClick} data-testid="edit-new">
        New
      </Button>
    );
  }
  if (action === "edit") {
    return (
      <Button variant="contained" color="warning" onClick={handleButtonClick} data-testid="edit-new">
        <EditIcon />
      </Button>
    );
  }
};

export default ModifyButton;
