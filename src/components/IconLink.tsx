import { GridItem, Link, Icon, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";
import { Link as RLink } from "react-router-dom";

interface IconLinkProps {
    icon: IconType,
    linkText: string,
    color: string | undefined
}
 
const IconLink: FunctionComponent<IconLinkProps> = ({icon,color,linkText}) => {
    return ( 
        <GridItem 
        ml={{ lg: "13px" }}
        p="1rem"
        fontWeight="bold">
            <Link as={RLink} to="/account">
                <Flex gap="20px">
                    <Icon as={icon} color={color} boxSize={8}/>
                    <p>{ window.innerWidth < 400 && linkText }</p>
                </Flex>
            </Link>
        </GridItem>
     );
}
 
export default IconLink;