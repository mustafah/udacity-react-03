import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bgWhite, lilac, white } from '../helpers/colors';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MyButton from './button.component';
import { createCardAction } from '../actions';
import { addCardToDeck } from '../model';

class CreateCardPage extends Component {
    state = {
        question: '',
        answer: '',
    };

    onQuestionChange = (value) => {
        this.setState({
            question: value,
        });
    };

    onAnswer = (value) => {
        this.setState({
            answer: value,
        });
    };

    onCreate = () => {
        const { question, answer } = this.state;
        const { title } = this.props.route.params;
        this.props.dispatch(createCardAction(title, { question, answer }));
        addCardToDeck(title, { question, answer });
        this.props.navigation.goBack();
        this.setState({
            question: '',
            answer: '',
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.block]}>
                    <Text style={styles.label}>Enter a New Question</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.question}
                        onChangeText={this.onQuestionChange}
                        placeholder='Enter Question...'
                        autoFocus={true}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => this.answerTextInput.focus()}
                    />
                </View>
                <View style={[styles.block]}>
                    <Text style={styles.label}>
                        Enter the Answer to the Question
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.answer}
                        onChangeText={this.onAnswer}
                        placeholder='Enter Answer...'
                        returnKeyType='done'
                        onSubmitEditing={this.onCreate}
                        ref={(input) => {
                            this.answerTextInput = input;
                        }}
                    />
                </View>
                <MyButton
                    onPress={this.onCreate}
                    style={[
                        styles.deckBtn,
                        {
                            width: 300,
                            padding: 15,
                            backgroundColor: lilac,
                        },
                    ]}
                    color={white}
                    disabled={
                        this.state.question === '' || this.state.answer === ''
                    }
                >
                    Submit
                </MyButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: bgWhite,
    },
    deckBtn: {
        padding: 10,
        width: 200,
        marginBottom: 30,
        borderRadius: 15,
    },
    block: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40,
        width: 300,
        marginBottom: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default connect()(CreateCardPage);
