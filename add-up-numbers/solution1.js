'use strict';

/**
 * Returns the quarter of the year for a given month using an array.
 * I used an array because each quarter includes 3 months, so I just mapped them manually.
 * That way I can return the quarter without using if statements or complex logic.
 *
 * @param {number} month - The month number (1 to 12).
 * @returns {number} The quarter number (1 to 4).
 */
export const getQuarter = (month) => {
    const quarters = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
    return quarters[month - 1];
};
