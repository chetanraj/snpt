import React, { Component } from 'react';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notMsg: 'Snpt copied to clipboard 🎉',
      showNotification: false,
      hideTimer: null
    };
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  showNotification() {
    if (this.state.hideTimer) {
      clearTimeout(this.state.hideTimer);
    }
    this.setState({
      showNotification: true,
      hideTimer: setTimeout(() => {
        this.setState({
          showNotification: false
        });
      }, 3000)
    });
  }

  render() {
    return (
      <div
        className={
          'notification' +
          (this.state.showNotification ? ' not-active' : ' not-inactive')
        }>
        {this.state.notMsg}
      </div>
    );
  }
}

export default Notification;
