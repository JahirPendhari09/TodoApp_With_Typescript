import { ReactNode, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"

interface PrivateRouteProps {
    children: ReactNode;
  }
const PrivateRoute:React.FC<PrivateRouteProps> =({children})=>{

    const isAuth=localStorage.getItem("isAuth")||false
    if (isAuth==false) {
        return (
          <Navigate to="/login"/>
        );
      }
    return <>{children}</>;
    
}

export {PrivateRoute}