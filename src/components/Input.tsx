import { ComponentProps } from "react";
import { FormControl, FormControlError, FormControlErrorText, Input as GSInput, InputField} from "@gluestack-ui/themed";

type Props = ComponentProps<typeof InputField> & {
    isReadOnly?: boolean;
    errorMessage?: string | null;
    isInvalid?: boolean;
}

export function Input({ isReadOnly = false, errorMessage = null, isInvalid = false, ...rest }: Props) {
    const invalid = !!errorMessage || isInvalid;

    return (
      <FormControl isInvalid={invalid} w= "$full" mb="$4">
          <GSInput            
            h="$14"            
            borderWidth="$0"
            borderRadius="$md"
            $focus={{
                borderWidth: 1,
                borderColor: invalid ? "$red500" : "$green500"
            }}
            isReadOnly={isReadOnly}
            opacity={isReadOnly ? 0.5 : 1}
            isInvalid={isInvalid}
            $invalid={{
                 borderWidth: 1,
                borderColor: "$red500"
            }}

        >
            <InputField 
                color="$white"
                fontFamily="$body"
                placeholder="$gray300"
                bg="$gray700"
                px="$4"
                {...rest}
            />
        </GSInput>

       <FormControlError>
         <FormControlErrorText color="$red500">
            {errorMessage}

        </FormControlErrorText>
       </FormControlError>

      </FormControl>
    )
}