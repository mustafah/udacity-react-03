import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function getHeaderTitle(route) {

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Decks List';
    switch (routeName) {
        case 'Decks List':
            return 'Decks List';
        case 'Create Deck':
            return 'Create Deck';
    }

}