import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import { Icon } from "@iconify/react";
const SuggestionModal = () => {
  const [centeredModal, setCenteredModal] = useState(false);
  return (
    <div>
      <div className="vertically-centered-modal">
        <div className="suggetion-icon"  onClick={() => setCenteredModal(!centeredModal)}>
          <Icon
            icon="iconoir:suggestion"
            width={20}
           
            role="button"
          />
        </div>
        <Modal
          isOpen={centeredModal}
          toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>
            <Icon icon="iconoir:suggestion" width={30} />
          </ModalHeader>
          <ModalBody>
            <h4>Template suggestion</h4>
            <p>
              Got an idea for a new template? We'd love to hear it! Please
              provide as much detail as possible when submitting your
              suggestion.
            </p>
            <div>
              <Label>Suggestion</Label>
              <Input type="textarea" placeholder="I would like Ava to study" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="primary-btn"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              save
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default SuggestionModal;
