import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Image } from 'react-native';


import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const { secondary100, secondary80 } = theme.colors;

    return (
        <LinearGradient 
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            <Image
                source={{uri: urlImage}}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}          