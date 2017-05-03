class CrazyOnes extends Scene {

    init() {
        this.element.html('<span id="text-1">Here\'s to the crazy ones.</span>');
    }

    update(progress) {
        if (progress <= 0.2) {
            const factor = 1 - (progress * 5);
            $("#text-1").css({
                'opacity': 1,
                'transform': 'translateY(0)'
            });
        } else if (progress > 0.2 && progress <= 0.3) {
            const factor = (progress - 0.2) * 10;
            $("#text-1").css({
                'opacity': 1 - factor,
                'transform': `translateY(${-this.textAnimationOffset*factor}px)`
            });
        } else if (progress > 0.3) {
            $("#text-1").css({
                'opacity': 0,
                'transform': `translateY(-${this.textAnimationOffset}px)`
            });
        }

        this.sticky = progress < 0.5;
    }
}
