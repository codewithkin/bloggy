import { createContext, useState } from "react";
import { blog } from "../components/RecentPosts";

export const BlogContext = createContext<any>("k");

export const BlogContextProvider = (props: any) => {
    const [currentBlog, setBlog] = useState<any>();

    const updateBlog = (theBlog: blog) => {
        setBlog(theBlog);
    }

    return (
        <BlogContext.Provider value={{ currentBlog, updateBlog }}>
            {props.children}
        </BlogContext.Provider>
    )
}