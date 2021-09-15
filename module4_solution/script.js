/*
Solution of assignment 4:

Expected output:

Hello laxmy
Good Bye raj
Good Bye hari
Good Bye harish
Hello san
Hello sui
Hello sona
Hello angel
Hello akan
Good Bye shiva
*/

(function() {
    var names = ["laxmy", "raj", "hari", "harish", "san", "sui", "sona", "angel", "akan", "shiva"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
