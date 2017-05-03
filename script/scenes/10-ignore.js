class Ignore extends Scene {

    init() {
        this.element.html('<span>About the only thing you can\'t do is</span><span id="text-ignore">ignore</span>&nbsp;<span>them.</span>');
    }

    update(progress) {
        progress += 0.55;
        const size = progress * 200;
        $("#text-ignore").css({
            'font-size': size+'pt',
            'transform': `translateY(${-size/5}px)`
        });
    }
}
