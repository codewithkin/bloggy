import {Box, Text, Link, Heading, Image, SimpleGrid} from "@chakra-ui/react";
import { auth } from "../config/firebase";
import { Link as RLink } from "react-router-dom";

const Account = () => {
    return auth ? 
   <Box
   p="2rem">
    <Heading>Your account information</Heading>
    
    <SimpleGrid
    p="2rem"
    >
        <Heading as={"h3"}>Your profile image</Heading>
        <Image src={auth.currentUser?.photoURL || ""} 
        boxSize={{ lg: "300px" }}
        />
        <Text>Provided by <Link>Google</Link></Text>
    </SimpleGrid>

    </Box>


    : 
    <Box>
        <Heading>You are not logged in yet</Heading>
        <Link 
        className="px-6 py-2 bg-blue-700 text-white font-openSans"
        to="/login"
        as={RLink}>Log in</Link>
    </Box>
}
 
export default Account;