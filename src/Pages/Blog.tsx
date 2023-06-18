import { FunctionComponent, useContext } from "react";
import { BlogContext } from "../context/BlogContext";

interface BlogProps {
    
}
 
const Blog: FunctionComponent<BlogProps> = () => {
    const {currentBlog} = useContext(BlogContext);
    console.log(currentBlog)

    return ( 
        <section>
            <h1>Hello world</h1>
        </section>
     );
}
 
export default Blog;