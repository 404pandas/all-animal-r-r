import React, { Component } from "react";
import "../assets/css/style.css";
import Modal from "../components/Modal";
import { Button } from "@mui/material";

class Playground extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main id='playground-body'>
        <div id='playground-flexbox'>
          <div id='modal-container'>
            <div id='playground-modal'>
              <div className='modal-background'>
                <Modal
                  id='playground-modal'
                  className='modal'
                  show={this.state.show}
                  handleClose={this.hideModal}
                >
                  <p>Hashtags</p>
                </Modal>{" "}
              </div>
            </div>
          </div>
          <Button id='circle-button' type='button' onClick={this.showModal}>
            #
          </Button>{" "}
        </div>
        <svg height='120' width='120'>
          <circle
            cx='50'
            cy='50'
            r='40'
            stroke='black'
            stroke-width='3'
            fill='white'
          />
          #
        </svg>
      </main>
    );
  }
}
export default Playground;
