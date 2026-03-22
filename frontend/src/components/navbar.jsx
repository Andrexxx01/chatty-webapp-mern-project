import { useAuth } from "../store/useAuth";

const Navbar = () => {
  const {authUser} = useAuth();

  return (
    <div>Navbar</div>
  )
}

export default Navbar