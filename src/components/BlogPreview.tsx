import { Badge, Card, CardBody, CardHeader, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { blog } from "./RecentPosts";
import { FunctionComponent } from "react";

interface BlogPreviewProps {
    blog: blog
}
 
const BlogPreview: FunctionComponent<BlogPreviewProps> = ({blog}) => {
    return ( 
        <Card maxWidth="400px">
            <CardHeader>
                <Heading
                size={"lg"}
                >
                    {blog.Title}
                </Heading>
                <Text>By <span
                
                className="text-rose-600 font-bold font-Montserrat"
                >{blog.Author}</span></Text>
                <Divider />
            </CardHeader>

            <CardBody>
                <Flex>
                    {
                        blog.Topics.map((topic: String) => {
                            return (
                                <Badge>{topic}</Badge>
                            )
                        })
                    }
                </Flex>
            </CardBody>
        </Card>
     );
}
 
export default BlogPreview;