import { AppBar, Toolbar, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  toolbar: { justifyContent: "center", backgroundColor: "#0077c1" },
  inputRoot: {
    color: "inherit",
  },
  button: {
    marginLeft: 5,
  },
}));

const NavBarComponent = ({
  onClickButton,
  quantity,
  onInputChange,
  errorInput,
}) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <TextField
          placeholder="Number of tasks"
          classes={classes.input}
          onChange={(event) => onInputChange(event)}
          value={quantity}
        />
        <Button
          disabled={errorInput}
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={onClickButton}
        >
          Get Tasks
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
