import React, { useEffect } from "react";
import Authorization from "./components/Authorization";
import List from "./components/List";
import { useDispatch } from "react-redux";
import { listTasksStart } from "./redux/reducers/list";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTasksStart());
  }, [dispatch]);

  return (
    <div className="App">
      <Authorization />
      <List />
    </div>
  );
}

export default App;
