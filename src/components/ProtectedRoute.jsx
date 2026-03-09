 import { useAuthStore } from "../store/useAuthStore"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {
  const user = useAuthStore((state) => state.user)

  if(!user){
    return<Navigate to ="/Login" replace/>
  }

  
  return children
}

export default ProtectedRoute;
