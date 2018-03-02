// Run external command on extracted files
// Trigger: "Archive extraction finished"
// Important: Enable 'Syncrhonous execution" checkbox in top panel
// Related Post: https://board.jdownloader.org/showpost.php?p=419505&postcount=358

archive.getExtractedFilePaths().forEach(function(extractedFile) {
    callSync("compact", "/c", "/exe:lzx", extractedFile);
});
