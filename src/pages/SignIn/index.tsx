import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Container, TextContainer} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigation')}>
        <TextContainer>Sign in (touch me)</TextContainer>
      </TouchableOpacity>
    </Container>
  );
};

export default SignIn;
