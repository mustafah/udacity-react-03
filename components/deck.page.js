import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MyButton from './button.component';
import { orange, lightOrange, lilac, white, bgWhite } from '../helpers/colors';
import { connect } from 'react-redux';
import Deck from './deck.component';
import { removeDeckAction } from '../actions';
import { deleteDeck } from '../model';

class DeckPage extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.deck !== undefined;
    }

    createCardAction = () => {
        const { navigation, route } = this.props;
        navigation.navigate('Add Card', {
            title: route.params.title,
        });
    };

    startQuiz = () => {
        const { navigation, route } = this.props;
        navigation.navigate('Quiz', {
            title: route.params.title,
        });
    };

    handleRemoveDeck = () => {
        const { title, deck, navigation, dispatch } = this.props;
        dispatch(removeDeckAction(title));
        deleteDeck(deck.title);
        navigation.goBack();
    };

    render() {
        const { deck } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Deck deck={deck} style={{ height: 300 }} />
                </View>
                <MyButton
                    onPress={this.startQuiz}
                    style={[styles.deckBtn, { backgroundColor: orange }]}
                    color={white}
                >
                    Start Quiz
                </MyButton>
                <MyButton
                    onPress={this.createCardAction}
                    style={[styles.deckBtn, { backgroundColor: lightOrange }]}
                    color={lilac}
                >
                    Add New Card
                </MyButton>
                <TouchableOpacity
                    onPress={this.handleRemoveDeck}
                    style={styles.removeBtn}
                >
                    <Text style={{ color: lilac }}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: bgWhite,
        justifyContent: 'flex-start',
    },
    deckBtn: {
        width: 300,
        padding: 20,
        borderRadius: 5,
        marginBottom: 30,
    },
});

const mapStateToProps = (state, { route }) => {
    const { title } = route.params;
    return {
        deck: state[title],
        title,
    };
};

export default connect(mapStateToProps)(DeckPage);
