// function to close alerts and popups
$('.alertClose').on('click', function() {
  $(this).parent().remove();
});

const chartDiv =  document.getElementById('chart-buttons');
const chartList = chartDiv.children;
const sendButton = document.getElementById('userButton');
const sent = document.getElementById('sent');
const userSearch = document.getElementById('userSearch');
const userForm = document.getElementById('membersForm');
const userFormSettings = document.getElementById('settingsForm');
const userList = document.getElementById('dataList');
const userError = document.getElementById('error');
const userMessage = document.getElementById('userMessage');
const searchOptions = document.getElementsByClassName('searchOptions');
const found = document.getElementsByClassName('found');
const notificationIcon = document.getElementById('notificationBell');
const showNotification = document.querySelector('.notifyDiv');
const notificationCircle = document.querySelector('.iconNotify');
const notification = document.getElementsByClassName('notifications');
const sendEmail = document.getElementById('sendEmail');
const setProfile = document.getElementById('setProfile');
const settingsDiv = document.querySelector('.settings');
const saveSettings = document.getElementById('saveButton');
const cancelSettings = document.getElementById('cancelButton');
const timeSelect = document.getElementById('timeZone');


function defaultButton() {
  chartList[0].classList.add('chart-button-color');
}

defaultButton();

let chartUpdates = [

  function hourlyChart() {
    mainTraffic.data.datasets[0].data.splice(
      0, 12,
      750, 1250, 1000, 1500, 2000, 1500,
      1750, 1250, 1750, 2250, 1750, 2250
    );
    mainTraffic.data.labels.splice(
      0, 11,
      '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm',
      '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'
    );
    mainTraffic.update();
  },

  function dailyChart() {
    mainTraffic.data.datasets[0].data.splice(
      0, 12,
      550, 2300, 850, 1400, 700, 1150,
      1050, 1850, 1000, 2250, 1250, 1500
    );
    mainTraffic.data.labels.splice(
      0, 11,
      '7/7', '7/8', '7/9', '7/10', '7/11', '7/12',
      '7/13', '7/14', '7/15', '7/16', '7/17'
    );
    mainTraffic.update();
  },

  function weeklyChart() {
    mainTraffic.data.datasets[0].data.splice(
      0, 12,
      950, 1250, 1000, 1250, 700, 1200,
      800, 1250, 1200, 2100, 750, 1000
    );
    mainTraffic.data.labels.splice(
      0, 11,
      'May 8', 'May 15', 'May 22', 'May 29', 'June 5', 'June 12',
      'June 19', 'June 26', 'July 3', 'July 10', 'July 17'
    );
    mainTraffic.update();
  },

  function monthlyChart() {
    mainTraffic.data.datasets[0].data.splice(
      0, 12,
      1050, 1950, 800, 1200, 2300, 1700,
      1750, 1350, 1150, 1250, 2150, 2000
    );
    mainTraffic.data.labels.splice(
      0, 11,
      'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb',
      'Mar', 'Apr', 'May', 'June', 'July'
    );
    mainTraffic.update();
  }
]


chartDiv.addEventListener('click', function(e) {
  for (let i = 0; i < chartList.length; i++) {
    let chartButton = chartList[i];
    let chartClass = chartButton.classList;

    if (e.target === chartButton) {
      chartClass.add('chart-button-color');
      chartUpdates[i]();
    } else {
      chartClass.remove('chart-button-color');
    }
  }
});

userSearch.addEventListener('input', function() {
  for(let i = 0; i < userList.options.length; i += 1) {
    let autoList = userList.options[i].value.toString().toUpperCase();
    let searched = userSearch.value.toString().toUpperCase();

    if(searched === autoList) {
      searchOptions[i].classList.add('found');
    }

    if(searched.search('[A-z]') == -1) {
      searchOptions[i].classList.remove('found');
    }
  }
});

sendButton.addEventListener('click', function(e) {
  e.preventDefault();
  for(let i = 0; i < userList.options.length; i += 1) {
    let autoList = userList.options[i].value.toString().toUpperCase();
    let searched = userSearch.value.toString().toUpperCase();
    let textExists = userMessage.value.toString();

    if(searched === autoList && textExists.search('[A-z]') > -1) {
      sent.classList.add('show');
    } else if (textExists.search('[A-z]') == -1) {
      messageError.classList.add('show');
    }

    if(found == 'found') {
      userError.classList.remove('show');
    } else if(searched.search('[A-z]') == -1 || found.length < 1) {
      userError.classList.add('show');
    }
  }
});

userForm.addEventListener('keyup', function(e) {
  if(userError.classList == 'show' && e.target == userSearch) {
    userError.classList.remove('show');
  } else if(messageError.classList == 'show' && e.target == userMessage) {
    messageError.classList.remove('show');
  }
});

$('.sentClose').on('click', function() {
  $(sent).removeClass('show');
});

notificationBell.addEventListener('click', function(e) {

  showNotification.classList.add('notifyShow');

  if(showNotification.classList = 'notifyShow') {
    $(notificationCircle).remove();
  }
});

showNotification.addEventListener('click', function(e) {
  for(let i = 0; i < notification.length; i++) {
    if(e.target == notification[i]) {
      $(notification[i]).remove();
    }
  }
  if(notification.length === 0) {
    $(this).remove();
  }
});

function isLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null
  } catch(e) {
    return false;
  }
}

settingsDiv.addEventListener('click', function(e) {
  if(isLocalStorage()) {
    if(e.target === saveSettings) {
      if(sendEmail.checked == true) {
        localStorage.setItem('emailChecked', true);
      } else {
        localStorage.removeItem('emailChecked');
      }

      if(setProfile.checked == true) {
        localStorage.setItem('profileChecked', true);
      } else {
        localStorage.removeItem('profileChecked');
      }

      let selectTime = timeSelect.options.selectedIndex;
      localStorage.setItem('timeNumber', selectTime);

    }
  }

  if(e.target === cancelSettings) {
    userFormSettings.reset();
  }
});

window.addEventListener('load', function() {
  sendEmail.checked = localStorage.emailChecked;
  setProfile.checked = localStorage.profileChecked;
  timeSelect.options.selectedIndex = parseInt(localStorage.timeNumber);
  ;
});
