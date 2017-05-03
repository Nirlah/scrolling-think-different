// Created by Nir Lahad 2017
// Intro to Interactive / Haim Agami
// Visual Communications (2nd year), Bezalel

class Scene {

    constructor(index) {
        this.element = this.createElement(index);
        this.textAnimationOffset = 30;
        this.init();
    }

    createElement(index) {
        return $(`<scene id="scene-${index}" class="${this.futura ? 'futura': ''} ${this.noClip ? 'no-clip' : ''}"></scene>`);
    }

    init() {
    }

    // progress [-1,1] while negative is intro and positive is outro.
    update(progress) {
    }

    layout() {
    }

    enter() {
    }

    exit() {
    }

    get futura() {
        return false;
    }

    get noClip() {
        return false;
    }

    set topY(value) {
        this._y = value;
        this.element.css('top', value);
    }

    get topY() {
        return this._y;
    }

    get bottomY() {
        return this.topY + this.height;
    }

    get height() {
        return this.element.height();
    }

    set sticky(enabled) {
        if (enabled) {
            this.element.addClass('sticky');
        } else {
            this.element.removeClass('sticky');
        }
    }
}
