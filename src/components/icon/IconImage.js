import React from 'react';
import {View, Image} from 'react-native';
import styles from './IconImageStyle';

const IconImage = ({image}) => {
    return (
        <View>
            <Image
                style={styles.image}
                source={image}
            />
        </View>
    );
};

export default IconImage;
