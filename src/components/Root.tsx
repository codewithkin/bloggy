import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

interface RootProps {

}

const Root: FunctionComponent<RootProps> = () => {
    return ( 
        <section className="grid md:flex">
            <NavBar />
            <section>
                <Outlet />
            </section>
        </section>
     );
}
 
export default Root;