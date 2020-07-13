import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './GalleryDetailStyle';
import CircularImage from '../../components/circular-image/CircularImage';
import Data from '../../Constants/Data';
import IconImage from '../../components/icon/IconImage';

const GalleryDetail = ({route}) => {
    const galleryDetail = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.userPanel}>
                <CircularImage
                    heightOrWidth={30}
                    imageUrl={Data.profileInfo.profileImage}/>
                <Text style={styles.userName}>jackson_amy</Text>
            </View>
            <Image
                style={styles.image}
                source={{uri: galleryDetail.image}}
            />
            <View style={styles.bottomContainer}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconLeftContainer}>
                        <IconImage
                            image={require('../../assets/icon-image/heart.png')}
                        />
                        <IconImage
                            image={require('../../assets/icon-image/comment.png')}
                        />
                        <IconImage
                            image={require('../../assets/icon-image/send.png')}
                        />
                    </View>
                    <IconImage
                        image={require('../../assets/icon-image/bookmark.png')}
                    />
                </View>
                <View>
                    <Text>{Data.galleryDetailData.likedBy}<Text
                        style={styles.textBold}>{Data.galleryDetailData.likedByUser}</Text>
                        {Data.galleryDetailData.and} <Text
                            style={styles.textBold}>{Data.galleryDetailData.otherCounter}</Text>
                    </Text>
                    <Text style={styles.textComments}>{Data.galleryDetailData.viewAllComments}</Text>
                    <View style={styles.dateAndTranslationContainer}>
                        <Text style={styles.textDate}>{Data.galleryDetailData.publishedDate}</Text>
                        <Text style={styles.textTranslation}> {Data.galleryDetailData.seeTranslations}</Text>
                    </View>

                </View>
            </View>
        </View>
    );
};


export default GalleryDetail;
