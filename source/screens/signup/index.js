import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../signup/signupstyle';

const Signup = () => {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({});
  const [isValid, setFormValidity] = useState(true);
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  );
  const formField = ['firstname', 'lastname', 'email', 'password'];
  const validateForm = () => {
    if (Object.keys(formData).length < 4 || Object.keys(error).length) {
      return setFormValidity(true);
    } else {
      return setFormValidity(false);
    }
  };
  const setValue = (text, fieldName) => {
    let formError = error;
    let Formdata = formData;
    let fieldError = '';
    Formdata = {...Formdata, [fieldName]: text};
    if (text == '') {
      delete Formdata[fieldName];
      fieldError = 'Email can not be empty';
    } else {
      switch (fieldName) {
        case 'email':
          validEmailRegex.test(text)
            ? (fieldError = '')
            : (fieldError = 'Email is not valid!');
          break;
        case 'password':
          text.length < 8
            ? (fieldError = 'Password must be 8 characters long!')
            : (fieldError = '');
          break;
        case 'firstname':
          text.length < 2
            ? (fieldError =
                'first name should be greater then 2 characters long!')
            : (fieldError = '');
          break;
        case 'lastname':
          text.length < 2
            ? (fieldError =
                'last name should be greater then 2  characters long!')
            : (fieldError = '');
          break;
        default:
          break;
      }
    }
    if (fieldError == '') {
      delete formError[fieldName];
    } else {
      formError = {...formError, [fieldName]: fieldError};
    }
    setError(formError);
    setFormData(Formdata);
    validateForm();
  };
  const submit = () => {
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
                value={formData[field]}
                required
              />
              <View style={styles.errorViewStyle}>
                <Text style={styles.errorText}>{error[`${field}`]}</Text>
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
