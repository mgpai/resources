 // When package is removed, do something with the extraction folders of each archive in that package
 // Trigger : Package Finished
 // Forum Topic: https://board.jdownloader.org/showpost.php?p=421828&postcount=5

 var extractionFolders = package.getDownloadLinks().map(function(link) {
     var archive = link.getArchive();
     if (archive) return link.getArchive().getExtractToFolder();
 });

 while (packageExists()) sleep(1000);

 extractionFolders.forEach(function(extractionFolder) {
     /* Do something with each extraction folder */
     /* if (extractionFolder) callAsync(null, program, extractionFolder); */
 });

 //Function
 function packageExists() {
     return getAllFilePackages().some(function(filePackage) {
         return filePackage.equals(package);
     });
 }
