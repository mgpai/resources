// Convert dts to ac3 audio and create new video file
// Trigger Required: A new file has been created
// Forum Topic: https://board.jdownloader.org/showpost.php?p=427834&postcount=489

var ffmpeg = callAPI("config", "get", "org.jdownloader.controlling.ffmpeg.FFmpegSetup", null, "binarypath");
var ffprobe = callAPI("config", "get", "org.jdownloader.controlling.ffmpeg.FFmpegSetup", null, "binarypathprobe");

files.forEach(function(file) {
    if (callSync(ffprobe, "-i", file).indexOf("Audio: dts") == -1) return;
    callSync(ffmpeg, "-i", file, "-map", "0", "-vcodec", "copy", "-scodec", "copy", "-acodec", "ac3", "-b:a", "640k", file.replace(".mkv", "-ac3.mkv"));
});
