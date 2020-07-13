import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './HomeStyle';
import CircularImage from '../../components/circular-image/CircularImage';
import CounterWithTitle from '../../components/counter-title/CounterWithTitle';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import GalleryItem from '../../components/gallery-item/GalleryItem';
import Data from '../../Constants/Data';

const Home = ({navigation}) => {
    // communicate with redux
    const homeState = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View style={styles.userPanel}>
                {topPanel()}
                {ProfileInfoPanel()}
            </View>
            <View style={{marginHorizontal: -5}}>
                {userPhotoGallery(navigation)}
            </View>
        </View>
    );
};

function topPanel() {
    return (
        <View style={styles.topPanel}>
            <CircularImage
                heightOrWidth={80}
                imageUrl={Data.profileInfo.profileImage}/>
            <View style={styles.counterWithTile}>
                <CounterWithTitle
                    title={'Posts'}
                    counter={'15'}
                />
                <CounterWithTitle
                    title={'Followers'}
                    counter={'130'}
                />
                <CounterWithTitle
                    title={'Following'}
                    counter={'75'}
                />
            </View>
        </View>
    );
}

function ProfileInfoPanel() {
    return (
        <View style={styles.profileInfoPanel}>
            <ProfileInfo
                name={Data.profileInfo.userName}
                bio={Data.profileInfo.userBio}
                website={Data.profileInfo.userWebsite}
            />
            <View style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </View>

        </View>
    );
}

function userPhotoGallery(navigation) {
    return (
        <View>
            <FlatList
                data={Data.galleryData}
                renderItem={({item}) =>
                    <GalleryItem
                        imageUrl={item.image}
                        onPress={() => navigation.navigate('Post', {image: item.image})}/>}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />

        </View>
    );
}

export default Home;
