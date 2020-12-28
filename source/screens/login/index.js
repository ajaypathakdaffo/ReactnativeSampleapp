import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {spacingVertical, spacingHorizontal} from '../../constants/appstyle';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const loginPress = () => {
    if (username === '' || password === '') {
      setMessage('please fill all the required fields !');
    } else if (username === 'ajay' && password == 'hrhk@1234') {
      setMessage('User login successful');
    } else {
      setMessage('Incorrect Details');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusMessageContainer}>
        {message ? (
          <Text style={styles.statusMessagestyle}>{message}</Text>
        ) : null}
      </View>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => setUsername(text)}
        placeholder={'User Name'}
        value={username}
        required
      />
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => setPassword(text)}
        placeholder={'Password'}
        value={password}
        required
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={() => loginPress()}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          props.navigation.navigate('Signup');
        }}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInputStyle: {
    width: spacingHorizontal(280),
    height: spacingVertical(30),
    borderBottomWidth: 1,
    marginBottom: spacingVertical(10),
  },
  buttonStyle: {
    backgroundColor: '#90ee90',
    borderRadius: 10,
    height: spacingVertical(30),
    width: spacingHorizontal(200),
    justifyContent: 'center',
    alignItems: 'center',
    margin: spacingVertical(5),
  },
  statusMessageContainer: {
    padding: spacingHorizontal(10),
    margin: spacingHorizontal(10),
  },
  statusMessagestyle: {
    fontSize: spacingHorizontal(14),
  },
});

export default Login;
