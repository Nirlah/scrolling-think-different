class Rules extends Scene {

    init() {
        this.element.html(`<span id="text-3-a" class="text-3">They're not</span>&nbsp;&nbsp;<span id="text-3-b" class="text-3">fond of rules.</span>`);
    }

    update(progress) {
        if (progress > -0.5 && progress < 0.5) {
            this.sticky = true;
            $(".text-3").show();
            $("#text-3-a").css('transform', `translateY(${-progress*1.05*this.height}px)`);
            $("#text-3-b").css('transform', `translateY(${progress*1.05*this.height}px)`);
        } else {
            $(".text-3").hide();
            this.sticky = false;
        }
    }
}
