import { VStack, Image, Center, Text, Heading, ScrollView, set, onChange, useToast } from "@gluestack-ui/themed";
import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";
import { ToastMessage } from "@components/ToastMessage";

type FormData = {
    email: string;
    password: string;
}

export function SignIn() {
    const { signIn } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const { control, handleSubmit, formState: { errors }} = useForm<FormData>();

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const toast = useToast();

    function handleNewAccount() {
        navigation.navigate("signUp")
    }

    async function handleSignIn({ email, password}: FormData) {
        try {
            setIsLoading(true);
            await signIn(email, password);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : "Não foi possível acessar, tente novamente mais tarde.";

            setIsLoading(false);

             toast.show({
                placement: "top",
                render: ({id}) => (
                    <ToastMessage
                        id={id}
                        action="error"
                        title={title}
                        onClose={() => toast.close(id)}
                    />
                )
            })            
        }   
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
               <VStack flex={1}>
            <Image
                w="$full"
                h={ 624}
                defaultSource={BackgroundImg}
                source={BackgroundImg}
                alt="Pessoas treinando"
                position="absolute"
            />

            <VStack flex={1} px="$10" pb="$16">

            <Center my="$24">
                <Logo />
                <Text color="$gray100" fontSize="$sm">
                    Treine sua mente e seu corpo.
                </Text>
            </Center>

            <Center gap="$2">
                <Heading color="$gray100">Acesse sua conta</Heading>

                <Controller 
                    control={control}
                    name="email"
                    rules={{ required: "Informe o email"}}
                    render={({ field: { onChange } }) => (
                         <Input 
                            placeholder="Email" 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                            onChangeText={onChange}
                            errorMessage={errors.email?.message}
                        />

                    )}
                />

                <Controller 
                    control={control}
                    name="password"
                    rules={{ required: "Informe a senha"}}
                    render={({ field: { onChange } }) => (
                         <Input 
                            placeholder="Senha" 
                            secureTextEntry
                            onChangeText={onChange}
                            errorMessage={errors.password?.message}
                        />

                    )}
                />
                <Button
                    title="Acessar"
                    onPress={handleSubmit(handleSignIn)}
                    isLoading={isLoading}
                />

            </Center>

            <Center flex={1} justifyContent="flex-end" mt="$4">
                <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$sm">
                    Ainda não tem acesso?
                </Text>
                <Button title="Criar conta" variant="outline" onPress={handleNewAccount}/>
            </Center>
            </VStack>



            

        </VStack>
        </ScrollView>
     
    )
}