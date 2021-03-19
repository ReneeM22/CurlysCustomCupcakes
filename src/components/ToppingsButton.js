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

class ToppingsButton extends Component {
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
          Toppings
        </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Select Your Toppings</ModalHeader>
          <ModalBody>
            <Form>
              <label>
                <input
                  type="checkbox"
                  name="toppings"
                  value="rainbow-sprinkles"
                  className="form-check-input"
                />
                Rainbow Sprinkles
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="toppings"
                  value="cherry"
                  className="form-check-input"
                />
                Cherry
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="toppings"
                  value="caramel"
                  className="form-check-input"
                />
                Caramel Drizzle
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

export default ToppingsButton;
