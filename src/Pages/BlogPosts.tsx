import { FunctionComponent } from "react";
import { Heading, Grid, Link, Box, Text, Icon } from "@chakra-ui/react";
import {Link as RLink} from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface BlogPostsProps {
    
}
 
const BlogPosts: FunctionComponent<BlogPostsProps> = () => {
    const blogs = null;
    return ( 
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
     );
}
 
export default BlogPosts;