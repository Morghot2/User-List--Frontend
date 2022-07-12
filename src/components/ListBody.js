import React, { useState, useEffect } from "react";

import { useGetUsersQuery } from "../redux/slices/services/apiSlice";

import { useNavigate, useParams } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import User from "./User";

const ListBody = () => {


  let navigate = useNavigate();
  const { page } = useParams();
  const { data, isFetching } = useGetUsersQuery();

  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    navigate(`${newPage}`);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
  };

  useEffect(() => {
    navigate(`0`);
  }, []);
  if (isFetching) return null;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(
                parseInt(page) * rowsPerPage,
                parseInt(page) * rowsPerPage + rowsPerPage
              )
              .map((user) => {
                return <User key={user.id} position={data.indexOf(user)} />;
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={data?.length}
          rowsPerPage={rowsPerPage}
          page={parseInt(page)}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default ListBody;
