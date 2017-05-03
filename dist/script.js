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

class Change extends Scene {

    init() {
        this.element.html('<span>Because they change things.</span>');
    }

    get futura() {
        return true;
    }
}

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

class Genius extends Scene {

    init() {
        this.element.html(`<span id="text-14">we see genius.</span><div class="photograph"><div class="square" style="background-image: url(dist/images/albert.jpg);"></div><span>Albert Einstein</span></div>`);
    }

    get futura() {
        return true;
    }

    update(progress) {
        if (progress < -0.1) {
            $("#scene-14 .photograph").css('transform', `translateY(${this.height * 0.1}px)`);
        } else if (progress >= -0.1) {
            $("#scene-14 .photograph").css('transform', `translateY(${this.height * -progress}px)`);
        } else {
            $("#scene-14 .photograph").css('transform', 'translateY(0px)');
        }

        if (progress < 0) {
            $("#text-14").css('opacity', 1);
        } else if (progress >= 0 && progress < 0.1) {
            let alpha = 1 - progress*10;
            $("#text-14").css('opacity', alpha);
        } else {
            $("#text-14").css('opacity', 0);
        }
    }

    enter() {
        this.sticky = true;
    }

    exit() {
        this.sticky = false;
    }
}

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

class Do extends Scene {

    init() {
        this.element.html(`<span id="text-16">Because the people who are crazy enough to think they can change the world,</span><div class="photograph"><div class="square"><video id="video-me" autoplay="true" id="videoElement"></video></div><span>are the ones who do.</span></div><span id="attribution">— Rob Siltanen</span>`);
        let video = this.element.children('.photograph').children('.square').children('#video-me');

        if (navigator.getUserMedia) {
            navigator.getUserMedia({'video': true}, handleVideo, videoError);
        }

        function handleVideo(stream) {
            video.attr('src', window.URL.createObjectURL(stream));
        }

        function videoError(e) {
            console.log('video error: ', e);
        }
    }

    get futura() {
        return true;
    }
}

class Misfits extends Scene {

    init() {
        this.element.html('<sapn id="text-2">The misfits.</span>');
        this.factor = 0;

        const canvas = this.canvas = d3.select(this.element[0]).append("canvas");
        const context = canvas.node().getContext("2d");
        context.scale(2,2);

        const nodes = d3.range(200).map(function() { return {radius: Math.random() * 20 + 10}; });
        const root = nodes[0];
        root.radius = 0;
        root.fixed = true;

        const force = this.force = d3.layout.force()
            .gravity(0.05)
            .charge(function(d, i) { return i ? 0 : -4000; })
            .nodes(nodes)
            .size([this.element.width(), this.element.height()]);

        force.start();

        const me = this;
        force.on("tick", function(e) {
            let q = d3.geom.quadtree(nodes),
            i,
            d,
            n = nodes.length;

            for (i = 1; i < n; ++i) q.visit(collide(nodes[i]));

            context.clearRect(0, 0, me.element.width()*2, me.element.height()*2);
            context.fillStyle = "black";
            context.beginPath();
            for (i = 1; i < n; ++i) {
                d = nodes[i];
                const dx = d.x;
                const dy = d.y + (-me.factor * me.element.height());
                context.moveTo(
                    dx,
                    dy
                );
                context.arc(dx, dy, d.radius, 0, 2 * Math.PI);
            }
            context.fill();

            root.px = me.element.width();
            root.py = me.factor * me.element.height() + me.element.height();
            force.resume();
        });

        function collide(node) {
            let r = node.radius + 16,
                nx1 = node.x - r,
                nx2 = node.x + r,
                ny1 = node.y - r,
                ny2 = node.y + r;
            return function(quad, x1, y1, x2, y2) {
                if (quad.point && (quad.point !== node)) {
                    let x = node.x - quad.point.x,
                        y = node.y - quad.point.y,
                        l = Math.sqrt(x * x + y * y),
                        r = node.radius + quad.point.radius;
                    if (l < r) {
                        l = (l - r) / l * .5;
                        node.x -= x *= l;
                        node.y -= y *= l;
                        quad.point.x += x;
                        quad.point.y += y;
                    }
                }
                return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            };
        }
    }

    layout() {
        this.canvas.node().width = this.element.width()*2;
        this.canvas.node().height = this.element.height()*2;
        $(this.canvas.node()).css('width', this.element.width());
        $(this.canvas.node()).css('height', this.element.height());

        this.force.size([this.element.width()*2, this.element.height()*2]);
    }

    update(progress) {
        if (progress < -0.8) {
            $("#text-2").css({
                'opacity': 0,
                'transform': `translateY(${this.textAnimationOffset}px)`
            });
            $(this.canvas.node()).css('transform', `translateY(${this.textAnimationOffset*3}px)`);
        } else if (progress >= -0.8 && progress < -0.7) {
            const factor = ((progress + 0.7) * -10);
            $("#text-2").css({
                'opacity': 1 - factor,
                'transform': `translateY(${this.textAnimationOffset*factor}px)`
            });
            $(this.canvas.node()).css({
                'transform': `translateY(${this.textAnimationOffset*factor*3}px)`
            });
        } else if (progress >= -0.7 && progress < 0.5) {
            $("#text-2").css({
                'opacity': 1,
                'transform': 'translateY(0)'
            });
            $(this.canvas.node()).css('transform', 'translateY(0)');
        } else if (progress >= 0.5) {
            const factor = ((progress - 0.5) * 10);
            $("#text-2").css({
                'opacity': 1 - factor,
                'transform': `translateY(${this.textAnimationOffset*-factor}px)`
            });
            $(this.canvas.node()).css('transform', 'translateY(0)');
        }

        if (progress < -0.8) {
            this.factor = -1;
            this.sticky = false;
        } else if (progress >= -0.8 && progress < 0.75) {
            this.sticky = true;
            this.factor = (((progress + 0.8)/1.3)-0.5)*2;
        } else {
            this.sticky = false;
            this.factor = 1;
        }
    }

    exit() {
        this.sticky = false;
    }
}

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

class Troublemakers extends Scene {

    init() {
        this.sound = new Audio("dist/sound/funk.ogg");
    }

    enter() {
        setTimeout(() => {
            alert("The troublemakers.");
            goToScene(5);
            $("story").fadeTo(0, 1);
        },1);
        this.sound.play();
        $("story").fadeTo(0, 0);
    }

    exit() {
        this.sound.pause();
        this.sound.currentTime = 0;
    }
}

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

class SeeDifferently extends Scene {

    init() {
        this.element.html('<span class="fixed-center">The ones who see things differently.</span>');
    }
}

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

class StatusQuo extends Scene {

    init() {
        this.sound = new Audio("dist/sound/status-quo.mp3");
        this.played = false;
    }

    update(progress) {
        if (progress > -0.5 && progress < 0.5) {
            if (this.sound.paused && !this.played) {
                this.sound.currentTime = 0;
                this.sound.play();
                this.played = true;
            }
        }
    }

    exit() {
        this.sound.pause();
        this.played = false;
    }
}

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

const scenesObjects = [
    CrazyOnes, Misfits, Rebels, Troublemakers, RoundPegs, SeeDifferently,
    Rules, StatusQuo, QuoteDisagree, Ignore, Change, Forward, SeeCrazy, Genius,
    Think, Do
];
const storyElement = $('story');
let scenes = [], previousScenes = [], previousScroll, windowHeight;

$(() => {
    scenesObjects.forEach((sceneObject, index) => {
        const scene = new sceneObject(index+1);
        storyElement.append(scene.element);
        scenes.push(scene);
    });

    // windowDidResize();
    $(window).resize(windowDidResize).trigger('resize');
    requestAnimationFrame(tick)
});

function windowDidResize() {
    windowHeight = $(window).height();

    // Update scenes vertical position:
    let currentHeight = 0;
    scenes.forEach(scene => {
        scene.topY = currentHeight;
        currentHeight += scene.height;
        scene.layout();
    });
}

function tick() {
    const scrolled = $(window).scrollTop();
    if (scrolled != previousScroll) {
        const activeScenes = scenesForScroll(scrolled);
        activeScenes.forEach(scene => {
            // Did enter screen:
            if (previousScenes.indexOf(scene) == -1) {
                scene.enter();
            }
            const progress = (scrolled - scene.topY) / scene.height;
            scene.update(progress, scrolled);
        });
        // Exited scenes:
        previousScenes.forEach(scene => {
            if (activeScenes.indexOf(scene) == -1) {
                scene.exit();
            }
        });
        previousScenes = activeScenes;
    }
    previousScroll = scrolled;
    requestAnimationFrame(tick);
}

function scenesForScroll(scrolled) {
    const windowTop = scrolled;
    const windowBottom = scrolled + windowHeight;
    let activeScenes = [];
    $.each(scenes, (index, scene) => {
        if (windowBottom > scene.topY && windowTop < scene.bottomY) {
            activeScenes.push(scene);
        } else if (activeScenes.length) {
            return false;
        }
    });
    return activeScenes;
}

function goToScene(sceneNumber) {
    const index = sceneNumber - 1;
    const scene = scenes[index];
    const top = scene.topY;
    const height = scene.height;
    const scroll = top - height + 1;
    $(window).scrollTop(scroll);
}
