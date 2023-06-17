import { FunctionComponent, useState } from "react";
import { Box, Flex, Heading, Menu, MenuButton, Button, MenuList, MenuItem, Icon, Container } from "@chakra-ui/react";
import { BsBriefcase, BsWebcam } from "react-icons/bs";
import { GiTechnoHeart, GiSoccerBall } from "react-icons/gi"
import { BiCodeCurly } from "react-icons/bi"
import BlogPreview from "../components/BlogPreview";
import { useFilteredDocs } from "../hooks/useFilteredDocs";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface BlogPostsProps {
    
}

export type Topic = "General" | "Tech" | "Sport" | "Coding";
 
const BlogPosts: FunctionComponent<BlogPostsProps> = () => {
    const [topic, setTopic] = useState<Topic>("General");
    const [desc, setDesc] = useState<string>("A general overview of all the posts available");
    const filDocs = useFilteredDocs(topic, topic) as any;

    return ( 
        <Box
        >
            <Flex
            justifyContent="space-between"
            className="p-6 bg-slate-700"
            display={{ base: "grid", lg: "flex" }}
            >
                <section
                className=""
                >
                    <Heading
                    size={{ base: "lg" }}
                    >
                        <Heading>Latest in <span className="text-red-500 font-openSans">{topic}</span></Heading>
                        <p
                        className="font-Inter text-sm"
                        >{desc}</p>
                    </Heading>
                </section>
                
                <Menu
                >
                    <MenuButton as={Button}
                    size={{ base: "sm" }}
                    className="p-6"
                    >
                        Topics
                    </MenuButton>

                    <MenuList>
                        <MenuItem
                        icon={<Icon as={BsBriefcase} />}
                        onClick={() => {
                            setTopic("General");
                            setDesc("A general overview of all the posts available")
                        }}
                        >
                            General
                        </MenuItem>
                        <MenuItem
                        icon={<Icon as={GiTechnoHeart} />}
                        onClick={() => { 
                            setTopic("Tech");
                            setDesc("The latest blog posts on everything related to tech")
                    }}
                        >
                            Tech
                        </MenuItem>
                        <MenuItem
                        icon={<Icon as={GiSoccerBall} />}
                        onClick={() => {
                            setTopic("Sport")
                            setDesc("How to become nbetter in sport, why it seems like ROnaldo is deteriorating and much more")
                        }}
                        >
                            Sport
                        </MenuItem>
                        <MenuItem
                        icon={<Icon as={BiCodeCurly} />}
                        onClick={() => {
                            setTopic("Coding")
                            setDesc("Why is Java so hard ? Is Javascript worth it ? All this and more")
                        }}
                        >
                            Coding
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

            <section
            className="grid lg:flex gap-x-6 px-6"
            >
                {
                    
                }
                {
                    filDocs ?
                    filDocs.length == 0 ?
                    <Container
                    >
                        <Heading
                        size={{ base: "lg", xl: "xl" }}
                        color="gray.500"
                        >
                            Nothing to see here....<br />
                            <Link
                            to="blog/new"
                            className="flex gap-2 w-[12rem] px-6 text-sm py-2 bg-blue-300 text-black"
                            >
                            Create new post
                            <FaPlus />
                            </Link>
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