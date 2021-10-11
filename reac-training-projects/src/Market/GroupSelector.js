import React from "react";
import SelectComp from "../common/SelectComp/Select";
import { useState, useContext } from "react";
import { myContext } from "./DataProvider";
export default function GroupSelector() {
  const context = useContext(myContext);
    const dispatch = context.action;
    const data = context.info.data;
  const [value, setValue] = useState("");

    const options = [];
    data.forEach(element => {
        options.push({ value: element.group, label: element.group });
    });


  const onChangeHandler = (selectedOption) => {
    dispatch({ type: "group", payload: selectedOption.value });
    setValue(selectedOption);
  };
  return (
    <div className="GroupSelector">
      <SelectComp
        value={value}
        Handler={onChangeHandler}
        options={options}
        title="Select Group"
      />
    </div>
  );
}
