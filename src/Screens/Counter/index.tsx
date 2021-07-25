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
    error: Boolean;
}

class Counter extends React.Component<Props, State> {
    // As the Component is Class, set init value of State in constructor
    // If State is not used, constructor might not be necessary
    constructor(props: Props) {
        // MUST call super function in order to call React.Component's constructor function
        super(props);
        console.log('constructor');

        this.state = {
            count: props.initValue,
            error: false,
        };
    }

    // One of Lifecycle function, called when rendering(showing) components on screen
    // uses this to use Class variables (Props, State)
    // As 'State' is immutable, use this.setState function to change 'State' value
    // But, if render function changes 'state' (setState) DIRECTLY, could be trapped in INFINITE LOOP
    // Here, render function calls button "touch event", which prevents the problem above
    render() {
        console.log('render');
        const { title } = this.props;
        const { count, error } = this.state;
        return (
            <Container>
                {!error && (
                    <>
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
                                onPress={() => this.setState({ count: count - 1})} 
                            />
                        </ButtonContainer>
                    </>
                )}
            </Container>
        );
    }

    // used when synchronizing(동기화) Props, State from Parent Component
    // uses this function when trying to set value of State from Parent's Props or depending to Parent's Props
    // returns value wanted for 'State', if state for synchronization unavailable, returns "null"
    // called when the component is created (like constructor), also when Props are changed
    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        console.log('getDerivedStateFromProps');
        
        return null;
    }

    // called when Class Component shows up on screen for the first time
    // useful for getting datas via 'ajax' or interlocking(연동) with other js libraries
    // (as it is only called once for the first exposure)
    // could be used with this.setState (loop impossible) or set datas from 'ajax'
    componentDidMount() {
        console.log('componentDidMount');
    }

    // after render function is called, this function is called RIGHT AFTER
    // return value is used for third parameter, "snapshot"
    // Warning could happen if NO RETURN written or componentDidUpdate not implemented
    getSnapshotBeforeUpdate(prevProps: Props, prevState: State){
        console.log('getSnapshotBeforeUpdate');

        return {
            testDate: true,
        };
    }

    // Unlike componentDidMount function, called whenever the screen is updated (after render function) (not for first time)
    // Not used frequently, but useful to lock scroll manually with getSnapshotBeforeUpdate function
    // Like render(), this.getState function can cause infinite loop
    componentDidUpdate(prevProps: Props, prevState: State, snapshot: null) {
        console.log('componentDidUpdate');
    }

    // Class Components are re-rendered if Props | State is updated
    // Can stop re-rendering by returning false
    // Could use like (" return nextProps.id !=== this.props.id; ") for handling re-rendering
    // Used for OPTIMIZING screen rendering (re-rendering => heavy cost)
    shouldComponentUpdate(nextProps: Props, nextState: State) {
        console.log('shouldComponentUpdate');
        return true;
    }
    
    // Called when the Component is completely vanished from screen
    // Useful when terminating(해지) js library (which is called by componentDidMount function)
    // or turning off Timer (setTimeout, setInterval, etc) using clearTimeout, clearInterval, etc
    // As it is called after Component is gone, changing 'State' value (this.setState) can cause Warning of Memory Leaks(메모리 누수)
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    // If Error occurs during component's rendering, app crashes abnormally
    // componentDidCatch can operate as try-catch for handling exceptions
    // Can handle Child Component to not show up for preventing abnormal termination
    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({
            error: true,
        });
    }
};

export default Counter;