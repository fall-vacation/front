import React from "react";
import { debounce } from "lodash";

const index = () => {
  const onHandleChange = debounce((value: string) => {
    console.log(value);
  }, 500);
  return (
    <div>
      <input type='text' onChange={(e) => onHandleChange(e.target.value)} />
    </div>
  );
};

export default index;
