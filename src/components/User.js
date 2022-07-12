import React from "react";

import { useGetUsersQuery } from "../redux/slices/services/apiSlice";

import ActionButton from "./ActionButton";
import ModifyButton from "./ModifyButton";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const User = ({ position }) => {
  const { data } = useGetUsersQuery();

  return (
    <TableRow>
      <TableCell>{data?.[position].firstName}</TableCell>
      <TableCell>{data?.[position].lastName}</TableCell>
      <TableCell>{data?.[position].email}</TableCell>
      <TableCell>{data?.[position].age}</TableCell>
      <TableCell>
        <ModifyButton action={"edit"} position={position} />
      </TableCell>
      <TableCell>
        <ActionButton position={position} action={"delete"}></ActionButton>
      </TableCell>
    </TableRow>
  );
};

export default User;
