import {
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import DialogComponent from "./DialogComponent";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "15px",
  },
  card: {
    maxWidth: 350,
    minHeight: 200,
  },
  circularProgress: {
    marginLeft: "50%",
  },
}));

const MainComponent = ({
  tasks,
  selectedTask,
  openDialog,
  handleOpenDialog,
  handleCloseDialog,
  handleCompleteButton,
  handleCloseSnackbar,
  loadingGetTasks,
  loadingMarkTaskDone,
  error,
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {loadingGetTasks && (
        <CircularProgress
          size={40}
          left={-20}
          top={10}
          className={classes.circularProgress}
        />
      )}
      <Grid container spacing={3}>
        {tasks.map((task) => {
          return (
            <Grid key={task.uuid} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  className={classes.card}
                  onClick={() => {
                    handleOpenDialog(task);
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {task.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <DialogComponent
        task={selectedTask}
        open={openDialog}
        handleCompleteButton={handleCompleteButton}
        handleClose={handleCloseDialog}
        loadingMarkTaskDone={loadingMarkTaskDone}
      />
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Something wrong happened, please try again later.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default MainComponent;
