import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { FunctionComponent, useContext } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import {blog} from "../components/RecentPosts"

interface BlogPreviewProps {
    blog: blog
}
 
const BlogPreview: FunctionComponent<BlogPreviewProps> = ({blog}) => {
    const { updateBlog } = useContext(BlogContext);

    return ( 
        <Card 
        borderRadius={{ lg: "30px" }}
        p={{ lg: "2rem" }}
        w="100%"
        h="100%"
        as={Link}
        to={`/blog/${blog.id}`}
        onClick={() => updateBlog(blog)}
        variant="filled"
        minWidth={{ base: "250px" }}
        maxWidth={{ base: "450px", lg: "800px" }}
        shadow="dark-lg"
        minHeight="200px"
        alignContent="center"
        justifyContent="center"
        position="relative"
        direction={{ base: "column", lg: "row" }}
        >
            
            <CardHeader
            alignItems="stretch"
            h={{ lg: "full" }}
            w={{ lg: "35%" }}
            p="0"
            >
                <Image 
                h={{ lg: "auto"}}
                w={{ lg: "100%" }}
                boxSize={{ base: "-moz-fit-content", md: "1000px" }}
                maxHeight="200px"
                src={blog.BlogImageUrl}/>
            </CardHeader>

            <CardBody
            py={{ lg: "0px" }}
            w={{ lg: "65%" }}
            display="grid"
            >
                <Heading
                size={"lg"}
                >
                    {blog.Title}
                </Heading>
                <Badge
                position="absolute"
                top={{base: "2", lg: "10"}}
                left={{base: "2", lg: "10"}}
                colorScheme="cyan"
                px="0.6rem"
                py="0.3rem"
                rounded="2xl"
                className="h-auto"
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
                            py={{ lg: "5px" }}
                            key={Math.random()}
                            >
                                {topic}
                            </Badge>
                        )
                    })
                }
                </Flex>
                <Divider />
            <CardFooter
            fontSize={{ base: "auto", md: "20px" }}
            px="10px"
            py={{ lg: "0" }}
            display="grid"
            >
                <section>
                    {
                        blog.Description.length > 200 ?
                        <Text
                        >
                        {blog.Description.slice(0, 100)}...
                    </Text> :
                        <Text>
                            {blog.Description}
                        </Text>
                    }
                </section>
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
            </CardBody>
        </Card>
     );
}
 
export default BlogPreview;