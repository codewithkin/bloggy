import { FunctionComponent, useState } from "react";
import { Box, Flex, Heading, Menu, MenuButton, Button, MenuList, MenuItem, Icon, Spinner } from "@chakra-ui/react";
import { BsBriefcase, BsWebcam } from "react-icons/bs";
import { GiTechnoHeart, GiSoccerBall } from "react-icons/gi"
import { BiCodeCurly } from "react-icons/bi"
import { useDocs } from "../hooks/useDocs";
import BlogPreview from "../components/BlogPreview";

interface BlogPostsProps {
    
}

type Topic = "All" | "General" | "Tech" | "Sport" | "Coding";
 
const BlogPosts: FunctionComponent<BlogPostsProps> = () => {
    const [topic, setTopic] = useState<Topic>("All");
    const docs = useDocs();
        const genDocs = docs ? docs.filter((doc: any) => doc.Topics.map((topic: any) => {
            topic == "General"
        })) : []
        console.log(genDocs)

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
                    docs ?
                    genDocs ? 
                    docs.map((doc: any) => {
                        return (
                            <BlogPreview blog={doc} />
                        )
                    }) :
                    docs.map((doc: any) => {
                        return (
                            <BlogPreview blog={doc} />
                        )
                    }) :
                    <Spinner 
                    size="xl"
                    />
                }
            </section>
        </Box>
     );
}
 
export default BlogPosts;