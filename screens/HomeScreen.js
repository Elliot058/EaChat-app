import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
const HomeScreen = () => {
  const {logout, user} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black'}}>Welcome {user.uid}</Text>
      <Button title="Log Out" color="tomato" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;
