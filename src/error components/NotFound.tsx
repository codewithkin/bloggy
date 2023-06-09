import { Heading, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useRouteError } from "react-router-dom";

interface NotFoundProps {
    
}
 
const NotFound: FunctionComponent<NotFoundProps> = () => {
    const error = useRouteError() as any;

    return ( 
        <>
            <Heading>{error.statusText }</Heading>
            <Text>{error.message}</Text>
        </>
     );
}
 
export default NotFound;