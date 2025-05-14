import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return (
        <HStack
            bg="$gray600" 
            pt="$16" pb="$5" px="$8" alignItems="center" 
            style={{position: "absolute", top: 0, left: 0, right: 0}}
            gap="$4">
            <UserPhoto
                source={{ uri: "https://github.com/TairineEllen.png"}}
                alt="Imagem do usuário"
                h="$16"
                w="$16"
            />
            <VStack>
                <Text color="$gray100" fontSize="$sm">
                Olá,
                </Text>
                <Heading color="$gray100" fontSize="$md">
                    Tairine Ellen
                </Heading>
            
            </VStack>
        </HStack>
    )
}