import { FunctionComponent, useState } from "react";
import { Box, Flex, Heading, Menu, MenuButton, Button, MenuList, MenuItem, Icon, Container } from "@chakra-ui/react";
import { BsBriefcase, BsWebcam } from "react-icons/bs";
import { GiTechnoHeart, GiSoccerBall } from "react-icons/gi"
import { BiCodeCurly } from "react-icons/bi"
import BlogPreview from "../components/BlogPreview";
import { useFilteredDocs } from "../hooks/useFilteredDocs";

interface BlogPostsProps {
    
}

export type Topic = "All" | "General" | "Tech" | "Sport" | "Coding";
 
const BlogPosts: FunctionComponent<BlogPostsProps> = () => {
    const [topic, setTopic] = useState<Topic>("Sport");
    const filDocs = useFilteredDocs(topic, topic) as any;

    return ( 
        <Box
        p="2rem"
        >
            <Flex
            justifyContent="space-between"
            >
                <Heading
                size={{ base: "lg" }}
                >
                    {
                        topic === "All" ? "All blog posts" : <p>Latest in <span className="text-red-500 font-openSans">{topic}</span></p>
                    }
                </Heading>
                
                <Menu>
                    <MenuButton as={Button}>
                        Topics
                    </MenuButton>

                    <MenuList>
                    <MenuItem
                        icon={<Icon as={BsWebcam} />}
                        >
                            All
                        </MenuItem>
                        <MenuItem
                        icon={<Icon as={BsBriefcase} />}
                        onClick={() => {
                            setTopic("General");
                        }}
                        >
                            General
                        </MenuItem>
                        <MenuItem
                        icon={<Icon as={GiTechnoHeart} />}
                        onClick={() => setTopic("Tech")}
                        >
                            Tech
                        </MenuItem>
                        <MenuItem
                        icon={<Icon as={GiSoccerBall} />}
                        onClick={() => setTopic("Sport")}
                        >
                            Sport
                        </MenuItem>
                        <MenuItem
                        icon={<Icon as={BiCodeCurly} />}
                        onClick={() => setTopic("Coding")}
                        >
                            Coding
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

            <section
            className="grid lg:flex gap-x-6"
            >
                {
                    
                }
                {
                    filDocs ?
                    filDocs.length == 0 ?
                    <Container>
                        <Heading
                        size={{ base: "lg", xl: "xl" }}
                        color="gray.500"
                        >
                            Nothing to see here....
                        </Heading> 
                    </Container>:
                    filDocs.map((doc: any) => {
                        return (
                            <BlogPreview 
                            blog={doc}
                            />
                        )
                    }):
                    <Container>
                        <Heading>No posts under this topic</Heading>
                    </Container>
                }
            </section>
        </Box>
     );
}
 
export default BlogPosts;