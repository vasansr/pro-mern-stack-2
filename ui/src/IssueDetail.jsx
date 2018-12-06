import React from 'react';

import graphQLFetch from './graphQLFetch.js';
import Toast from './Toast.jsx';

export default class IssueDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      issue: {},
      toastVisible: false,
      toastMessage: '',
      toastType: 'info',
    };

    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (prevId !== id) {
      this.loadData();
    }
  }

  showError(message) {
    this.setState({
      toastVisible: true, toastMessage: message, toastType: 'danger',
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  async loadData() {
    const { match: { params: { id } } } = this.props;
    const query = `query issue($id: Int!) {
      issue (id: $id) {
        id description
      }
    }`;

    const data = await graphQLFetch(query, { id }, this.showError);
    if (data) {
      this.setState({ issue: data.issue });
    } else {
      this.setState({ issue: {} });
    }
  }

  render() {
    const { issue: { description } } = this.state;
    const { toastVisible, toastType, toastMessage } = this.state;
    return (
      <div>
        <h3>Description</h3>
        <pre>{description}</pre>
        <Toast
          showing={toastVisible}
          onDismiss={this.dismissToast}
          bsStyle={toastType}
        >
          {toastMessage}
        </Toast>
      </div>
    );
  }
}
