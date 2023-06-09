import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface RecentPostsProps {
    
}
 
const RecentPosts: FunctionComponent<RecentPostsProps> = () => {
    const posts = undefined;
    return ( 
        <Box className="mt-4">
            <h2
             className="font-bold text-2xl"
            >Recent blog posts</h2>
            {
                posts ?
                posts:
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