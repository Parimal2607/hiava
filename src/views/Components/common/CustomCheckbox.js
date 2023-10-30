import React, { useState } from "react";
const newArr = [];
const CustomCheckbox = ({ val, sendData, setDeptVal, setIsChecked, isChecked, setFlag }) => {
  
  // const [isChecked, setIsChecked] = useState(false);
  // const [deptVal, setDeptVal] = useState(false);

  const toggleCheckbox = (event) => {
    setIsChecked(!isChecked);
    event.target.value = event.target.value?.toLowerCase()
    if (!newArr.includes(event.target.value)) {
      newArr.push(event.target.value);
    } else {
      const arr = newArr.indexOf(event.target.value);
      newArr.splice(arr, 1);
    }
    sendData(newArr);
    setFlag(prev => !prev)
  };
  return (
    <div className="custom-checkbox">
      <div class="checkbox-wrapper-12">
        <div class="cbx">
          <input
            checked={isChecked}
            onChange={toggleCheckbox}
            type="checkbox"
            id="cbx-12"
            value={val}
          />
          <label for="cbx-12" onClick={toggleCheckbox}></label>
          <svg fill="none" viewBox="0 0 15 14" height="10" width="11">
            <path d="M2 8.36364L6.23077 12L13 2"></path>
          </svg>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo-12">
              <feGaussianBlur
                result="blur"
                stdDeviation="4"
                in="SourceGraphic"
              ></feGaussianBlur>
              <feColorMatrix
                result="goo-12"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                mode="matrix"
                in="blur"
              ></feColorMatrix>
              <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CustomCheckbox;
