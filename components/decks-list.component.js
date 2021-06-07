import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { initializeDataActionAsync } from '../model';
import { resetStoreAction } from '../actions';
import Deck from './deck.component';
import { ScrollView } from 'react-native-gesture-handler';
import { resetDecks } from '../model';
import { bgWhite, lilac } from '../helpers/colors';

class DecksList extends Component {
    componentDidMount() {
        this.props.dispatch(initializeDataActionAsync());
    }

    resetDeck = () => {
        const { dispatch } = this.props;
        dispatch(resetStoreAction());
        resetDecks();
        dispatch(initializeDataActionAsync());
    };

    render() {
        const { decks } = this.props;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {Object.values(decks).map((deck) => (
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('Deck View', {
                                    title: deck.title,
                                })
                            }
                            key={deck.title}
                            style={{ flex: 1 }}
                        >
                            <Deck deck={deck} />
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={this.resetDeck}>
                        <Text style={{ color: lilac }}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgWhite,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 30,
        height: '100%',
    },
    text: {
        borderColor: 'black',
        borderWidth: 3,
        fontSize: 50,
    },
});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps)(DecksList);
