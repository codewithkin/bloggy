import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import { blog } from "./RecentPosts";
import { FunctionComponent } from "react";
import { Link as RLink } from "react-router-dom"
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

interface BlogPreviewProps {
    blog: blog
}
 
const BlogPreview: FunctionComponent<BlogPreviewProps> = ({blog}) => {
    return ( 
        <Card 
        variant="filled"
        minWidth={{ base: "350px" }}
        maxWidth={{ md: "400px" }}
        shadow="dark-lg"
        minHeight="400px"
        alignContent="center"
        justifyContent="center"
        position="relative"
        >
            <Image 
            maxHeight="200px"
            src={blog.BlogImageUrl}/>
            <CardHeader>
                <Heading
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
                <Divider />
            </CardHeader>

            <Flex
            gap="10px"
            >
                {
                    blog.Topics.map(topic => {
                        return (
                            <Badge
                            colorScheme="blue"
                            p="0.3rem"
                            >
                                {topic}
                            </Badge>
                        )
                    })
                }
            </Flex>

            <CardBody>
                {
                    blog.Description.length > 200 ?
                    <Text
                    className="font-bold"
                    >
                    {blog.Description.slice(0, 200)}...
                    <Link 
                    className="underline font-bold px-4 py-2 bg-blue-600 text-center text-white rounded-full w-[10rem]"
                    colorScheme="blue.500"
                    display="block"
                    as={RLink}>Read full</Link>
                </Text> :
                    <Text
                    className="font-bold"
                    >
                        {blog.Description}
                    </Text>
                }
            </CardBody>

            <CardFooter
            >
                    <Button 
                    colorScheme="red"
                    mt="4px"
                    w="full"
                    >
                        Save
                        <Icon
                        boxSize={25}
                        ml="4px"
                        as={ blog.Bookmarked ? FaBookmark : FaRegBookmark } />
                    </Button>
            </CardFooter>
        </Card>
     );
}
 
export default BlogPreview;