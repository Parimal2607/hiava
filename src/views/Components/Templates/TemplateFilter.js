import { useState } from "react";
import { Filter } from "react-feather";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
} from "reactstrap";
import CustomCheckbox from "../common/CustomCheckbox";
const filValue = [
  "Universal",
  "Marketing",
  "Sales",
  "Finance",
  "Operations & support",
  "Human resources",
  "Technical",
  "Other",
];
const filValue1 = [
  "Email",
  "Blog Post",
  "Ads",
  "Social media",
  "Ecommerce",
  "Real estate",
  "SEO",
  "Website",
];
const TemplateFilter = ({ sendData, setFlag, appylyFunc }) => {
  const [canvasPlacement, setCanvasPlacement] = useState("start");
  const [canvasOpen, setCanvasOpen] = useState(false);
  const [deptVal, setDeptVal] = useState(false);
  // const [isChecked, setIsChecked] = useState(false)
  const toggleCanvasEnd = () => {
    setCanvasPlacement("end");
    setCanvasOpen(!canvasOpen);
  };

  return (
    <div className="filter-sidebar">
      <Button className="primary-btn d-sm-block d-none" onClick={toggleCanvasEnd}>
        <Filter size={18} />
      </Button>
      <div onClick={toggleCanvasEnd} role="button" className="d-sm-none d-block">
        <Filter size={18} />
      </div>

      <Offcanvas
        direction={canvasPlacement}
        isOpen={canvasOpen}
        toggle={toggleCanvasEnd}
      >
        <OffcanvasHeader toggle={toggleCanvasEnd}>Filters</OffcanvasHeader>
        <OffcanvasBody className="position-relative">
          <div className="filter-section">
            <div className="department-section">
              <p className="title">Department</p>

              <ul>
                {filValue.map((val, index) => {
                  const [isChecked, setIsChecked] = useState(false);
                  return (
                    <li key={index}>
                      {" "}
                      <CustomCheckbox
                        val={val}
                        sendData={sendData}
                        setDeptVal={setDeptVal}
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                        {...{ setFlag }}
                      />
                      <Label value={val}>{val}</Label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="department-section">
              <p className="title">Usecase</p>
              <ul>
                {filValue1.map((val1, index) => (
                  <li key={index}>
                    {" "}
                    <CustomCheckbox value={val1} />
                    <Label value={val1}>{val1}</Label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" d-flex gap-1">
            <Button
              className="primary-btn"
              onClick={() => {
                appylyFunc();
                setCanvasOpen(!canvasOpen);
                sendData();
              }}
            >
              Apply
            </Button>
            <Button className="secondary-btn" onClick={toggleCanvasEnd}>
              Cancel
            </Button>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default TemplateFilter;
