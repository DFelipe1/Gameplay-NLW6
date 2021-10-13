import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function ButtonAdd(){
    return (
        <View style={styles.container}>
            <Text style={styles.add}>+</Text>
        </View>
    )
}