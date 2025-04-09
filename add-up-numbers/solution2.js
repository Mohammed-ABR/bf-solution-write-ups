'use strict';

/**
 * Returns the quarter of the year for a given month using simple math.
 * I used simple division and rounding up to determine the quarter.
 * This avoids the need for arrays or conditional logic.
 *
 * @param {number} month - The month number (1 to 12).
 * @returns {number} The quarter number (1 to 4).
 */
export const getQuarter = (month) => {
    return Math.ceil(month / 3);
};
