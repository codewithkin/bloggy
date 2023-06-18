import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { blog } from "./RecentPosts";
import { FunctionComponent, useContext } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

interface BlogPreviewProps {
    blog: blog
}
 
const BlogPreview: FunctionComponent<BlogPreviewProps> = ({blog}) => {
    const {updateBlog} = useContext(BlogContext);

    return ( 
        <Card 
        as={Link}
        to={`/blog`}
        onClick={() => updateBlog(blog)}
        variant="filled"
        minWidth={{ base: "350px" }}
        maxWidth={{ md: "800px" }}
        shadow="dark-lg"
        minHeight="200px"
        h="auto"
        alignContent="center"
        justifyContent="center"
        position="relative"
        direction={{ base: "column", lg: "row" }}
        >
            
            <CardHeader
            p="0"
            >
            <Image 
            boxSize={{ base: "-moz-fit-content", md: "1000px" }}
            maxHeight="200px"
            src={blog.BlogImageUrl}/>
                <Heading
                p="0.5rem"
                size={"lg"}
                >
                    {blog.Title}
                </Heading>
                <Badge
                position="absolute"
                top={2}
                left={2}
                colorScheme="cyan"
                px="0.6rem"
                py="0.3rem"
                rounded="2xl"
                >
                    <Flex
                    alignItems="center"
                    gap="5px"
                    >
                        <Avatar 
                        size="sm"
                        src={blog.Poster.photoUrl}
                        name={blog.Poster.name}
                        />
                        <Text
                        ><span
                        className="font-bold font-Montserrat"
                        >{blog.Poster.name}</span></Text>
                    </Flex>
                </Badge>
                <Flex
            gap="10px"
            >
                {
                    blog.Topics.map(topic => {
                        return (
                            <Badge
                            colorScheme="blue"
                            p="0.3rem"
                            key={Math.random()}
                            >
                                {topic}
                            </Badge>
                        )
                    })
                }
                </Flex>
                <Divider />
            </CardHeader>

            <section>
            <CardBody
            fontSize={{ base: "auto", md: "20px" }}
            p="10px"
            >
                {
                    blog.Description.length > 200 ?
                    <Text
                    >
                    {blog.Description.slice(0, 200)}...
                </Text> :
                    <Text>
                        {blog.Description}
                    </Text>
                }
            </CardBody>

            <CardFooter
            py="0"
            >
                    <Button 
                    colorScheme="red"
                    mt={{ base: "4px", lg: "0" }}
                    w={{ base: "full", lg: "25%" }}
                    p={{ base: "1rem" }}
                    >
                        Save
                        <Icon
                        boxSize={25}
                        ml="4px"
                        as={ blog.Bookmarked ? FaBookmark : FaRegBookmark } />
                    </Button>
            </CardFooter>
            </section>
        </Card>
     );
}
 
export default BlogPreview;