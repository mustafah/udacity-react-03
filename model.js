import { AsyncStorage } from "react-native";
import { decks } from "./helpers/_Data";
import { getDecksAction } from "./actions";
export const STORAGE_KEY = "Mobile_FlashCards_decks";

export function initializeDataActionAsync() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(getDecksAction(decks));
    });
  };
}

export async function getDecks() {
  try {
    const result = await AsyncStorage.getItem(STORAGE_KEY);
    if (result === null) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    }
    return result === null ? decks : JSON.parse(result);
  } catch (error) {
    console.warn("Error occurred getting the decks", error);
  }
}

export async function getDeck(id) {
  try {
    const result = await AsyncStorage.getItem(STORAGE_KEY);
    const deck = JSON.parse(result)[id];
    return deck;
  } catch (error) {
    console.warn("Error occurred getting deck", error);
  }
}

export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      })
    );
  } catch (error) {
    console.warn("Error adding deck to storage", error);
  }
}

export async function addCardToDeck(title, card) {
  try {
    const deck = await getDeck(title);
    await AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify({
        [title]: {
          ...deck,
          questions: [...deck.questions].concat(card),
        },
      })
    );
  } catch (error) {
    console.warn("Error adding card to deck", error);
  }
}

export async function deleteDeck(title) {
  try {
    const result = await AsyncStorage.getItem(STORAGE_KEY);
    const decks = JSON.parse(result);
    decks[title] = undefined;
    delete decks[title];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  } catch (error) {
    console.warn("Error removing deck from storage", error);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  } catch (err) {
    console.warn(err);
  }
}
