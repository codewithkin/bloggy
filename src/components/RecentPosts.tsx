import { Box, Flex, Spinner } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collectionRef } from "../config/firebase";
import BlogPreview from "./BlogPreview";

type poster = {
    name: string,
    email: string,
    photoUrl: string
}

export interface blog {
    Title: string,
    Topics: Array<String>,
    Poster: poster,
    Description: string,
    createdAT: Date,
    Comments: Array<object>,
    id: string,
    Bookmarked: boolean,
    BlogImageUrl: string
}

interface RecentPostsProps {
    
}
 
const RecentPosts: FunctionComponent<RecentPostsProps> = () => {
    const [docs, setDocs] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            const snap = await getDocs(collectionRef);
            const blogs = snap.docs.map(doc => doc.data());
            setDocs(blogs)
        }
        fetchData();
    }, [])


    return ( 
        <Box className="mt-4">
            <h2
             className="font-bold text-2xl"
            >Recent blog posts</h2>
            <Flex
            className="grid md:flex"
            gap="2rem"
            px="2rem"
            >
                {
                    docs ?
                    docs.map((doc: blog) => {
                        return(
                            <BlogPreview
                            key={doc.id}
                            blog={doc} />
                    )})
                    
                    :
                        <Spinner 
                        p={{ base: "0.8rem", lg: "2rem" }}
                        size="xl"
                        emptyColor="blue.300"
                        />
                }
            </Flex>
        </Box>
     );
}
 
export default RecentPosts;