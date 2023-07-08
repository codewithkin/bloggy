
import { Box, Heading, Input, FormErrorMessage, FormControl, Textarea, Button, Icon, Text, Flex, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { FaPenFancy, FaTimes } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai"
import { Form, useNavigate } from "react-router-dom";
import { auth, collectionRef } from "../config/firebase";
import { motion } from "framer-motion";
 
type heading = string;
type content = string;
type topics = Array<string>;
type ImageUrl = string;

interface NewBlog {
    heading: heading,
    content: content,
    topics: topics,
    ImageUrl: ImageUrl;
}

const NewBlog = () => {
    const [heading, setHeading] = useState<heading>("");
    const [content, setContent] = useState<content>("");
    const topics = ["General", "Sport", "Coding", "Tech"];
    const [selectedTopics, setSelectedTopics] = useState<topics>();
    const [imageUrl, setImageUrl] = useState<URL>();
    const [error, setError] = useState<string>("");

    const navigate  = useNavigate();

    const handleCheckBoxChange = (selected: topics) => {
        setSelectedTopics(selected);
    }

    const handleSubmit = async () => {
        const userinfo = {
            email: auth.currentUser?.email,
            name: auth.currentUser?.displayName,
            photoUrl: auth.currentUser?.photoURL
        }
        console.log(userinfo)

        if(content.length > 400 || content.length < 5) {
            setError("An error has occured")
        }
        else {
            const data = {
                Poster: userinfo,
                Bookmarked: false,
                Title: heading,
                Description: content,
                Topics: selectedTopics,
                BlogImageUrl: imageUrl?.toString(),
            }
            const doc = await addDoc(collectionRef, data);
            console.log(doc);
        }
    }

    return ( 
        <Box
        p="1rem"
        >
            <Heading
            className="font-OpenSans text-center"
            >Write a new blog post</Heading>

            <Form 
            onSubmit={handleSubmit}
            className="py-[1rem] grid gap-4"
            >
                <FormControl
                >
                    <Input 
                        placeholder="Blog Title"
                        isRequired={true}
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                    />
                </FormControl>

                <FormControl
                >
                    <Textarea 
                        placeholder="Blog Content"  
                        isRequired={true}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <FormErrorMessage>
                        <p className="text-red-600 font-bold font-Inter">{error}</p>
                    </FormErrorMessage>

                    <FormControl
                    className=" w-1/2 mt-4 flex gap-2"
                    >
                         <motion.div
                        whileHover={{ color: "blue" }}
                        className="self-center"
                        >
                            <Icon as={AiOutlineLink} boxSize={6} />
                        </motion.div>
                        <Input 
                        isRequired={true}
                        w="50%"
                        placeholder="Image URL"
                        value={imageUrl?.toString()}
                        onChange={(e) => setImageUrl(new URL(e.target.value))}
                        className="self-center"
                        />
                    </FormControl>

                    <FormControl
                    className="py-2"
                    >
                        <Text>Topics:</Text>
                        <CheckboxGroup
                        colorScheme="green"
                        value={selectedTopics}
                        onChange={handleCheckBoxChange}
                        >
                            <Flex
                            gap="0.3rem"
                            >
                                {topics.map((topic) => (
                                    <Checkbox key={topic} value={topic}>
                                        {topic}
                                    </Checkbox>
                                ))}
                            </Flex>
                        </CheckboxGroup>
                    </FormControl>
                </FormControl>

                <Flex
                gap="0.2rem"
                >
                    <Button
                    type="button"
                    onClick={handleSubmit}
                    colorScheme="green"
                    className="flex gap-2"
                    >
                        <Text>Submit Post</Text>
                        <Icon 
                        as={FaPenFancy}
                        />
                    </Button>
                    <Button
                    onClick={() => navigate("/home")}
                    colorScheme="red"
                    className="flex gap-2"
                    >
                        <Text>Discard Post</Text>
                        <Icon 
                        as={FaTimes}
                        />
                    </Button>
                </Flex>
            </Form>
        </Box>
     );
}
 
export default NewBlog;