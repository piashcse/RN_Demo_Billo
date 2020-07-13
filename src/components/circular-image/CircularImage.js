import React from 'react';
import {View, Image} from 'react-native';
import styles from './CircularImageStyle';

const CircularImage = ({heightOrWidth, imageUrl, ...props}) => {
    return (
        <View style={styles}>
            <Image
                style={{height:heightOrWidth, width:heightOrWidth, borderRadius: heightOrWidth / 2}}
                source={{uri:imageUrl}}
                {...props}
            />
        </View>
    );
};

export default CircularImage;
