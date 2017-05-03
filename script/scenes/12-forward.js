class Forward extends Scene {

    init() {
        this.element.html('<span class="fixed-center">They push the human race forward.</span><img src="dist/images/earth.jpg">');
    }

    get futura() {
        return true;
    }

    update(progress) {
        progress = (progress + 1) / 2;
        this.element.css('background-position-y', `${200-progress*250}px`);
        this.element.children('img').css('transform', `translate3D(${progress*100}px, ${-progress*50}px, 0)`);
    }
}
