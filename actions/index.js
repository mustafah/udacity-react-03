export const GET_DECKS_ACTION = "GET_DECKS_ACTION";
export const CREATE_DECK_ACTION = "CREATE_DECK_ACTION";
export const CREATE_CARD_ACTION = "CREATE_CARD_ACTION";
export const REMOVE_DECK_ACTION = "REMOVE_DECK_ACTION";
export const RESET_STORE_ACTION = "RESET_STORE_ACTION";

export function getDecksAction(decks) {
  return {
    type: GET_DECKS_ACTION,
    decks
  };
}

export function createDeckAction(title) {
  return {
    type: CREATE_DECK_ACTION,
    title
  };
}

export function createCardAction(titleId, card) {
  return {
    type: CREATE_CARD_ACTION,
    titleId,
    card
  };
}

export function removeDeckAction(title) {
  return {
    type: REMOVE_DECK_ACTION,
    title
  };
}

export function resetStoreAction() {
  return {
    type: RESET_STORE_ACTION,
  };
}
