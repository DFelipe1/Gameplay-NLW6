import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { ButtonAdd } from '../ButtonAdd';


import { styles } from './styles';

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/diego3g.png" />

            <View>

                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola,
                    </Text>

                    <Text style={styles.username}>
                        Rodrigo
                    </Text>
                </View>
                <Text style={styles.mensage}>
                    Hoje é Dia de Vitoria
                </Text>
            </View>

            <ButtonAdd/>
        </View>
    )
}