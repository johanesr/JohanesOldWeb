import React, { Component } from 'react';
import Loader from '../components/Loader';

const asyncComponent = (getComponent, text) => {
  return class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentDidMount() {
      this.mounted = true;
    }

    UNSAFE_componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          console.log(Component);
          AsyncComponent.Component = Component;
          if (this.mounted) {
            this.setState({ Component });
          }
        })
      }
    }

    componentWillUnmount(){
      this.mounted = false;
    }

    render() {
      const { Component } = this.state;

      if (Component) {
        return <Component {...this.props} />
      }

      //return <Loader text={text || i18n('loader.pleaseWait')} full loading />
      return <Loader text={text || "Please Wait..."} full loading />
    }
  }
};

export default asyncComponent;
