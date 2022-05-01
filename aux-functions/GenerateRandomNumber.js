//---------- functions ---------
/**
 * Generate random Int
 * 
 * @param {number} min 
 * @param {number} max
 *  
 * @returns {number}
 */
function GenerateRandomNumber(min, max) { // max ta incluido
    return Math.floor(Math.random() * (max - min + 1) + min);
}//end randomIntFromInterval()

//---------- exports ---------
module.exports = GenerateRandomNumber;