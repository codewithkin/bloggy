import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface RecentReadsProps {
    
}
 
const RecentReads: FunctionComponent<RecentReadsProps> = () => {
    const recents = undefined
    return ( 
        recents ?
        recents :
        <section>
            <h2>
                You haven not read any stories yet, <Link to="/blogs/all">Explore blog posts</Link>
            </h2>
        </section>
     );
}
 
export default RecentReads;