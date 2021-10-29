import {Item, Input, Label, Icon} from 'native-base';

import * as Animatable from 'react-native-animatable';
import {images, COLORS, SIZES, FONTS} from '../constants';
import {AuthContext} from '../navigation/AuthProvider';

import React, {useState, useContext} from 'react';
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
const SignupScreen = () => {
  const [data, setData] = useState({
    secureTextEntry: true,
  });
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {register} = useContext(AuthContext);

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animatable.Image
        animation="flipInY"
        source={images.signupbg}
        resizeMode="center"
        style={{
          flex: 1,
          height: 300,
          opacity: 0.9,
          width: '100%',
        }}></Animatable.Image>
      <Animatable.View style={styles.bottomView} animation="lightSpeedIn">
        <View style={{padding: 40}}>
          <View style={{marginVertical: 20}}>
            <Item floatingLabel style={{borderColor: '#2BAE68', marginTop: 17}}>
              <Icon
                active
                name="user-alt"
                type="FontAwesome5"
                style={{color: '#2BAE68', padding: 0, fontSize: 16}}
              />

              <Label>Name</Label>
              <Input
                keyboardType="name-phone-pad"
                style={styles.inputStyle}
                onChangeText={val => setName(val)}
              />
            </Item>
            <Item floatingLabel style={{borderColor: '#2BAE68', marginTop: 17}}>
              <Icon
                active
                name="mail"
                style={{color: '#2BAE68', padding: 0, fontSize: 19}}
              />
              <Label> Email</Label>
              <Input
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.inputStyle}
                onChangeText={maildetails => setEmail(maildetails)}
              />
            </Item>
            <Item floatingLabel style={{borderColor: '#2BAE68', marginTop: 17}}>
              <Icon
                active
                name="key"
                type="FontAwesome"
                style={{color: '#2BAE68', padding: 0, fontSize: 19}}
              />

              <Label>Password</Label>
              <Input
                style={styles.inputStyle}
                secureTextEntry={data.secureTextEntry ? true : false}
                onChangeText={pass => setPassword(pass)}
              />
              {data.secureTextEntry ? (
                <Icon
                  name="eye-off"
                  style={{color: '#2BAE68'}}
                  onPress={updateSecureTextEntry}
                />
              ) : (
                <Icon
                  name="eye"
                  style={{color: '#2BAE68'}}
                  onPress={updateSecureTextEntry}
                />
              )}
            </Item>
          </View>
          <View style={styles.brandButton}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => register(email, password)}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomView: {
    backgroundColor: '#fff',
    bottom: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  brandButton: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 80,
  },
  loginButton: {
    width: Dimensions.get('window').width / 1.3,
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2BAE68',
    borderRadius: 30,
  },
  inputStyle: {
    color: 'black',
  },
});
