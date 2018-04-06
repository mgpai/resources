// Do something when package is removed
// Trigger : Package Finished
// Forum Topic: https://board.jdownloader.org/showpost.php?p=421828&postcount=5

while (packageExists()) sleep(1000);

/*
Code to do something goes here.
*/

//Function
function packageExists() {
    return getAllFilePackages().some(function(package) {
        return package.equals(package);
    });
}
