import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

interface RootProps {

}

const Root: FunctionComponent<RootProps> = () => {
    return ( 
        <section className="grid md:flex w-full h-full">
            <section className="md:w-1/9 md:h-full">
                <NavBar />
            </section>
            <section className="md:w-full md:h-[100vh]">
                <Outlet 
                />
            </section>
        </section>
     );
}
 
export default Root;