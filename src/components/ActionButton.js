import React from "react";

import {
  useGetButtonQuery,
  useChangeButtonMutation,
  useAddUserMutation,
  useUpdateUserMutation,
  useRemoveUserMutation,
  useGetCurrentUserQuery,
} from "../redux/slices/services/apiSlice";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButton = ({ position, action, userValues }) => {
  let buttonProperties = { text: '', color: '' };

  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [removeUser] = useRemoveUserMutation();
  const { data, refetch } = useGetButtonQuery();
  const { data: currentUserData } = useGetCurrentUserQuery();
  const [changeButton] = useChangeButtonMutation();
  const currentUserPosition = currentUserData?.user;


  if (action === 'delete') {
    buttonProperties.text = <DeleteIcon />;
    buttonProperties.color = 'error';
  } else if (data?.type === 'edit') {
    buttonProperties.text = 'Update';
    buttonProperties.color = 'warning';
  } else {
    buttonProperties.text = 'Add';
    buttonProperties.color = 'success';
  }

  const handleUser = () => {
    if (action === 'delete') {
      removeUser({ position });
    } else if (data?.type === 'new') {
      addUser(userValues);
      changeButton({ show: !data.show, type: '' });

    } else if (data?.type === 'edit') {
      updateUser({ userValues, currentUserPosition });
      changeButton({ show: !data.show, type: '' });

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
