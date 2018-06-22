var enableNotifications = document.querySelectorAll('.enable-notifications');

if ('Notification' in window) {
  for(var i = 0; i<enableNotifications.length; i++) {
    enableNotifications[i].style.display = 'inline-block';
    enableNotifications[i].addEventListener('click', askForNotificationPermission);
  }
}

  /*
function displayNotification(){
   new Notification('訂閱成功！！！');
}*/

function displayNotification(){
    if('serviceWorker' in navigator){
        var options = {
            body: '歡迎進入30天PWA的世界'
        };
        navigator.serviceWorker.ready
            .then(function(sw){
                sw.showNotification('訂閱成功！！！', options);
            })
    }

}

function askForNotificationPermission() {
    Notification.requestPermission(function(status){
        console.log('User Choice', status);
        if (status !== 'granted') {
            console.log('推播允許被拒絕了!');
        } else {
            displayNotification();
        }
    });
}

  /*
$(() => {
  const fetchData = () => {
    $.get('./data.php', res => {
      $('#version').text(`version: ${res}`)
    })
  }
  fetchData()
  $('#fetch-data').click(() => fetchData())
})
*/
