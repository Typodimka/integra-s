// Изменение линии цвета
const getColor = (usage: number): string => {
    if (usage > 80) {
        return 'FireBrick';
    } else if (usage > 50) {
        return 'Gold';
    } else {
        return 'DarkGreen';
    }

};
export default getColor;
