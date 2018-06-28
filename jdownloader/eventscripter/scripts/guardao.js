// Open container link in browser
// Trigger: Downloadlist Contextmenu Button Pressed
// Customize download list menu > Add new Eventscripter trigger button > Rename it to "Open Container URL" (without quotes)

if (name == "Open Container URL") {
    var link = dlSelection.getContextLink();
    var container = link.getContainerURL();
    if (container) {
        openURL(container);
    } else {
        alert("This link has no container URL");
    }
}
