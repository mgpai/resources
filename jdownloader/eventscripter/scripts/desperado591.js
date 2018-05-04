// Send email notification (NAS)
// Trigger Required: Package Finished
// Important: Enable "Synchronous execcution" checkbox in top panel

var absender = "nas@domain.de";
var empfaenger = "empfaenger@domain.de";
var inhalt = getPath(JD_HOME + "/package - inhalt.txt");

writeFile(inhalt, "Package Finished: " + package.getName(), true);
callSync("sendmail", "-F", absender, "-t", empfaenger, "<", inhalt);
deleteFile(inhalt, false);
