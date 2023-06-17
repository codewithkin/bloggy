import { useEffect, useState } from "react";
import { useDocs } from "./useDocs";
import { Topic } from "../Pages/BlogPosts";

export const useFilteredDocs = (dep: Topic, specTopic: Topic) => {
    const docs = useDocs();
    const [all, setAll] = useState();
    useEffect(() => {
        const filteredDocs = docs ? docs.filter((doc: any) => doc.Topics.includes(specTopic) ) : undefined;
        setAll(filteredDocs);
        console.log(
            `We got these docs: ${all} from this topic: ${specTopic}`
        );
        console.log(docs)
    }, [dep])

    return all
}