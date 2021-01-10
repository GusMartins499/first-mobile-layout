import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Screen2: React.FC = () => {
  return (
    <View style={Styled.Container}>
      <Text style={Styled.TextContainer}>Screen2</Text>
    </View>
  );
};

const Styled = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312e38',
  },
  TextContainer: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F4EDE8',
  },
});

export default Screen2;
