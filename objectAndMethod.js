var myInfo = {
    firstName: "Jayesh",
    lstName: "Seth",
    isProgrammer: true,
    knownLanguages: [],
    programmingLangs: function(languages) {
        this.knownLanguages.push(languages);
    },
    langsCount: function() {
        return `${this.firstName} knows ${this.knownLanguages.length} programming languages`
    }
};

console.log(myInfo.langsCount());
myInfo.programmingLangs("Kotlin", "JS", "Python");
console.log(myInfo.langsCount());
console.log(myInfo.knownLanguages);
