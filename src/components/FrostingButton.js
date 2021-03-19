import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

class FrostingButton extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
    };
  } //close constructor

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <>
        <button class="btn btn-info" onClick={this.toggleModal}>
          Frosting
        </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Select Your Frosting Flavor</ModalHeader>
          <ModalBody>
            <Form>
              <label>
                <input
                  type="radio"
                  name="frosting-flavors"
                  value="vanilla"
                  className="form-check-input"
                />
                Vanilla Frosting
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="frosting-flavors"
                  value="chocolate"
                  className="form-check-input"
                />
                Chocolate Frosting
              </label>
            </Form>
          </ModalBody>
          <button type="submit" value="submit">
            Select
          </button>
        </Modal>
      </>
    );
  }
}

export default FrostingButton;
