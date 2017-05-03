class QuoteDisagree extends Scene {

    init() {
        this.element.html(`<span id="text-9-a" class="text-9">You can quote them,</span><span id="text-9-b" class="text-9">disagree with them,<div id="text-9-b-line"></div></span><span id="text-9-c" class="text-9"><div id="text-9-c-mark"></div><div id="text-9-c-content">glorify</div></span><span id="text-9-d" class="text-9">or <span id="text-9-let-a">v</span><span id="text-9-let-b">i</span><span id="text-9-let-c">l</span><span id="text-9-let-d">i</span><span  id="text-9-let-e">f</span><span id="text-9-let-f">y</span> them.</span>`);
    }

    update(progress) {
        if (progress > -0.5) {
            let alpha = progress + 0.5;

            // line a
            if (alpha >= 0) {
                let percent = alpha * 400;
                $("#text-9-a").css({
                    'opacity': 1,
                    'background-image': `linear-gradient(to right, black ${percent}%, white ${percent}%)`
                });
            }

            // line b
            if (alpha < 0.25) {
                $("#text-9-b").css('opacity', 0);
            } else if (alpha >= 0.25 && alpha < 0.30) {
                $("#text-9-b").css('opacity', (alpha-0.25)*20);
            } else if (alpha >= 0.30) {
                $("#text-9-b").css('opacity', 1);
            }
            if (alpha < 0.25) {
                $("#text-9-b-line").css('width', 0);
            } else if (alpha >= 0.25 && alpha < 0.5) {
                let percent = (alpha - 0.25) * 4;
                $("#text-9-b-line").css('width', 173 * percent);
            } else {
                $("#text-9-b-line").css('width', 173);
            }

            // line c
            if (alpha < 0.50) {
                $("#text-9-c").css('opacity', 0);
            } else if (alpha >= 0.50 && alpha < 0.55) {
                $("#text-9-c").css('opacity', (alpha-0.50)*20);
            } else if (alpha >= 0.55) {
                $("#text-9-c").css('opacity', 1);
            }
            if (alpha < 0.50) {
                $("#text-9-c-mark").css('width', 0);
            } else if (alpha >= 0.50 && alpha < 0.75) {
                let percent = (alpha - 0.50) * 4;
                $("#text-9-c-mark").css('width', 68 * percent);
            } else {
                $("#text-9-c-mark").css('width', 68);
            }

            // line d
            if (alpha < 0.75) {
                $("#text-9-d").css('opacity', 0);
            } else if (alpha >= 0.75 && alpha < 0.80) {
                $("#text-9-d").css('opacity', (alpha-0.75)*20);
            } else if (alpha >= 0.80) {
                $("#text-9-d").css('opacity', 1);
            }
            if (alpha < 0.75) {
                $("#text-9-let-a").css({
                    'transform': 'translateY(0)',
                    'opacity': 1
                });
                $("#text-9-let-b").css({
                    'transform': 'translateY(0)',
                    'opacity': 1
                });
                $("#text-9-let-c").css('transform', 'translateY(0) scale(1)');
                $("#text-9-let-d").css('transform', 'translateY(0)');
                $("#text-9-let-e").css({
                    'transform': 'translateY(0)',
                    'opacity': 1
                });
                $("#text-9-let-f").css('transform', 'translateY(0) scale(1)');
            } else if (alpha >= 0.75) {
                let percent = (alpha - 0.75) * 4;
                $("#text-9-let-a").css({
                    'transform': `translateY(${percent * 30}px)`,
                    'opacity': 1 - 0.7 * percent
                });
                $("#text-9-let-b").css({
                    'transform': `translateY(${percent * 17}px)`,
                    'opacity': 1 - 0.3 * percent
                });
                $("#text-9-let-c").css('transform', `translateY(${percent * 25}px) scale(${1 - percent*0.3})`);
                $("#text-9-let-d").css('transform', `translateY(${percent * 19}px)`);
                $("#text-9-let-e").css({
                    'transform': `translateY(${percent * 40}px)`,
                    'opacity': 1 - 0.5 * percent
                });
                $("#text-9-let-f").css('transform', `translateY(${percent * 32}px) scale(${1 - percent*0.5})`);
            }
        } else {
            $("#text-9-a").css('opacity', 0);
            $("#text-9-b").css('opacity', 0);
            $("#text-9-c").css('opacity', 0);
            $("#text-9-d").css('opacity', 0);
        }
    }
}
