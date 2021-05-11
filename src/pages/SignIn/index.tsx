import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView, ScrollView, Platform, View} from 'react-native';
import {Container, Button, ButtonText, TextContainer} from './styles';

import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <View>
              <TextContainer>Faça seu login</TextContainer>
            </View>
            <Input name="email" placeholder="E-mail" />
            <Input name="senha" placeholder="Senha" secureTextEntry />
            <Button onPress={() => navigation.navigate('DrawerNavigation')}>
              <ButtonText>Entrar</ButtonText>
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
