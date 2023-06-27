import { DocumentData, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../config/firebase";
import { Badge, Box, Container, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { blog } from "../components/RecentPosts";
import { TwitterShareButton, LinkedinShareButton, FacebookShareButton, WhatsappShareButton, LinkedinIcon, FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share"

const Blog = () => {
    const pathVars = useParams();
    const id = pathVars.id || "3030";
    const ref = doc(db, "blogs", id);
    const [blog, setBlog] = useState<DocumentData | blog>();
    const [isPending, setPending] = useState<boolean>(true);

    useEffect(() => {
        const getDocuments = async () => {
            await getDoc(ref).then((snapshot) => {
                const data = snapshot.data();
                setBlog(data);
                setPending(false);
            }).catch((err) => console.log(err))
        }

        getDocuments();
    })

     
    return isPending ?
        <Container
        w="100vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
            <Heading
            mr="6px"
            >Fetching blog...</Heading>
            <Spinner 
            thickness="3px"
            size="xl"
            emptyColor="gray.200"
            />
        </Container> :
        (
            <Box>
                <Image 
                src={blog?.BlogImageUrl} 
                w="100vw"
                h="-webkit-fit-content"
                />
    
                <Container
                maxW="container.sm"
                >
    
                    <section className="content lg:p-4">
                            <Heading
                            as="h1"
                            size={{ lg: "3xl" }}
                            >{blog?.Title}</Heading>
                            <Text
                            >By <span className="text-blue-700 font-bold">{blog?.Poster.name}</span></Text>
                        
    
                        <section className="topics gap-4 flex">
                            {
                                blog?.Topics.map((topic: string) => {
                                    return (
                                        <Badge 
                                        colorScheme="blue"
                                        variant="solid">{topic}</Badge>
                                    )
                                })
                            }
                        </section>
    
                        <section>
                            <Text
                            className="font-Montserrat"
                            fontSize={{ lg: "xl" }}
                            >{blog?.Description}</Text>
                        </section>
                    </section>
               

                <Box as="footer">
                    <Heading>Share this post</Heading>
                    <Box>
                        <FacebookShareButton 
                        quote={`I am reading this awesome Blog post on Bloggy. It's called ${blog?.Title} by ${blog?.Poster.name}`}
                        url={`https://bloggy-preview/blog/${id}.netify.app`}>
                            <FacebookIcon />
                        </FacebookShareButton>

                        <TwitterShareButton
                        title={`I am reading this awesome Blog post on Bloggy. It's called ${blog?.Title} by ${blog?.Poster.name}`}
                        url={`https://bloggy-preview/blog/${id}.netify.app`}
                        >
                            <TwitterIcon />
                        </TwitterShareButton>

                        <LinkedinShareButton
                        url={`https://bloggy-preview/blog/${id}.netify.app`}
                        title={`I am reading this awesome Blog post on Bloggy. It's called ${blog?.Title} by ${blog?.Poster.name}`}
                        summary="Shared from bloggy"
                        >
                            <LinkedinIcon />
                        </LinkedinShareButton>

                        <WhatsappShareButton
                        url={`https://bloggy-preview/blog/${id}.netify.app`}
                        title={`I am reading this awesome Blog post on Bloggy. It's called ${blog?.Title} by ${blog?.Poster.name}`}
                        >
                            <WhatsappIcon />
                        </WhatsappShareButton>
                    </Box>
                    
                </Box>
                </Container>
            </Box>)
    
}

export default  Blog