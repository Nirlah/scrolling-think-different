class Genius extends Scene {

    init() {
        this.element.html(`<span id="text-14">we see genius.</span><div class="photograph"><div class="square" style="background-image: url(dist/images/albert.jpg);"></div><span>Albert Einstein</span></div>`);
    }

    get futura() {
        return true;
    }

    update(progress) {
        if (progress < -0.1) {
            $("#scene-14 .photograph").css('transform', `translateY(${this.height * 0.1}px)`);
        } else if (progress >= -0.1) {
            $("#scene-14 .photograph").css('transform', `translateY(${this.height * -progress}px)`);
        } else {
            $("#scene-14 .photograph").css('transform', 'translateY(0px)');
        }

        if (progress < 0) {
            $("#text-14").css('opacity', 1);
        } else if (progress >= 0 && progress < 0.1) {
            let alpha = 1 - progress*10;
            $("#text-14").css('opacity', alpha);
        } else {
            $("#text-14").css('opacity', 0);
        }
    }

    enter() {
        this.sticky = true;
    }

    exit() {
        this.sticky = false;
    }
}
