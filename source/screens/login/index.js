import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from '../login/loginStyle'


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

export default Login;
