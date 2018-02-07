// @ts-check

var myName = 'steve';
myName = 42;

/** @type {string} */
var username;

/** @type {number} */
var totalFunds = 100;

/** @type {(name: number, debitFunds: string) => boolean} */
var  clickHandler;

/**
 * @param {string} name
 * @param {number} debitFunds
*/
var handleUser = function userHandler(name, debitFunds) {
  /** @type {string} */
  var username = name;

  /** @param {string} [name] */
  function setupUser(name) {
    clickHandler = userHandler;
    totalFunds = totalFunds - debitFunds;
    username = name;
  }

  setupUser(name);
}

handleUser('steve', 50);
handleUser(50, 'mark');

userHandler();
