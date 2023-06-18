import { FunctionComponent, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Box, Button, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { blog } from "../components/RecentPosts";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

interface BlogProps {
    
}
 
const Blog: FunctionComponent<BlogProps> = () => {
    const {currentBlog} = useContext(BlogContext);
    const blog: blog  = currentBlog;

    return ( 
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        >
            <Image src={blog.BlogImageUrl} 
                    alt={blog.Title}
                    w={{ lg: "100%" }}
                    mb={{ lg: "20px" }}
                    />
           <Box
           p={{ lg: "1rem"}}
           >
           <Box>
            <Heading
            size={{ lg: "2xl" }}
            >{blog.Title}</Heading>
            <Text>By <span className="text-blue-700 font-bold">{blog.Poster.name}</span></Text>
           </Box>

           <Text
           fontSize={{ base: "lg", lg: "2xl" }}
           className="font-openSans"
           >
            {blog.Description}
           </Text>

           <section className="share-buttons flex lg:gap-4">
            <FacebookShareButton url="https://bloggy-preview.netlify.com" title={`I am reading this amazing article on Bloggy, it's called ${blog.Title} by ${blog.Poster.name}`}>
                <Button
                className="flex gap-2"
                colorScheme="blue"
                >
                    Share on Facebook
                    <Icon as={FaFacebook}
                    boxSize={6}
                    /> 
                </Button>
            </FacebookShareButton>
            <TwitterShareButton url="https://bloggy-preview.netlify.com" title={`I am reading this amazing article on Bloggy, it's called ${blog.Title} by ${blog.Poster.name}`}>
                <Button
                className="flex gap-2"
                colorScheme="blue"
                >
                    Share on Twitter
                    <Icon as={FaTwitter}
                    boxSize={6}
                    /> 
                </Button>
            </TwitterShareButton>
            <LinkedinShareButton url="https://bloggy-preview.netlify.com" title={`I am reading this amazing article on Bloggy, it's called ${blog.Title} by ${blog.Poster.name}`}>
                <Button
                className="flex gap-2"
                colorScheme="blue"
                >
                    Share on LinkedIn  
                    <Icon as={FaLinkedin}
                    boxSize={6}
                    /> 
                </Button>
            </LinkedinShareButton>
           </section>
           </Box>
        </Box>
     );
}
 
export default Blog;