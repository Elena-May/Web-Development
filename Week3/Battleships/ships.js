const ships = (length) => {
    const getLength = () => length;
    let health = length;
    const hit = () => {
        health -= 1;
    };

    const getHealth = () => {
        return health;
    }

    const isSunk = () => {
        if (health <= 0) {
            return true;
        } else {
            return false;
        }
    }
    return {getLength, hit, getHealth, isSunk}
};

module.exports = ships;