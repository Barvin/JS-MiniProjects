function main() {

	function setDate() {
		const time = new Date();
		const time_seconds = time.getSeconds();
		const time_minutes = time.getMinutes();
		const time_hours = time.getHours();

		const seconds_deg = ((time_seconds / 60) * 360) + 90; 
		const minutes_deg = ((time_minutes / 60) * 360) + 90;
		const hours_deg = ((time_hours / 60) * 360) + 90; 
		
		//transform minute hand: 90deg/15s = 6 deg/s
		moveHands(hours_deg, minutes_deg, seconds_deg);
	}

	function moveHands(hours, minutes, seconds){
		const seconds_hand = document.querySelector(".second-hand");
		seconds_hand.style.transform = "rotate(" + seconds +"deg)";

		const minute_hand = document.querySelector(".min-hand");
		minute_hand.style.transform = "rotate(" + minutes +"deg)";
	
		const hour_hand = document.querySelector(".hour-hand");
		hour_hand.style.transform = "rotate(" + hours +"deg)";
	
	}

	setInterval(setDate, 1000);
}

main()