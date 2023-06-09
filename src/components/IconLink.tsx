import { GridItem, Link, Icon, Flex, Text } from "@chakra-ui/react";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { IconType } from "react-icons";
import { Link as RLink } from "react-router-dom";

interface IconLinkProps {
    icon: IconType,
    linkText: string,
    color: string | undefined,
    dest: string,
    setDisplay: Dispatch<SetStateAction<boolean>>
}
 
const IconLink: FunctionComponent<IconLinkProps> = ({icon,color,linkText,dest, setDisplay}) => {
    return ( 
        <GridItem 
        ml={{ lg: "9px" }}
        py="1rem"
        fontWeight="bold"
        onClick={() => setDisplay(false)}
        >
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