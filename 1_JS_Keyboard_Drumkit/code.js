function main() {
	function playSound(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

		if(!audio){
			return;
		}

		//allows loops
		audio.currentTime = 0;

		audio.play();

		key.classList.add('playing');

		//stop transition
		const keys = document.querySelectorAll(".key");
		keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	}

	function removeTransition(e){
		if(e.propertyName !== "transform") return;
		this.classList.remove("playing");
	}

	window.addEventListener("keypress", playSound);
}

main()