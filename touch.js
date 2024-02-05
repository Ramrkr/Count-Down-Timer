function startCountdown() {
	var hours = parseInt(document.getElementById("hours").value, 10) || 0;
	var minutes = parseInt(document.getElementById("minutes").value, 10) || 0;
	var seconds = parseInt(document.getElementById("seconds").value, 10) || 0;

	var totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

	if (totalSeconds <= 0) {
		alert("Please enter a valid positive time for countdown!");
		return;
	}

	var timerElement = document.getElementById("timer");

	var countdownInterval = setInterval(function () {
		var days = Math.floor(totalSeconds / (60 * 60 * 24));
		var remainingSeconds = totalSeconds % (60 * 60 * 24);
		var hours = Math.floor(remainingSeconds / (60 * 60));
		var remainingMinutes = remainingSeconds % (60 * 60);
		var minutes = Math.floor(remainingMinutes / 60);
		var seconds = remainingMinutes % 60;

		timerElement.innerHTML = `<span id="days">${formatTime(days)}</span>
								  <span id="hours">${formatTime(hours)}</span>
								  <span id="minutes">${formatTime(minutes)}</span>
								  <span id="seconds">${formatTime(seconds)}</span>`;

		if(totalSeconds == 10){
			const audio = new Audio(`film-countdown-88717.mp3`)
             audio.play();
		}

		if (totalSeconds <= 0) {
			clearInterval(countdownInterval);
			timerElement.innerHTML = "Time!";
			const audio = new Audio(`sounds/${keyboard[key]}.wav`)
             audio.play();
		}

		totalSeconds--;
	}, 1000);
}

function formatTime(time) {
	return time < 10 ? "0" + time : time;
}