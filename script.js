

var heartCountEl = document.getElementById('heartCount');
var coinCountEl = document.getElementById('coinCount');
var callHistoryEl = document.getElementById('callHistory');
var clearHistoryBtn = document.getElementById('clearHistory');

var hearts = 0;
var coins = 100;


function updateCounters() {
    heartCountEl.textContent = hearts;
    coinCountEl.textContent = coins;
}


var heartButtons = document.getElementsByClassName('heart-btn');
for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].onclick = function () {
        hearts = hearts + 1;
        updateCounters();
    };
}


var callButtons = document.getElementsByClassName('call-btn');
for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].onclick = function () {
        var serviceName = this.getAttribute('data-service');
        var serviceNumber = this.getAttribute('data-number');

        if (coins < 20) {
            alert("You don't have enough coins to make a call!");
            return;
        }


        coins = coins - 20;
        updateCounters();

        alert("Calling " + serviceName + " (" + serviceNumber + ")...");


        var historyItem = document.createElement('div');
        historyItem.className = 'flex justify-between items-center py-2';
        historyItem.innerHTML = '<div>' +
            '<div class="font-medium text-gray-800">' + serviceName + '</div>' +
            '<div class="text-gray-500 text-sm">' + serviceNumber + '</div>' +
            '</div>' +
            '<div class="text-gray-400 text-sm">' + new Date().toLocaleTimeString() + '</div>';

        callHistoryEl.appendChild(historyItem);
    };
}


clearHistoryBtn.onclick = function () {
    callHistoryEl.innerHTML = '';
};


    // Copy count
    var copyCount = 0;
    var copyCountEl = document.getElementById('copyCount');

    // Get all copy buttons
    var copyButtons = document.getElementsByClassName('copy-btn');

    for (var i = 0; i < copyButtons.length; i++) {
        copyButtons[i].onclick = function() {
            var number = this.getAttribute('data-number');

            
            var tempInput = document.createElement('input');
            tempInput.value = number;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Increase copy count
            copyCount = copyCount + 1;
            copyCountEl.textContent = copyCount;

            // Alert
            alert("Copied number: " + number);
        };
    }

