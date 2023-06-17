import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collectionRef } from "../config/firebase";

export const useDocs = () => {
    const [allDocs, setDocs] = useState<any>();
    useEffect(() => {
        const fetchData = async () => {
            await getDocs(collectionRef).then((docs: any) => {
                const docsArray: Array<object> = [];
                docs.forEach((doc: any) => {
                    const data = doc.data()
                    docsArray.push(data);
                    setDocs(docsArray)
                    console.log(docsArray.length)
                });
            })
        }
        fetchData();
    }, [])

    return allDocs
}