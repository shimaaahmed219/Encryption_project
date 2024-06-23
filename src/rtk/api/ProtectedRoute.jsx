/* eslint-disable react/prop-types */
// components/ProtectedRoute.js

import { useLoginUserMutation} from './apiSlice';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, allowedTypes }) => {
  const { data, isLoading } = useLoginUserMutation();
  const userType = data?.data?.user_type;
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return allowedTypes.includes(userType) ? children : "";
};

export default ProtectedRoute;
