import { styled } from 'nativewind';
import { ScrollView, Text, View } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledSafeArea = styled(SafeAreaView)

export default function Index() {
  return (
   <StyledSafeArea className='bg-primary h-full'>
       <ScrollView contentContainerStyle={{height:'100%'}}></ScrollView>
   </StyledSafeArea>
  );
}
