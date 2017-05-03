class Think extends Scene {

    init() {
        this.element.css('height', '300vh');
        this.element.html(
            `<span id="text-15">Because the people who are crazy enough to think they can change the world,</span>` +
            `<div id="prsn-10" class="photograph small"><div class="square" style="background-image: url(dist/images/gandhi.jpg);"></div><span>Mahatma Gandhi</span></div>` +
            `<div id="prsn-11" class="photograph small"><div class="square" style="background-image: url(dist/images/edison.jpg);"></div><span>Thomas Edison</span></div>` +
            `<div id="prsn-12" class="photograph small"><div class="square" style="background-image: url(dist/images/meir.jpg);"></div><span>Golda Meir</span></div>` +
            `<div id="prsn-13" class="photograph small"><div class="square" style="background-image: url(dist/images/david.jpg);"></div><span>Ismar David</span></div>` +
            `<div id="prsn-14" class="photograph small"><div class="square" style="background-image: url(dist/images/anielewicz.jpg);"></div><span>Mordechai Anielewicz</span></div>` +
            `<div id="prsn-15" class="photograph small"><div class="square" style="background-image: url(dist/images/kubrick.jpg);"></div><span>Stanley Kubrick</span></div>` +
            `<div id="prsn-16" class="photograph small"><div class="square" style="background-image: url(dist/images/thiel.jpg);"></div><span>Peter Thiel</span></div>` +
            `<div id="prsn-3" class="photograph default"><div class="square" style="background-image: url(dist/images/bill.jpg);"></div><span>Bill Gates</span></div>` +
            `<div id="prsn-4" class="photograph default"><div class="square" style="background-image: url(dist/images/barack.jpg);"></div><span>Barack Obama</span></div>` +
            `<div id="prsn-5" class="photograph default"><div class="square" style="background-image: url(dist/images/ben-gurion.jpg);"></div><span>David Ben-Gurion</span></div>` +
            `<div id="prsn-6" class="photograph default"><div class="square" style="background-image: url(dist/images/elon.jpg);"></div><span>Elon Musk</span></div>` +
            `<div id="prsn-7" class="photograph default"><div class="square" style="background-image: url(dist/images/da-vinci.jpg);"></div><span>Leonardo da Vinci</span></div>` +
            `<div id="prsn-8" class="photograph default"><div class="square" style="background-image: url(dist/images/picasso.jpg);"></div><span>Pablo Picasso</span></div>` +
            `<div id="prsn-9" class="photograph default"><div class="square" style="background-image: url(dist/images/warhol.jpg);"></div><span>Andy Warhol</span></div>` +
            `<div id="prsn-1" class="photograph big"><div class="square" style="background-image: url(dist/images/alan.jpg);"></div><span>Alan Turing</span></div>` +
            `<div id="prsn-2" class="photograph big"><div class="square" style="background-image: url(dist/images/steve.jpg);"></div><span>Steve Jobs</span></div>`
        );
    }

    get futura() {
        return true;
    }

    update(progress) {
        $(".photograph.default").css('transform', `translateY(${80 * -progress}px)`);
        $(".photograph.big").css('transform', `translateY(${300 * -progress}px)`);

        if (progress > 0) {
            $("#text-15").css('position', 'fixed');
        } else {
            $("#text-15").css('position', 'absolute');
        }
    }
}
