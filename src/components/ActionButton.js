import {
  useAddRecordMutation,
  useUpdateRecordMutation,
  useRemoveRecordMutation,
} from "../redux/slices/services/recordsApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { changeModal } from "../redux/slices/buttonSlice";
// import { socket } from "./ListBody";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const API_URL = process.env.REACT_APP_SERVER_ENDPOINT;

const ActionButton = ({ action, userValues, userInfo }) => {
  const recordToChangeId = useSelector((state) => state.buttonState.record);

  const [addRecord] = useAddRecordMutation();
  const [updateRecord] = useUpdateRecordMutation();
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
  // const handleSocket = () => {
  //   socket.emit("Records", "Records changed");
  // };


  const handleUser = () => {
    // handleSocket();
    if (action === "delete") {
      removeRecord(userInfo._id);
    } else if (type === "new") {
      addRecord(userValues);
      dispatch(changeModal(!isShown));
    } else if (type === "edit") {
      updateRecord({ recordToChangeId, userValues });
      dispatch(changeModal(!isShown));
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
