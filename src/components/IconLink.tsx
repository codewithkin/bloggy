import { GridItem, Link, Icon, Flex, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";
import { Link as RLink } from "react-router-dom";

interface IconLinkProps {
    icon: IconType,
    linkText: string,
    color: string | undefined,
    dest: string
}
 
const IconLink: FunctionComponent<IconLinkProps> = ({icon,color,linkText,dest}) => {
    return ( 
        <GridItem 
        ml={{ lg: "9px" }}
        p="1rem"
        fontWeight="bold">
            <Link as={RLink} to={dest}>
                <Flex 
                gap="5px">
                    <Icon as={icon} color={color} boxSize={8}/>
                    <Text
                    mt={{ base: "6px" }}
                    >{ window.innerWidth < 400 && linkText }</Text>
                </Flex>
            </Link>
        </GridItem>
     );
}
 
export default IconLink;