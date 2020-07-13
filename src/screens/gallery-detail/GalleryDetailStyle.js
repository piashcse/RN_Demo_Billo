import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userPanel: {
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    userName: {
        marginLeft: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 350,
        width: '100%',
    },
    iconContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: -8,
    },
    bottomContainer: {
        marginHorizontal: 12,
    },
    iconLeftContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    textBold: {
        fontWeight: 'bold',
    },
    textComments: {
        color: Colors.subTitle,
    },
    dateAndTranslationContainer: {
        flexDirection: 'row',
    },
    textDate: {
        fontSize: 10,
        color: Colors.subTitle,
    },
    textTranslation: {
        fontSize: 10,
    },

});

export default styles;
