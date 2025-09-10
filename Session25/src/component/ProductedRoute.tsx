import { Navigate } from 'react-router-dom';

export default function ProductedRoute(props:any) {
  // Kiểm tra xem người dùng đã đăng nhập hay chưa?
  const inlogin = true;
  if (!inlogin) {
    return <Navigate to='/login'></Navigate>
  }
  return props.element;
}
