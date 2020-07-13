import React from 'react';
import {View, Text} from 'react-native';
import styles from './CounterWithTitleStyle';

const CounterWithTitle = ({title, counter}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{counter}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default CounterWithTitle;
