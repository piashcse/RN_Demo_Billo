import React from 'react';
import {View, Text} from 'react-native';
import styles from './ProfileInfoStyle';

const ProfileInfo = ({name, bio, website}) => {
    return (
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text>{bio}</Text>
            <Text style={styles.website}>{website}</Text>
        </View>
    );
};

export default ProfileInfo;
