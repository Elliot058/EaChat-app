import {Item, Input, Label, Icon} from 'native-base';
import React, {useState, useContext} from 'react';
import * as Animatable from 'react-native-animatable';
import {images, COLORS, SIZES, FONTS} from '../constants';
import {AuthContext} from '../navigation/AuthProvider';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DarkTheme} from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, googleLogin} = useContext(AuthContext);

  const [data, setData] = React.useState({
    email: '',
    password: '',
    secureTextEntry: true,
  });

  const textInputChange = val => {
    setData({
      ...data,
      email: val,
    });
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          height: 270,
          width: '100%',
          alignItems: 'center',
        }}>
        <Animatable.Image
          animation="fadeInRight"
          source={images.loginbg}
          style={{
            height: '100%',
            width: '100%',
          }}
          resizeMode="repeat"></Animatable.Image>
      </View>
      <Animatable.View style={styles.bottomView} animation="flipInX">
        <View style={{flex: 1, padding: 20}}>
          <Text style={{color: '#4632A1', fontSize: 30}}>Welcome Back</Text>
          <Text style={{color: 'black'}}>
            Don't have an account?
            <Text
              style={{color: 'red', fontStyle: 'italic'}}
              onPress={() => navigation.navigate('signup')}>
              {' '}
              Register Now
            </Text>
          </Text>
          <View style={{marginVertical: 20}}>
            <Item floatingLabel style={{borderColor: '#4632A1'}}>
              <Icon
                active
                name="mail"
                style={{color: '#4632A1', fontSize: 19}}
              />
              <Label> Email</Label>
              <Input
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
              />
            </Item>
            <Item floatingLabel style={{borderColor: '#4632A1', marginTop: 17}}>
              <Icon
                active
                name="key"
                type="FontAwesome"
                style={{color: '#4632A1', padding: 0, fontSize: 19}}
              />

              <Label>Password</Label>
              <Input
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={val => handlePasswordChange(val)}
              />
              {data.secureTextEntry ? (
                <Icon
                  name="eye-off"
                  style={{color: '#4632A1'}}
                  onPress={updateSecureTextEntry}
                />
              ) : (
                <Icon
                  name="eye"
                  style={{color: '#4632A1'}}
                  onPress={updateSecureTextEntry}
                />
              )}
            </Item>
          </View>
          <TouchableOpacity style={styles.forgotPassView}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  marginVertical: 15,
                  color: 'black',
                  alignSelf: 'flex-end',
                }}>
                Forgot Password
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.brandButton}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => login(data.email, data.password)}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.brandButton1}>
            <TouchableOpacity
              style={styles.loginButton1}
              onPress={() => googleLogin()}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                SignIn With Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  brandText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 40,
    bottom: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  inputField: {
    fontSize: 16,
  },
  forgotPassView: {
    height: 50,
    flexDirection: 'row',
  },
  brandButton: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 80,
  },
  loginButton: {
    width: Dimensions.get('window').width / 1.3,
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4632A1',
    borderRadius: 30,
  },
  brandButton1: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 80,
  },
  loginButton1: {
    width: Dimensions.get('window').width / 1.3,
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    borderRadius: 30,
  },
});
