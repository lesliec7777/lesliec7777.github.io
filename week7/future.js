var job = ["Software Engineer","Marketing Manager","UX Designer","Real Estate Agent"];
var city = ["Dallas","Seattle","Denver","Waxahachie"];
var partner = ["Braden","Dalton","Jorge","Nick"];
var numChildrens = [2,1,0,3];

var xx = Math.floor(Math.random() * 4 )


function fortune(job,city,partner,numChildrens) {
document.write("You will be a " + job + " in " + city + ", and married to " + partner + " with " + numChildrens + " kids.");
}

fortune (job[xx],city[xx],partner[xx],numChildrens[xx])
