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

class CakeButton extends Component {
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
          Cake
        </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Select Your Cake Flavor</ModalHeader>
          <ModalBody>
            <Form>
              <label>
                <input
                  type="radio"
                  name="cake-flavors"
                  value="vanilla"
                  className="form-check-input"
                />
                Vanilla Cake
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="cake-flavors"
                  value="chocolate"
                  className="form-check-input"
                />
                Chocolate Cake
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

export default CakeButton;
