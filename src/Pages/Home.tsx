import { Box, Divider, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return ( 
        <Box w="100vw">
            <header className="p-5">
                <Heading><span className="text-blue-700 underline font-mono">Bloggy</span>: your personal <span className="text-blue-700">blogging</span> companion</Heading>
                <Divider/>
            </header>
        </Box>
     );
}
 
export default Home;