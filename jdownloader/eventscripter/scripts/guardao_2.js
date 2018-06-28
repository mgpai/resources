// Open url in browser
// Trigger: Downloadlist Contextmenu Button Pressed
// Customize download list menu > Add new Eventscripter trigger button > Rename it to "Open URL" (without quotes)

if (name == "Open URL") {
    var link = dlSelection.getContextLink();
    var url = link.getOriginURL() || link.getReferrerURL() || link.getContainerURL() || link.getContentURL();
    openURL(url);
}
