import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const formField = ['firstname', 'lastname', 'email', 'password'];

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
      {formField.map((field) => {
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => setUsername(text)}
          placeholder={field}
          value={field}
          required
        />;
      })}

      <TouchableOpacity style={styles.buttonStyle} onPress={() => loginPress()}>
        <Text>Sign up</Text>
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
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: '#90ee90',
    borderRadius: 10,
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusMessageContainer: {
    padding: 10,
    margin: 10,
  },
  statusMessagestyle: {
    fontSize: 14,
  },
});

export default Signup;
