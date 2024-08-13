import {StyleSheet} from 'react-native';
import Color from '../../Constants/Color';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallTitle: {
    color: Color.black,
    fontSize: 14,
    textAlign: 'center',
  },
  largeTitle: {
    color: Color.black,
    fontSize: 18,
  },
  largeTitlePrimaryDark: {
    color: Color.primaryDark,
    fontSize: 18,
    textAlign: 'center',
  },
  viewLine: {
    width: '90%',
    height: 1,
    backgroundColor: Color.gray,
  },

  roundedRectangleShape: {
    shadowColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 4,
    marginBottom: 2,
    borderColor: Color.primary1,
    borderWidth: 1,
    borderRadius: 5,
    elevation: 5,
  },
  roundedShapeGray: {
    shadowColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 4,
    marginBottom: 2,
    backgroundColor: Color.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Color.primary3,
    elevation: 2,
  },
});
