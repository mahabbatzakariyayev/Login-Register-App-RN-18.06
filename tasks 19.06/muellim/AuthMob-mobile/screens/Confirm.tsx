import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { ConfirmUser } from '../store/thunk/AuthThunk';

const TwoFactorAuthView = ({ navigation }: any) => {
    const [code, setCode] = useState('');
    const email = useSelector((state: RootState) => state.authSlice.user.email);
    const dispatch = useDispatch<AppDispatch>();

    const confirmHandle = () => {
        dispatch(
            ConfirmUser({
                email: email,
                code: code,
            })
        ).then((res) => {
            if (res) {
                navigation.navigate('profile');
            } else {
                Alert.alert('Something went wrong');
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
                    }}
                />
            </View>
            <Text style={styles.title}>Two-Factor Authentication</Text>
            <Text style={styles.description}>
                Enter the code sent to your email to complete the login process.
            </Text>
            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Code"
                    keyboardType="number-pad"
                    value={code}
                    onChangeText={setCode}
                    maxLength={6}
                />
                <TouchableOpacity style={styles.button} onPress={confirmHandle}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F6FA', // Light gray background color
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2F3542', // Dark gray text color
    },
    logoContainer: {
        overflow: 'hidden',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    description: {
        marginBottom: 20,
        textAlign: 'center',
        color: '#57606F', // Medium gray text color
    },
    card: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#2F3542', // Dark gray text color
    },
    button: {
        backgroundColor: '#00CED1',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TwoFactorAuthView;
