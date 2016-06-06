function changeActive(section) {
    var sectionList = ['about', 'writing', 'coding', 'contact']
    for (var i = 0; i < sectionList.length; i++) {
        var sec = document.getElementById(sectionList[i]);
        if (sec.classList.contains('active')) {
            var reg = new RegExp('(\\s|^)' + 'active' + '(\\s|$)')
            sec.className = sec.className.replace(reg, '')
        }
    }
    document.getElementById(section).classList.add('active');
}
