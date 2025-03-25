import React, { useState } from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DropDown.css";

const TimeDropdown = () => {
  const times = [
    "8 AM CST", "9 AM CST", "10 AM CST", "11 AM CST", 
    "12 PM CST", "1 PM CST", "2 PM CST", "3 PM CST", 
    "4 PM CST", "5 PM CST"
  ];


  const [selectedTime, setSelectedTime] = useState(
     "Choose Your Time"
  );


  const handleSelect = (time) => {
    setSelectedTime(time); 
    localStorage.setItem("selectedTime", time); 
  };

  return (
    <Dropdown as={ButtonGroup} className="w-100 mb-3" style={{ position: "relative", zIndex: 1050 }}>
      <Dropdown.Toggle
        className="custom-dropdown-toggle p-3 w-100 shadow bg-light rounded"
        style={{ backgroundColor: "white", color: "black", border: "1px solid #ccc", fontSize: "17px" }}
      >
        {selectedTime === "Choose Your Time" ? selectedTime : ` ${selectedTime}`} 
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 custom-dropdown-menu">
        {times.map((time, index) => (
          <Dropdown.Item key={index} className="dropdown-item" onClick={() => handleSelect(time)}>
            {time}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TimeDropdown;
