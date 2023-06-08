import { Divider, Grid } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import { BiBookReader, BiLogOut } from "react-icons/bi";
import { BsFillBookmarkStarFill } from "react-icons/bs"
import IconLink from "./IconLink";

interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    return ( 
        <Grid 
        backgroundColor="gray.400"
        w={{ base: "100vw", lg: "5vw" }}
        justifyContent="center"
        alignItems="center"
        gridTemplateColumns={{ lg: "1" }}
        h="100vh">
            <IconLink color="" icon={AiOutlineHome} linkText="Home" />
            <IconLink color="" icon={BiBookReader} linkText="Articles" />
            <IconLink color="" icon={BsFillBookmarkStarFill} linkText="Home" />
            <IconLink color="" icon={AiOutlineUser} linkText="Home" />
            <Divider />
            <IconLink icon={BiLogOut} linkText="Logout" color="red.600"/>
        </Grid>
     );
}
 
export default NavBar;