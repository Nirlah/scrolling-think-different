class Rebels extends Scene {

    init() {
        this.element.html('<span id="text-3">The rebels.</span>');
    }

    update(progress) {
        if (progress > -0.5 && progress < 0.5) {
            let alpha = progress + 0.5;
            this.element.css('letter-spacing', `${1 + alpha*5}px`);
            this.sticky = true;
        } else {
            this.sticky = false;
        }

        if (progress < -0.5) {
            $("#text-3").css({
                'opacity': 0,
                'transform': `translateY(${this.textAnimationOffset}px)`
            });
        } else if (progress >= -0.5 && progress < -0.4) {
            const factor = ((progress + 0.4) * -10);
            $("#text-3").css({
                'opacity': 1 - factor,
                'transform': `translateY(${this.textAnimationOffset*factor}px)`
            });
        } else {
            $("#text-3").css({
                'opacity': 1,
                'transform': 'translateY(0)'
            });
        }
    }

    exit() {
        this.sticky = false;
    }
}
