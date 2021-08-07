import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {getEmail, addTask} from "../../redux/reducers/list";

function AddEmail(props) {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.list.email);

  const handleClickEmail = (e) => {
    dispatch(getEmail(e.target.value));
  };

  const addTasks = () => {
    dispatch(addTask());
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={addTasks}>
        Добавить
      </Button>
    </form>
  );
}

export default AddEmail;
