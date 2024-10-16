import { styled } from 'nativewind';
import { ScrollView, Text, Image, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants"
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledSafeArea = styled(SafeAreaView)

export default function Index() {
  return (
    <StyledSafeArea className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <StyledView className='w-full items-center h-full px-4'>
          <StyledImage
            source={images.logo}
            resizeMode='contain'
            className='w-[130px] h-[84px]'
          />
          <StyledImage
            source={images.cards}
            className='max-w-[380px] w-full h-[300px] my-5'
            resizeMode='contain'
          />
          <StyledView className='relative mt-5'>
            <StyledText className='text-3xl text-white font-bold text-center'>Discover Endless Possibilities With {' '}
              <StyledText className='text-secondary-200'>Aora</StyledText>
            </StyledText>
            <StyledImage
              source={images.cards}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
            <StyledText className='text-lg font-plight text-gray-100 mt-7 text-center'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</StyledText>
            <CustomButton
              title='Continue With Email'
              handlePress={() => { router.push('/sign-in') }}
              containerStyles='mt-7'
            />
          </StyledView>
        </StyledView>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </StyledSafeArea>
  );
}
