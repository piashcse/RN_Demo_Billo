import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
    },
    userPanel:{
        marginHorizontal: 10
    },
    topPanel: {
        flexDirection: 'row',
    },
    counterWithTile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileInfoPanel: {
        marginVertical: 10,
    },
    editButton: {
        borderColor: Colors.editButtonBorder,
        borderWidth: 1,
        borderRadius:5,
        padding: 5,
        marginVertical: 10,
    },
    editButtonText:{
        textAlign:'center'
    }
});

export default styles;
