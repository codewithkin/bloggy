import { Box, Button, Divider, Grid, Icon } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import { BiBookReader, BiLogOut } from "react-icons/bi";
import { BsFillBookmarkStarFill } from "react-icons/bs"
import { FaBars, FaPlus, FaTimes, FaUserPlus } from "react-icons/fa";
import IconLink from "./IconLink";
import { auth } from "../config/firebase";

interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    const [display, setDisplay] = useState<boolean>(false);

    return ( 
        display ?
        <Grid 
        backgroundColor="blue.200"
        w={{ base: `full`, lg: "6vw" }}
        justifyContent="center"
        alignItems="center"
        h="100vh"
        p="10"
        shadow={{ lg: "dark-lg" }}
        position="relative"
        >
            <Icon 
            fill="blue.600"
            as={FaTimes} 
            boxSize={7}
            onClick={() => setDisplay(!display)}
            position="absolute"
            right={10}
            top={10}
            w={{ base: "20px", md: 0 }}
            />
            <IconLink setDisplay={setDisplay} dest="/home" color="" icon={AiOutlineHome} linkText="Home" />
            <IconLink setDisplay={setDisplay} dest="/blogs/all" color="" icon={BiBookReader} linkText="Articles" />
            <IconLink setDisplay={setDisplay} dest="/blogs/favorites" color="" icon={BsFillBookmarkStarFill} linkText="Favorites" />
            <IconLink setDisplay={setDisplay} dest="/account" color="" icon={AiOutlineUser} linkText="Account" />
            <IconLink setDisplay={setDisplay} dest="/blog/new" color="" icon={FaPlus} linkText="New blog" />
            <Divider />
            <Box>
                {
                    auth.currentUser ?
                    window.innerWidth < 400 ?
                        <Button
                        colorScheme="red"
                        variant="link"
                        >Logout</Button> :
                        <BiLogOut fill="red" size={40}
                        />
                    : 
                    <Icon 
                    boxSize={15}
                    as={FaUserPlus} />
                }
            </Box>
        </Grid> :
        <Icon 
        as={FaBars}
        boxSize={7} 
        onClick={() => setDisplay(!display)}
        position="absolute"
        right={4}
        top={6}
        fill="blue.600"
        />
     );
}
 
export default NavBar;