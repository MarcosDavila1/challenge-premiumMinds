/**
 * This function validates if already crossed a point in the plane, so we know if there is a pokemon or not
 * @param {string[]} array coordenates already crossed
 * @param {string} newMov next movement
 * @returns boolean
 */

const crossedThere = (array, newMov) => {
    return array.filter(point => point === newMov).length ? true : false;
};

module.exports = {
    crossedThere
};