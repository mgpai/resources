// Send email notification (NAS)
// Trigger Required: A Download Stopped
// Important: Enable "Synchronous execcution" checkbox in top panel

if (link.isFinished()) {
    var absender = "nas@domain.de";
    var empfaenger = "empfaenger@domain.de";
    var inhalt = getPath(JD_HOME + "/link - inhalt.txt");

    writeFile(inhalt, "Link Finished: " + link.getName(), true);
    callSync("sendmail", "-F", absender, "-t", empfaenger, "<", inhalt);
    deleteFile(inhalt, false);
}
