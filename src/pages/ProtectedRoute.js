/* eslint-disable react/prop-types */

import { Route, Redirect } from 'react-router-dom';
import { useLoginUserMutation } from '../rtk/api/apiSlice';


const ProtectedRoute = ({ component: Component, userTypes, ...rest }) => {
  const { data: user, isLoading } = useLoginUserMutation();

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          userTypes && userTypes.indexOf(user.type) === -1 ? (
            <Redirect to="/unauthorized" />
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
