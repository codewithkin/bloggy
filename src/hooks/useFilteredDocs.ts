import { getDocs, query, where } from "firebase/firestore";
import { collectionRef } from "../config/firebase";
import { useEffect, useState } from "react";

export function useFilteredDocs(topic: string){
    const [docs, setDocs] = useState<any>();
    useEffect(() => {
        const getFilteredDocs = async (topic: string) => {
            const Query = query(collectionRef, where("Topics", "array-contains", topic));
            const snapshot = await getDocs(Query)
            const posts = snapshot.docs.map((doc: any) => ({id: doc.id, ...doc.data()}))
            setDocs(posts)
        }
        getFilteredDocs(topic)
        console.log(topic)
    }, [topic])
    return docs
}