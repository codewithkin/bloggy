import { Box, Button, Divider, Grid } from "@chakra-ui/react";
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
        w={{ base: `100vw`, lg: "6vw" }}
        justifyContent="center"
        alignItems="center"
        h="100vh"
        shadow={{ base: "1rem" }}
        >
            <IconLink dest="/home" color="" icon={AiOutlineHome} linkText="Home" />
            <IconLink dest="/posts/all" color="" icon={BiBookReader} linkText="Articles" />
            <IconLink dest="/posts/favorites" color="" icon={BsFillBookmarkStarFill} linkText="Favorites" />
            <IconLink dest="/account" color="" icon={AiOutlineUser} linkText="Account" />
            <Divider />
            <Box>
                { window.innerWidth < 400 ?
                <Button
                colorScheme="red"
                variant="link"
                >Logout</Button> :
                <BiLogOut fill="red" size={40}
                />
                }
            </Box>
        </Grid>
     );
}
 
export default NavBar;