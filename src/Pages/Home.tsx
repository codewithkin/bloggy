import { Box, Divider, Grid, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {Link as RLink} from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    let blogs = undefined;

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

            <Box mt={{ md: "2rem" }}>
                <Heading>Latest blog posts</Heading>
                <Grid mb="1rem">
                    { blogs ?
                        blogs :
                        <Text className="text-gray-500 font-bold font-mono">Nothing to see here yet...</Text>
                    }
                </Grid>
                <Link 
                color="white"
                className="bg-blue-700 font-semibold px-8 py-3 rounded-md"
                as={RLink}
                to="/login"
                >
                    Create a new blog
                    <Icon 
                    as={FaPlus} 
                    fill="white" 
                    ml="5px" />
                </Link>
            </Box>
        </Box>
     );
}
 
export default Home;