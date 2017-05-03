class SeeCrazy extends Scene {

    init() {
        this.element.html('<div id="sc-13-bg"></div><span class="fixed-center">And while some may see them as the crazy ones,</span>');
    }

    get futura() {
        return true;
    }

    update(progress) {
        $("#sc-13-bg").css('transform', `rotate(${progress*30 - 20}deg)`);
    }
}
