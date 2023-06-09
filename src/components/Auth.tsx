import { Button, Container, Heading, Icon } from "@chakra-ui/react";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { FunctionComponent } from "react";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../config/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface AuthProps {
    
}
 
const Auth: FunctionComponent<AuthProps> = () => {
    const navigate = useNavigate();


     onAuthStateChanged(auth, user => {
        if(user == null) {
            console.log("Error")
        }
        else {
            console.log("success")
            navigate("/home")
        }
    }) 

    return ( 
        <Container
        display="grid"
        alignContent="center"
        justifyContent="center"
        p="2rem"
        >
            <Heading>Login or sign up</Heading>
            <Button
            onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
            colorScheme="blue">
                Login with google
                <Icon ml="8px" as={FaGoogle} boxSize={5} />
            </Button>
        </Container>
     );
}
 
export default Auth;