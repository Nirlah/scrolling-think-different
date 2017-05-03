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
