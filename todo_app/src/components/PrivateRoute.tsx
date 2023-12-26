import { ReactNode, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"

interface PrivateRouteProps {
    children: ReactNode;
  }
const PrivateRoute:React.FC<PrivateRouteProps> =({children})=>{

    const [isAuth,setAuth] = useState<Boolean>(true);
    const location = useLocation();
    if (!isAuth) {
        return (
          <Navigate
            to="/login"
            state={{ pathname: location.pathname }}
            replace={true}
          />
        );
      }
    return <>{children}</>;
    
}

export {PrivateRoute}