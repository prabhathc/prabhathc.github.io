function copy() {
    var copytext = "prabhathc@icloud.com";
    copytext.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
