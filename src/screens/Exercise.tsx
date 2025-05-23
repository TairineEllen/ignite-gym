import { Heading, HStack, Icon, Text, VStack, Image, Box } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native"
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg"
import { Button } from "@components/Button";

export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    function handleGoBack() {
        navigation.goBack()
    }
    return (
        <VStack flex={1}>
            <VStack px="$8" bg="$gray600" pt="$12" >
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={ArrowLeft} color="$green500" size="xl"/>

                </TouchableOpacity>
                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    mt="$4"
                    mb="$8"                    
                >
                    <Heading
                        color="$gray100"
                        fontFamily="$heading"
                        fontSize="$lg"
                        flexShrink={1}
                        
                    >Puxada frontal</Heading>
                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="$gray200" ml="$1" textTransform="capitalize">Costas</Text>
                    </HStack>
                </HStack>
            </VStack>

           <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32}}>
                 <VStack p="$8" >
                 <Image source={{
                    uri: "https://previews.123rf.com/images/sabelskaya/sabelskaya1706/sabelskaya170600691/80715863-jovem-correndo-na-esteira-treinando-na-academia-fazendo-exerc%C3%ADcios-esportivos-ilustra%C3%A7%C3%A3o-vetorial-de.jpg"
                }}
                alt="Imagem do exercício"
                mb="$3"
                w="$full"
                h="$80"
                rounded="$lg"
                resizeMode="cover"
                />

                <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
                    <HStack alignItems="center" justifyContent="space-around" mb="$6" mt="$5">
                        <HStack>
                            <SeriesSvg />
                            <Text color="$gray200" ml="$2">3 séries</Text>
                        </HStack>

                        <HStack>
                            <RepetitionsSvg />
                            <Text color="$gray200" ml="$2">12 repetições</Text>
                        </HStack>
                    </HStack>

                    <Button title="Marcar como realizado"/>

                </Box>
            </VStack>
           </ScrollView>

        </VStack>
    )
}
