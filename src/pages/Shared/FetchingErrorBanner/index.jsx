import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  unsetNetworkError,
  unsetServerError,
} from '../../../store/actionCreators/app';

import CloudError from '../SVG/CloudError';
import './FetchingErrorBanner.scss';

function NetworkErrorBanner({ type, children }) {
  const dispatch = useDispatch();
  const bannerRef = React.useRef();

  const defineAction = () => {
    if (type === 'networkError') {
      return unsetNetworkError;
    } else if (type === 'serverError') {
      return unsetServerError;
    }
  };

  const removeFetchingError = () => {
    const action = defineAction();
    dispatch(action());
  };

  const closeBanner = e => {
    bannerRef.current.classList.add('network-error-banner--close');
    setTimeout(removeFetchingError, 200);
  };

  return (
    <div className='network-error-banner' onClick={closeBanner} ref={bannerRef}>
      <CloudError className='network-error-banner__icon' />
      <p className='network-error-banner__message'>{children}</p>
    </div>
  );
}

NetworkErrorBanner.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
};
export default NetworkErrorBanner;
