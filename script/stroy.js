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
