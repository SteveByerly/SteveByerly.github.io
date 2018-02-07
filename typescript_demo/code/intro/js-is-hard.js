var username,
    totalFunds = 100,
    clickHandler;

var handleUser = function userHandler(name, debitFunds) {
  var username = name;

  function setupUser(name) {
    console.log('-- Setting up user:' + name + ' --\n');
    clickHandler = userHandler;
    totalFunds = totalFunds - debitFunds;
    username = name;
  }

  setupUser(name);
}

logValues('Initial Values:');

handleUser('steve', 50);
logValues('Steve Values:');

handleUser(50, 'mark');
logValues('Mark Values:');

userHandler();

function logValues(title) {
  console.log(title);
  console.log('----------------------');
  console.log('username: ' + username);
  console.log('totalFunds: ' + totalFunds);
  console.log('clickHandler: ' + clickHandler);
  console.log('----------------------\n')
}
