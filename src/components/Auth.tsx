import { Button, Container, Heading, Icon } from "@chakra-ui/react";
import { onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../config/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
 
const Auth = () => {
    const navigate = useNavigate();

     useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user !== null) {
                navigate("/home")
            }
    
            else {
                console.log("Error")
            }
        }) 
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
            onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
            colorScheme="blue">
                Login with google
                <Icon ml="8px" as={FaGoogle} boxSize={5} />
            </Button>
        </Container>
     );
}
 
export default Auth;