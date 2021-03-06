import React, {useState, useEffect} from 'react';
import {View, Text, Linking} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../login/loginStyle';
import {connect} from 'react-redux';
import {increment} from '../../redux/actions';

const Login = (props) => {
  const {navigation} = props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const loginPress = () => {
    navigation.openDrawer();
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
      <View>
        <Text>{props.counter}</Text>
      </View>
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
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          props.navigation.navigate('MyList');
        }}>
        <Text>scroll</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          props.increment(props.counter);
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {counter} = state;
  return {
    counter,
  };
};

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
