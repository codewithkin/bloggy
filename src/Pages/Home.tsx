import { Box, Divider, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import RecentPosts from "../components/RecentPosts";
import RecentReads from "../components/RecentReads";
import News from "../components/News";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {

    return ( 
        <Box 
        className="p-5"
        w="100vw">
            <header>
                <Heading className="text-blue-700 font-mono"
                fontFamily="Montserrat"
                >Bloggy</Heading>
                <Divider/>
            </header>

            <RecentPosts />
            <RecentReads />
            <News />
        </Box>
     );
}
 
export default Home;