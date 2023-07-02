import { Box, Flex, Spinner } from "@chakra-ui/react";
import BlogPreview from "./BlogPreview";
import useDocs from "../hooks/useDocs";

type poster = {
    name: string,
    email: string,
    photoUrl: string
}

export type blog = {
    Title: string,
    Topics: Array<string>,
    Poster: poster,
    Description: string,
    createdAT: Date,
    Comments: Array<object>,
    id: string,
    Bookmarked: boolean,
    BlogImageUrl: string
}
 
const RecentPosts = () => {
    const docs = useDocs();

    return ( 
        <Box className="mt-4 px-6">
            <h2
            className="font-bold text-4xl md:text-4xl mb-4 md:mb-0"
            >Recent blog posts</h2>
            <Flex
            className="grid md:flex flex-wrap"
            gap="2rem"
            >
                {
                    docs ?
                    docs.map((doc: any) => {
                        return(
                            <BlogPreview
                            key={Math.random()}
                            blog={doc} />
                    )})
                    
                    :
                        <Spinner 
                        p={{ base: "0.8rem", lg: "2rem" }}
                        size="xl"
                        />
                }
            </Flex>
        </Box>
     );
}
 
export default RecentPosts;