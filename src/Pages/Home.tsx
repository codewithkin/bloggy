import { Box, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import RecentPosts from "../components/RecentPosts";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {

    return ( 
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
     );
}
 
export default Home;