/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import Styled from 'styled-components/native';
 import Counter from './Screens/Counter';

 const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
 `;

 const App = () => {
   return (
     <Container>
       <Counter title="This is a Counter App" initValue={91} />
     </Container>
   );
 };
 export default App;
 