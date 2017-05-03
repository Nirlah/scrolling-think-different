class StatusQuo extends Scene {

    init() {
        this.sound = new Audio("dist/sound/status-quo.mp3");
        this.played = false;
    }

    update(progress) {
        if (progress > -0.5 && progress < 0.5) {
            if (this.sound.paused && !this.played) {
                this.sound.currentTime = 0;
                this.sound.play();
                this.played = true;
            }
        }
    }

    exit() {
        this.sound.pause();
        this.played = false;
    }
}
