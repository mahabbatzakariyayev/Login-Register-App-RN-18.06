import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { getMe } from '../store/thunk/AuthThunk';

const ProfileScreen = () => {
    const secretInfo = useSelector((state: RootState) => state.authSlice.secretInfo);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getMe());
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png' }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Jane Doe</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>{secretInfo && secretInfo}</Text>
                <Text style={styles.infoLabel}>Email:</Text>
                <Text style={styles.infoValue}>jane.doe@example.com</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Location:</Text>
                <Text style={styles.infoValue}>San Francisco, CA</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Bio:</Text>
                <Text style={styles.infoValue}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                    vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#333',
    },
    infoContainer: {
        marginTop: 20,
    },
    infoLabel: {
        fontWeight: 'bold',
        color: '#20B2AA',
    },
    infoValue: {
        marginTop: 5,
        color: '#333',
    },
});

export default ProfileScreen;
