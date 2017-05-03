class Troublemakers extends Scene {

    init() {
        this.sound = new Audio("dist/sound/funk.ogg");
    }

    enter() {
        setTimeout(() => {
            alert("The troublemakers.");
            goToScene(5);
            $("story").fadeTo(0, 1);
        },1);
        this.sound.play();
        $("story").fadeTo(0, 0);
    }

    exit() {
        this.sound.pause();
        this.sound.currentTime = 0;
    }
}
