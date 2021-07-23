import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Button } from "../../Button";

export const DownloadExapleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button isabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "Loading..." : "Download tasks examples"}
    </Button>
  );
};
