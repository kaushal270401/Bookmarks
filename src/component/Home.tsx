import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
        <Link to='/table'><button className="button">User</button></Link> 
       <Outlet />
    </> 
  );
};

export default Home;