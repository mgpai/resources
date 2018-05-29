// Play sound when new links added (per job)
// Trigger: Remote API Event fired
// Forum Topic: https://board.jdownloader.org/showthread.php?t=77649

(function() {
    if (event.publisher != "linkcrawler") return;
    if (event.id != "STOPPED") return;
    if (!JSON.parse(event.data).links) return;
    playWavAudio(JD_HOME + "/themes/standard/org/jdownloader/sounds/captcha.wav");
})();
