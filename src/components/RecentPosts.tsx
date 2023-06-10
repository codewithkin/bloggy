import { Box } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collectionRef } from "../config/firebase";
import BlogPreview from "./BlogPreview";

export interface blog {
    Title: string,
    Topics: Array<String>,
    Author: string,
    description: string,
    createdAT: Date,
    comments: Array<object>,
    id: string
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
            blogs.map(blog => {
                console.log(blog.Topic)
            })
        }
        fetchData();
    }, [])


    return ( 
        <Box className="mt-4">
            <h2
             className="font-bold text-2xl"
            >Recent blog posts</h2>
            {
                docs ?
                docs.map((doc: blog) => {
                    return(
                        <BlogPreview
                        key={doc.id}
                         blog={doc} />
                )})
                
                :
                <section>
                    <p
                    className="text-gray-400 font-bold text-xl"
                    >No recent activity</p>
                    </section>
            }
        </Box>
     );
}
 
export default RecentPosts;