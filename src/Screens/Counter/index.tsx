import React, { useState } from 'react';
import { ProgressViewIOSComponent } from 'react-native';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;
const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
    title?: string;
    initValue: number;
}

// Unlike Function Components, define types of State before for Class Components
interface State {
    count: number;
}

class Counter extends React.Component<Props, State> {
    // As the Component is Class, set init value of State in constructor
    constructor(props: Props) {
        // MUST call super function in order to call React.Component's constructor function
        super(props);
        console.log('constructor');

        this.state = {
            count: props.initValue,
        };
    }

    // One of Lifecycle function, called when rendering(showing) components on screen
    // uses this to use Class variables (Props, State)
    // As 'State' is immutable, use this.setState function to change 'State' value
    render() {
        const { title } = this.props;
        const { count } = this.state;
        return (
            <Container>
                {title && (
                    <TitleContainer>
                        <TitleLabel>{title}</TitleLabel>
                    </TitleContainer>
                )}
                <CountContainer>
                    <CountLabel>{count}</CountLabel>
                </CountContainer>
                <ButtonContainer>
                    <Button 
                        iconName="plus" 
                        onPress={() => this.setState({ count: count + 1})} 
                    />
                    <Button 
                        iconName="minus"
                        onPress={() => this.setState({ count: count - 1})} />
                </ButtonContainer>
            </Container>
        );
    }
};