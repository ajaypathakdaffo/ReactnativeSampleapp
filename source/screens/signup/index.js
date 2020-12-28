import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {spacingVertical, spacingHorizontal} from '../../constants/appstyle';

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

  getValue = (fieldNmae) => {
    if (fieldNmae === 'firstname') {
      return firstname;
    } else if (fieldNmae === 'lastname') {
      return lastname;
    } else if (fieldNmae === 'email') {
      return email;
    } else if (fieldNmae === 'password') {
      return password;
    } else if (fieldNmae === 'firstnameError') {
      return firstnameError;
    } else if (fieldNmae === 'lastnameError') {
      return lastnameError;
    } else if (fieldNmae === 'emailError') {
      return emailError;
    } else if (fieldNmae === 'passwordError') {
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
  setValue = (text, fieldNmae) => {
    switch (fieldNmae) {
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
                {true ? (
                  <Text style={styles.errorText}>
                    {getValue(`${field}Error`)}
                  </Text>
                ) : null}
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
    fontSize: 20,
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
  errorViewStyle: {
    height: spacingVertical(14),
    borderRadius: 10,
    alignItems: 'flex-end',
  },
  errorText: {
    color: '#ff6600',
    fontSize: 14,
  },
});

export default Signup;
