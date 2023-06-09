import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

interface RecentReadsProps {
    
}
 
const RecentReads: FunctionComponent<RecentReadsProps> = () => {
    const recents = undefined
    return ( 
        <Box mt="1rem">
           {
             recents ?
             recents :
             <section>
                 <h2 className="font-bold text-2xl">You have not read any stories yet, </h2>
                 <Link 
                 className="underline"
                 to="/blogs/all">Explore blog posts</Link>
             </section>
           }
        </Box>
     );
}
 
export default RecentReads;