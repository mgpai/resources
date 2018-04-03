// Rename link/file on  vk.com
// Trigger: A Download Stopped
// Forum Post: https://board.jdownloader.org/showpost.php?p=420584&postcount=2614

var newName = link.getProperty("LINKDUPEID") + " - " + link.getProperty("FINAL_FILENAME");
var folder = link.getPackage().getDownloadFolder();
var existsOnDisk = getPath(folder + "/" + newName).exists();

if (!existsOnDisk) {
    link.setName(link.getProperty("LINKDUPEID") + " - " + link.getProperty("FINAL_FILENAME"));
    link.setComment(link.getProperty("picturedirectlink"));
}
