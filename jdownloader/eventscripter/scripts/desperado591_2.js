// Send email notification (NAS)
// Trigger Required: Archive Extracton Finished
// Important: Enable "Synchronous execcution" checkbox in top panel

var absender = "nas@domain.de";
var empfaenger = "empfaenger@domain.de";
var inhalt = getPath(JD_HOME + "/archive - inhalt.txt");

writeFile(inhalt, "Extraction Finished: " + archive.getName(), true);
callSync("sendmail", "-F", absender, "-t", empfaenger, "<", inhalt);
deleteFile(inhalt, false);
