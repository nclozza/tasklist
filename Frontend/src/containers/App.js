import { Fragment, useState } from "react";
import NavBarComponent from "../components/NavBarComponent";
import MainComponent from "../components/MainComponent";
import taskRequests from "../requests/Tasks";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [loadingGetTasks, setLoadingGetTasks] = useState(false);
  const [loadingMarkTaskDone, setLoadingMarkTaskDone] = useState(false);
  const [error, setError] = useState(false);
  const [errorInput, setErrorInput] = useState(false);

  const onInputChange = (event) => {
    setQuantity(event.target.value);
    setErrorInput(isNaN(event.target.value));
  };

  const onClickSearchButton = () => {
    if (!errorInput) {
      setLoadingGetTasks(true);
      taskRequests
        .getTasks(quantity)
        .then((data) => {
          if (data) {
            setTasks(data);
          } else {
            setError(true);
          }
        })
        .finally(() => setLoadingGetTasks(false));
    }
  };

  const handleOpenDialog = (task) => {
    setSelectedTask(task);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedTask(null);
    setOpenDialog(false);
  };

  const handleCompleteButton = (uuid) => {
    setLoadingMarkTaskDone(true);
    taskRequests
      .markTaskDone(uuid)
      .then((data) => {
        if (!data) {
          setError(true);
        }
      })
      .finally(() => {
        setLoadingMarkTaskDone(false);
        handleCloseDialog();
      });
  };

  const handleCloseSnackbar = () => {
    setError(false);
  };

  return (
    <Fragment>
      <NavBarComponent
        quantity={quantity}
        onInputChange={onInputChange}
        onClickButton={onClickSearchButton}
        errorInput={errorInput}
      />

      <MainComponent
        tasks={tasks}
        selectedTask={selectedTask}
        openDialog={openDialog}
        handleOpenDialog={handleOpenDialog}
        handleCloseDialog={handleCloseDialog}
        handleCompleteButton={handleCompleteButton}
        handleCloseSnackbar={handleCloseSnackbar}
        loadingGetTasks={loadingGetTasks}
        loadingMarkTaskDone={loadingMarkTaskDone}
        error={error}
      />
    </Fragment>
  );
}

export default App;
