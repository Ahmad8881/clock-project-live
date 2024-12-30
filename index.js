

function change() {
    let time2 = document.getElementsByClassName("one1")[0]; // Select the second paragraph with class "one1"
    let time3 = document.getElementsByClassName("one1")[1];
    let time4 = document.getElementsByClassName("one1")[2];
    let time5 = document.getElementsByClassName("one1")[3];

    let option = document.querySelector(".one");
    let option1 = document.querySelector(".two");
    let option2 = document.querySelector(".three");
    let option3 = document.querySelector(".four"); // Select the option tag with class "four"


    time2.innerHTML = "wake up time: " + option.value;
    time3.innerHTML = "lunch time: " + option1.value;
    time4.innerHTML = "nap time: " + option2.value;
    time5.innerHTML = "sleep time: " + option3.value;

    document.querySelector(".one").addEventListener("change", change);
    document.querySelector(".two").addEventListener("change", change);
    document.querySelector(".three").addEventListener("change", change);
    document.querySelector(".four").addEventListener("change", change);

}

function showTime() {

    var date = new Date();
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var am = h >= 12 ? 'PM' : 'AM';

    h = h % 12 || 12;

    document.getElementById("a1").innerHTML = h
    document.getElementById("a2").innerHTML = m
    document.getElementById("a3").innerHTML = s
    document.getElementById("a4").innerHTML = am



    setTimeout(showTime, 1000)
}
showTime()


// const imageElement = document.getElementById('image');
// if (h >= 6 && h < 12) {
//     // Morning
//     imageElement.src = 'morning.jpg';
//     imageElement.alt = 'Morning Scene';
// } else if (h >= 12 && h < 17) {
//     // Afternoon
//     imageElement.src = 'afternoon.jpg';
//     imageElement.alt = 'Afternoon Scene';
// } else if (h >= 17 && h < 20) {
//     // Evening
//     imageElement.src = 'evening.jpg';
//     imageElement.alt = 'Evening Scene';
// } else {
//     // Night
//     imageElement.src = 'night.jpg';
//     imageElement.alt = 'Night Scene';
// }
