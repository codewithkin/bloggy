import { Box, Heading } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import RecentPosts from "../components/RecentPosts";
import { auth } from "../config/firebase";
import { User } from "firebase/auth";
import Filler from "../components/Filler";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        setUser(auth.currentUser);
    }, [auth])

    return user ?
        <Box
        className="p-6"
        w="100vw">
            <header>
                <Heading className="font-Montserrat"
                fontFamily="Montserrat"
                display={{ base: "none", md: "block" }}
                >Bloggy</Heading>
            </header>

            <RecentPosts />
        </Box>
        :
        <Filler />
}
 
export default Home;