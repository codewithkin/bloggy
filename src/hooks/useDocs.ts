import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collectionRef } from "../config/firebase";

export const useDocs = () => {
    const [docs, setDocs] = useState<any>();
    useEffect(() => {
        const fetchData = async () => {
            const snap = await getDocs(collectionRef)
            const blogs = snap.docs.map(doc => doc.data());
            setDocs(blogs);
            
        }
        fetchData();
    }, [])

    return docs
}