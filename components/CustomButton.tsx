import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { GestureResponderEvent } from 'react-native';

const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledText = styled(Text)

interface ButtonProps{
    title: string;
    handlePress :(event: GestureResponderEvent) => void;
    containerStyles ?: string;
    textStyles?:string;
    isLoading?: boolean;
}

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }:ButtonProps) => {
    return (
        <StyledTouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <StyledText className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</StyledText >
        </StyledTouchableOpacity>
    )
}

export default CustomButton