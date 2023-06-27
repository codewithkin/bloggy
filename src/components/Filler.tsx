import { Container, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface FillerProps {
    
}
 
const Filler: FunctionComponent<FillerProps> = () => {
    return ( 
        <Container
        p={{ lg: "5rem" }}
        >
            <Heading
            className="font-Quicksand"
            as="h1"
            size={{ lg: "2xl" }}
            >Not logged in</Heading>
            <Text
            fontSize={{ lg: "2xl" }}
            >To start using bloggy, login <Link className="font-bold underline" to="/login">here</Link></Text>
        </Container>
     );
}
 
export default Filler;