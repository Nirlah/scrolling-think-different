class RoundPegs extends Scene {

    init() {
        this.element.html('<div id="text-5-b"><div id="text-5-a">The round pegs</div>in the square holes.</div>');
    }

    get noClip() {
        return true;
    }

    enter() {
        $("#text-5-a").css('display', 'flex');
    }

    exit() {
        $("#text-5-a").hide();
    }
}
