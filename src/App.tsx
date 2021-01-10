import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import StackNav from './routes/StackNavigation';

const App: React.FC = () => (
  <NavigationContainer>
    <SafeAreaView style={Styled.Container}>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={Styled.Container}>
        <StackNav />
      </View>
    </SafeAreaView>
  </NavigationContainer>
);

const Styled = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
