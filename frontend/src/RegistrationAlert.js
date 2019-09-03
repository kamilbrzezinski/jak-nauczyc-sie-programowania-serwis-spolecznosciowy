import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'

import './RegistrationAlert.css'

class RegistrationAlert extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          visible: this.props.visible,
          variant: this.props.variant,
          heading: this.props.heading,
          message: this.props.message
        };
    
      }

      setMessage = (message) => {
        this.setState({message: message});
      }

      setHeading = (heading) => {
        this.setState({heading: heading});
      }

      setVariant = (variant) => {
        this.setState({variant: variant})
      }

      setVisible = (isVisible) => {
          this.setState({visible: isVisible});
      }

      render() {
        if (this.state.visible) {
        return (
          <>
          <div className="RegistrationAlert">
            <Alert variant={this.state.variant} onClose={() => this.setState({visible: false})} dismissible>
            <Alert.Heading>{this.state.heading}</Alert.Heading>
            <p>
              {this.state.message}
            </p>
          </Alert>
          </div>
          </>
        );
      }
      return null;
    }
}

export default RegistrationAlert;