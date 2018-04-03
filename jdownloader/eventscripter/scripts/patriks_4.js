// vk.com: If file exists ski,p else rename
// Trigger: A Download Stopped
// Forum Post: https://board.jdownloader.org/showpost.php?p=420584&postcount=2614

if (link.getHost() == "vkontakte.ru") {

    while (link.getBytesLoaded() == 0) sleep(1000);

    var newName = link.getProperty("LINKDUPEID") + " - " + link.getProperty("FINAL_FILENAME");
    var folder = link.getPackage().getDownloadFolder();
    var existsOnDisk = getPath(folder + "/" + newName).exists();

    if (existsOnDisk) {
        link.reset();
        link.remove();
    } else {
        link.setName(link.getProperty("LINKDUPEID") + " - " + link.getProperty("FINAL_FILENAME"));
        link.setComment(link.getProperty("picturedirectlink"));
    }
}
