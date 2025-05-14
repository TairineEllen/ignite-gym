import { Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native"

type Props = TouchableOpacityProps

export function ExerciseCard({... rest}: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack 
                bg="$gray500"
                alignItems="center"
                p="$2"
                pr="$4"
                rounded="$md"
                mb="$3"
            >
                <Image source={{
                    uri: "https://previews.123rf.com/images/sabelskaya/sabelskaya1706/sabelskaya170600691/80715863-jovem-correndo-na-esteira-treinando-na-academia-fazendo-exerc%C3%ADcios-esportivos-ilustra%C3%A7%C3%A3o-vetorial-de.jpg"
                }}
                alt="Imagem do exercício"
                w="$16"
                h="$16"
                rounded="$md"
                mr="$4"
                resizeMode="cover"
                />

            <VStack flex={1}>
                <Heading
                    fontSize="$lg"
                    color="$white"
                    fontFamily="$heading"
                    
                >Puxada frontal</Heading>
                <Text
                    fontSize="$sm"
                    color="$gray200"
                    mt="$1"
                    numberOfLines={2}
                    >3 séries x 12 repetições</Text>

            </VStack>

            <Icon as={ChevronRight} color="$gray300"/>
            </HStack>

        </TouchableOpacity>
    )
}