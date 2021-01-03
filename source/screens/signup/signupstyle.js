import {StyleSheet} from 'react-native';
import {spacingVertical, spacingHorizontal} from '../../constants/appstyle';

export const styles = StyleSheet.create({
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
