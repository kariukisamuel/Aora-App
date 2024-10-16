import { styled } from 'nativewind';
import { Text, View } from "react-native";

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Index() {
  return (
    <StyledView className="flex flex-1 items-center justify-center bg-white">
      <StyledText className="text-5xl">Index</StyledText>
    </StyledView>
  );
}
