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
const TemplateFilter = () => {
  const [canvasPlacement, setCanvasPlacement] = useState("start");
  const [canvasOpen, setCanvasOpen] = useState(false);

  const toggleCanvasEnd = () => {
    setCanvasPlacement("end");
    setCanvasOpen(!canvasOpen);
  };

  return (
    <div className="filter-sidebar">
      <Button className="primary-btn" onClick={toggleCanvasEnd}>
        <Filter size={18} />
      </Button>

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
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Universal</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Marketing</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Sales</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Finance</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Operations & support</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Human resources</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Technical</Label>
                </li>
                <li>
                  <CustomCheckbox />
                  <Label>Other</Label>
                </li>
              </ul>
            </div>
            <div className="department-section">
              <p className="title">Usecase</p>
              <ul>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Email</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Blog Post</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Ads</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Social media</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Ecommerce</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>Real estate</Label>
                </li>
                <li>
                  {" "}
                  <CustomCheckbox />
                  <Label>SEO</Label>
                </li>
                <li>
                  <CustomCheckbox />
                  <Label>Website</Label>
                </li>
              </ul>
            </div>
          </div>
          <div className=" d-flex gap-1">
            <Button className="primary-btn">Apply</Button>
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
