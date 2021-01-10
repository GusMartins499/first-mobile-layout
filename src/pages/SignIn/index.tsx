import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={Styled.Container}>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigation')}>
        <Text style={Styled.TextContainer}>Sign in (touch me)</Text>
      </TouchableOpacity>
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

export default SignIn;
