// Disable matching files
// Trigger Required: "Toolbar Button Pressed"
// Customize "Main Toolbar", add "EventScripter Trigger" button  and rename it to "Disable Matching" (without quotes/case-sensitve)
// Related Post: https://board.jdownloader.org/showpost.php?p=417486&postcount=289

if (name == "Disable Matching") {
    var list = "c:/downloads/list.txt"; // <- Set  path to text file
    var items = readFile(list).split("\r\n");
    getAllDownloadLinks().concat(getAllCrawledLinks()).forEach(function(link) {
        var name = link.getName();
        var matching = (items.indexOf(name) > -1);
        if (matching) link.setEnabled(false);
    });
}
