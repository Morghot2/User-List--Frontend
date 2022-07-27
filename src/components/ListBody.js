import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";

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

// const API_URL = process.env.REACT_APP_SERVER_ENDPOINT;

// const socket = io(`${API_URL}/api/users`, {
//   // path: "/api/users",
//   withCredentials: true,
// });


const ListBody = () => {
  let navigate = useNavigate();
  const { page } = useParams();
  const { data, isFetching } = useGetRecordsQuery();

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


  // socket.on("connect", (data) => {
  //   console.log(socket.id)
  //   socket.emit("Records", [{sadsa:'asdas'}, {dasd:'sada'}])
  // });
  // socket.on("Records", (data) => {
  //   console.log(data);
  // });


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
                parseInt(page || 0) * rowsPerPage,
                parseInt(page || 0) * rowsPerPage + rowsPerPage
              )
              .map((user) => {
                return (
                  <User key={user._id} userInfo={data[data.indexOf(user)]} />
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={data?.length}
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
