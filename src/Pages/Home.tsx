import { Box, Divider, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import RecentPosts from "../components/RecentPosts";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {

    return ( 
        <Box 
        className=""
        w="100vw">
            <header>
                <Heading className="font-mono"
                color="blue.200"
                fontFamily="Montserrat"
                >Bloggy</Heading>
                <Divider/>
            </header>

            <RecentPosts />
        </Box>
     );
}
 
export default Home;