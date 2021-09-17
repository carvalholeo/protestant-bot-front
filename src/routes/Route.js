import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { UserProfileContext } from '../contexts/UserProfileContext';

function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = useContext(UserProfileContext);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/contact" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Component {...props} />
        </>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
