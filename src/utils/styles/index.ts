/**
 * Converts a pixel value to rem.
 *
 * @param {number} px - The pixel value to convert.
 * @returns {string} The converted value in rem.
 *
 * @example
 * pxToRem(16); // "1rem"
 * pxToRem(8);  // "0.5rem"
 */
const pxToRem = (px: number | string) => `${+px / 17}rem`;

export { pxToRem };
