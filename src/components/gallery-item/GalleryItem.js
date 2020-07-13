import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './GalleryItemStyle';

const GalleryItem = ({imageUrl, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Image
                style={styles.galleryImage}
                source={{uri: imageUrl}}
                resizeMode={'stretch'}
            />
        </TouchableOpacity>
    );
};


export default GalleryItem;
