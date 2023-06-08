import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

interface RootProps {

}

const Root: FunctionComponent<RootProps> = () => {
    return ( 
        <>
            <NavBar />
            <Outlet />
        </>
     );
}
 
export default Root;