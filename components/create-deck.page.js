import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { createDeckAction } from '../actions';
import MyButton from './button.component';
import { bgWhite, lilac, white } from '../helpers/colors';
import { saveDeckTitle } from '../model';

class CreateDeckScreen extends Component {
    state = {
        deckTitle: '',
    };

    onChange = (value) => {
        this.setState({
            deckTitle: value,
        });
    };

    onCreate = () => {
        const { deckTitle } = this.state;
        const { dispatch } = this.props;
        dispatch(createDeckAction(deckTitle));
        saveDeckTitle(deckTitle);
        this.navigateToDeck(deckTitle);
        this.setState({
            deckTitle: '',
        });
    };

    navigateToDeck = (deckTitle) => {
        this.props.navigation.navigate('Deck View', { title: deckTitle });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.block]}>
                    <Text style={styles.label}>
                        What is your deck's title ?
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.deckTitle}
                        onChangeText={this.onChange}
                        placeholder="deck's title"
                        autoFocus={false}
                        blurOnSubmit={false}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                </View>
                <MyButton
                    onPress={this.onCreate}
                    style={[
                        styles.deckBtn,
                        {
                            width: 300,
                            padding: 15,
                            backgroundColor: lilac
                        },
                    ]}
                    disabled={this.state.deckTitle === ''}
                    color={white}
                >
                    Create
                </MyButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: bgWhite,
        justifyContent: 'flex-start',
    },
    deckBtn: {
        width: 200,
        padding: 10,
        borderRadius: 5,
        marginBottom: 30,
    },
    block: {
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 40,
        fontSize: 20,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        paddingRight: 10,
        marginBottom: 30,
        borderColor: 'gray',
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default connect()(CreateDeckScreen);
