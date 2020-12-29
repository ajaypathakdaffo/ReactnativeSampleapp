import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../signup/signupstyle'

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setFormValidity] = useState(true);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  );

  const formField = ['firstname', 'lastname', 'email', 'password'];

  getValue = (fieldName) => {
    if (fieldName === 'firstname') {
      return firstname;
    } else if (fieldName === 'lastname') {
      return lastname;
    } else if (fieldName === 'email') {
      return email;
    } else if (fieldName === 'password') {
      return password;
    } else if (fieldName === 'firstnameError') {
      return firstnameError;
    } else if (fieldName === 'lastnameError') {
      return lastnameError;
    } else if (fieldName === 'emailError') {
      return emailError;
    } else if (fieldName === 'passwordError') {
      return passwordError;
    }
  };

  validateForm = () => {
    if (
      firstname.length == 0 ||
      lastname.length == 0 ||
      password.length == 0 ||
      email.length == 0
    ) {
      return setFormValidity(true);
    } else if (
      firstnameError.length > 0 ||
      lastnameError.length > 0 ||
      passwordError.length > 0 ||
      emailError.length > 0
    ) {
      return setFormValidity(true);
    } else {
      return setFormValidity(false);
    }
  };
  setValue = (text, fieldName) => {
    switch (fieldName) {
      case 'email':
        setEmail(text);
        validEmailRegex.test(text)
          ? setEmailError('')
          : setEmailError('Email is not valid!');
        break;
      case 'password':
        setPassword(text);
        text.length < 8
          ? setPasswordError('Password must be 8 characters long!')
          : setPasswordError('');
        break;
      case 'firstname':
        setFirstname(text);
        text.length < 2
          ? setFirstnameError(
              'first name should be greater then 2 characters long!',
            )
          : setFirstnameError('');
        break;
      case 'lastname':
        setLastname(text);
        text.length < 2
          ? setLastnameError(
              'last name should be greater then 2  characters long!',
            )
          : setLastnameError('');
        break;
      default:
        break;
    }
    validateForm();
  };

  submit = () => {
    if (!isValid) {
      console.log('Signup successful');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {formField.map((field) => {
          return (
            <View key={field}>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => setValue(text, field)}
                placeholder={field}
                value={getValue(field)}
                required
              />
              <View style={styles.errorViewStyle}>
                <Text style={styles.errorText}>
                  {getValue(`${field}Error`)}
                </Text>
              </View>
            </View>
          );
        })}
        <TouchableOpacity
          disabled={isValid}
          style={styles.buttonStyle}
          onPress={() => submit()}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};



export default Signup;
