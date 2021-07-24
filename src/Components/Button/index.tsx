import React from "react";
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;    // Using TouchableOpacity and Image Components from RN
const Icon = Styled.Image``;

// Defining types of Props => decrease bugs and errors, easily noticable
interface Props {
    iconName: 'plus' | 'minus';     // iconName must be one of two options (:) => if not, IDE shows error
    onPress?: () => void;           // onPress is likely to be void function (not neccessary, ?:)
}

// Button Component has two Props (iconName, onPress)
const Button = ({ iconName, onPress }: Props) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source={
                    iconName === 'plus'
                    ? require('~/Assets/Images/add.png')        // RN automatically chooses size of images (@2x. @3x)
                    : require('~/Assets/Images/remove.png')
                }
            />
        </Container>
    );
};
export default Button;