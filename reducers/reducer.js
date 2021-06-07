import {
    GET_DECKS_ACTION,
    CREATE_DECK_ACTION,
    CREATE_CARD_ACTION,
    RESET_STORE_ACTION,
    REMOVE_DECK_ACTION,
} from '../actions';
import { decks as allDecks } from '../helpers/_Data';

export default function decksReducer(state = {}, action) {
    switch (action.type) {
        case GET_DECKS_ACTION:
            const { decks } = action;
            return {
                ...state,
                ...decks,
            };
        case CREATE_DECK_ACTION:
            const { title } = action;
            return {
                ...state,
                [title]: {
                    title,
                    questions: [],
                },
            };
        case CREATE_CARD_ACTION:
            const { titleId, card } = action;
            return {
                ...state,
                [titleId]: {
                    ...state[titleId],
                    questions: [...state[titleId].questions].concat(card),
                },
            };
        case REMOVE_DECK_ACTION:
            const { [action.title]: value, ...remainingDecks } = state;
            return {
                ...remainingDecks,
            };
        case RESET_STORE_ACTION:
            return allDecks;
        default:
            return state;
    }
}
