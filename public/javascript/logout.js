function logout() {
    fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(function() {
      document.location.replace('/');
    })
      .catch(err => console.log(err));
}

  var IDLE_TIMEOUT = 60;
  var _idleSecondsTimer = null;
  var _idleSecondsCounter = 0;

  document.onclick = function() {
    _idleSecondsCounter = 0;
  };
  document.onmouseover = function() {
    _idleSecondsCounter = 0;
  };
  document.onkeypress = function() {
    _idleSecondCounter = 0;
  };

  _idleSecondsTimer = window.setInterval(checkIdleTime, 1000);

  function checkIdleTime() {
    _idleSecondsCounter++;
    if (_idleSecondsCounter >= IDLE_TIMEOUT) {
      alert("Due to inactivity, you will be logged out. Please log in again to continue your session!");
      logout()
    }
  }

document.querySelector('#logout').addEventListener('click', logout);