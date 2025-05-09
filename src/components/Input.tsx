import { ComponentProps } from "react";
import { Input as GSInput, InputField} from "@gluestack-ui/themed";

type Props = ComponentProps<typeof InputField>

export function Input({ ...rest }: Props) {
    return (
        <GSInput
            bg="$gray700"
            h="$14"
            px="$4"
            borderWidth="$0"
            borderRadius="$md"
            $focus={{
                borderWidth: 1,
                borderColor: "$green500"
            }}
        >
            <InputField 
                color="$white"
                fontFamily="$body"
                placeholder="$gray300"
                {...rest}
            />
        </GSInput>

    )
}