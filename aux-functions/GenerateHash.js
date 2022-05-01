//---------- imports ----------
const { createHash } = require('crypto');

//---------- functions ---------
/**
 * Generate Hash for pocket client
 * 
 * @param {string} userName 
 * 
 * @returns {string}
 */
function GenerateHash(userName) 
{ return createHash('sha256').update(userName).digest('hex'); }

//---------- exports ---------
module.exports = GenerateHash;