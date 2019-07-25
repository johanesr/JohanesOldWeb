import React from 'react';
import {string, bool, node} from 'prop-types';
import cx from 'classnames';

// styles
// import './styles.scss';

function Loader(props) {
  const {full, text, loading, children} = props;
  const loaderClass = cx('loader', {full});

  return loading ? (
    <div className={loaderClass} style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      zIndex: 10,
      width: '100%',
      ...(full ? /*istanbul ignore next*/{
        position: 'fixed',
        top: 0,
        left: 0,
        paddingTop: 94,
        height: '100vh !important',
        overflow: 'hidden'
      } : {
        height: 'calc(100vh - 94px)'
      })
    }}>
      <div className="loader-ellipsis" style={{
        display: 'inline-block',
        position: 'relative',
        textAlign: 'center',
        width: 64,
        height: 64
      }}>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
      <p className="text" style={{
        padding: ' 0 54px',
        margin: 0,
        textAlign: 'center',
        color: '#58627a',
        minHeight: 38
      }} dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  ) : children || <span/>;
}

Loader.defaultProps = {
  full: false,
  loading: false,
  text: '',
  top: false
};

Loader.propTypes = {
  full: bool,
  loading: bool,
  text: string,
  top: bool,
  children: node
};

export default Loader;
