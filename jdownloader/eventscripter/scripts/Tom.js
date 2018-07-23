// Rebuild video stream converting dts to ac3
// Trigger Required: A new file has been created
// Forum Topic: https://board.jdownloader.org/showpost.php?p=427834&postcount=489

var ffmpeg = callAPI("config", "get", "org.jdownloader.controlling.ffmpeg.FFmpegSetup", null, "binarypath");
var ffprobe = callAPI("config", "get", "org.jdownloader.controlling.ffmpeg.FFmpegSetup", null, "binarypathprobe");

files.forEach(function(file) {
    if (!callSync(ffprobe, "-i", file).indexOf("Audio: dts") > -1);
    callSync(ffmpeg, "-i", file, "-c:v", "copy", "-c:a", "ac3", file.replace(".mkv", "-ac3.mkv"));
});
