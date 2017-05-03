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
