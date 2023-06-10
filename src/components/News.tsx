import { Box, Container, Heading, Text, Link } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {Link as RLink} from "react-router-dom";

interface NewsProps {
    
}
 
const News: FunctionComponent<NewsProps> = () => {
    const news = null;
    return ( 
        <Box>
            <Container className="mt-4">
                <Heading>News from the <span className="text-gray-400" style={{fontFamily: "Montserrat"}}>community</span></Heading>
            </Container>
            {
                news ?
                news :
                <Container>
                    <Text className=" p-2 text-gray-500 font-bold text-xl">No news yet...</Text>
                    <Link as={RLink} to="/news/share" className="bg-blue-600 rounded-lg text-white font-bold px-6 py-2">Share something</Link>
                </Container>
            }
        </Box>
     );
}
 
export default News;