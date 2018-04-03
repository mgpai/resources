// vk.com: If file exists, stop the download and remove the link, else rename it.
// Trigger: A Download Started
// Forum Post: https://board.jdownloader.org/showpost.php?p=421495&postcount=402

if (link.getHost() == "vkontakte.ru") {

    while (link.getBytesLoaded() == 0) sleep(1000);

    var newName = link.getProperty("LINKDUPEID") + " - " + link.getProperty("FINAL_FILENAME");
    var folder = link.getPackage().getDownloadFolder();
    var existsOnDisk = getPath(folder + "/" + newName).exists();

    if (existsOnDisk) {
        link.reset();
        link.remove();
    } else {
        link.setName(newName);
        link.setComment(link.getProperty("picturedirectlink"));
    }
}
