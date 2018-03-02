// Run external command on extracted files & delete archive links from list
// Trigger: "Archive extraction finished"
// Important: Enable 'Syncrhonous execution" checkbox in top panel
// Related Post: https://board.jdownloader.org/showpost.php?p=419505&postcount=358

archive.getExtractedFilePaths().forEach(function(extractedFile) {
    callSync("compact", "/c", "/exe:lzx", extractedFile);
});

archive.getDownloadLinks().forEach(function(link) {
    link.remove();
});
