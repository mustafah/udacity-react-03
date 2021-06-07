import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'MobileFlashCards_notifications';

function createNotification() {
    return {
        title: "Trust yourself, because why not !",
        body: "Please don't forget to study your cards today!",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        },
        ios: {
            sound: true,
        }
    };
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(
                    ({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();
                            `1  `;

                            let tomorrow = new Date();
                            tomorrow.setMinutes(0);
                            tomorrow.setHours(20);
                            tomorrow.setDate(tomorrow.getDate() + 1);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                }
                            );
                            AsyncStorage.setItem(
                                NOTIFICATION_KEY,
                                JSON.stringify(true)
                            );
                        }
                    }
                );
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync()
    );
}
