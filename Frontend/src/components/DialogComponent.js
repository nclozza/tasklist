import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const DialogComponent = ({
  task,
  open,
  handleCompleteButton,
  handleClose,
  loadingMarkTaskDone,
}) => {
  const classes = useStyles();

  return (
    task && (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{task.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            {task.uuid}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className={classes.wrapper}>
            <Button
              onClick={() => handleCompleteButton(task.uuid)}
              color="primary"
              autoFocus
              disabled={loadingMarkTaskDone}
            >
              Complete
            </Button>
            {loadingMarkTaskDone && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  );
};

export default DialogComponent;
