import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, editUser } from "../redux/slices/recordSlice.js";

import { useGetRecordsQuery } from "../redux/slices/services/recordsApiSlice";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import User from "./User";

const API_URL = process.env.REACT_APP_SERVER_ENDPOINT;
const socket = io(`${API_URL}`, {
  withCredentials: true,
});

const ListBody = () => {
  let navigate = useNavigate();
  const { page } = useParams();
  const { data, isFetching, refetch } = useGetRecordsQuery();
  const dispatch = useDispatch();
  const localRecords = useSelector((state) => state.recordState);

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
  socket.off("Records").once("Records", (action) => {
    console.log(action?.message);
    if (action?.message === "Delete") {
      dispatch(deleteUser(action?.recordData));
    }
    if (action?.message === "Update") {
      dispatch(editUser(action?.recordData));
    }
    if (action?.message === "Add") {
      dispatch(addUser(action?.recordData));
    } else {
      return null;
    }
  });

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
              <TableCell>Photo</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {localRecords
              ?.slice(
                parseInt(page || 0) * rowsPerPage,
                parseInt(page || 0) * rowsPerPage + rowsPerPage
              )
              .map((user) => {
                return (
                  <User
                    key={user._id}
                    userInfo={localRecords[localRecords.indexOf(user)]}
                  />
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={localRecords?.length}
          rowsPerPage={rowsPerPage}
          page={parseInt(page) || 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default ListBody;
