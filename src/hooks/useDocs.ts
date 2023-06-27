import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collectionRef } from "../config/firebase";
import { blog } from "../components/RecentPosts";

export type docStructure = {
    data: blog,
    id: string
}
export type docsCollection = Array<docStructure> | undefined

export default function useDocs () {
    const [allDocs, setDocs] = useState<docsCollection>();

    useEffect(() => {
        const fetchData = async () => {
            await getDocs(collectionRef).then((docs: any) => {
                const docsArray: any = [];
                docs.forEach((doc: any) => {
                    const data = doc.data();
                    const id = doc.id;
                    docsArray.push({data, id});
                    setDocs(docsArray)
                });
            })
        }
        fetchData();
    }, [])

    return allDocs
}