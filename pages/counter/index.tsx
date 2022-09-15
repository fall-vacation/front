import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../../store/modules/counter";
import { RootState } from "../../store";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(({ count }: RootState) => count);

  return (
    <>
      <h2>counter</h2>
      <div>{value}</div>
    </>
  );
};

export default Counter;
