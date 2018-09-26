// Add Playlist Position to file name
// Trigger: Downloadlist Contextmenu Button Pressed
// Related topic: https://board.jdownloader.org/showthread.php?t=78778
// Customize download list context menu > Add a new "EventScript Trigger" button > Rename it to "Add Playlist Position" (without quotes, case-sensitive)

if (name == "Add Playlist Position") {
    var downloadLinks = dlSelection.getDownloadLinks();
    downloadLinks.forEach(function(link) {
        pos = link.getProperty("YT_PLAYLIST_INT");
        if (pos) link.setName(("0000" + pos).slice(-4) + " - " + link.getName());
    });
}
