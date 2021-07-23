import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import { Button } from "../../Button";

import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectIsEveryTaskNotDone,
  selectHidedone,
} from "../../tasksSlice";

export const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isEveryTaskNotDone = useSelector(selectIsEveryTaskNotDone);
  const hideDone = useSelector(selectHidedone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
            disabled={isEveryTaskNotDone}
          >
            {hideDone ? "Show" : "Hide"} done
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Finish all
          </Button>
        </>
      )}
    </Wrapper>
  );
};
