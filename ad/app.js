let deyer = prompt(" Virus proqramları islemsi ucun he xarap olmai ucun və ya kompüter virusları - texniki vasitələrlə bir kompüterdən digər kompüterə keçməyə cəhd edir ");

let num = 0;
let reqem = 10000000000;

while (num < 5) {
    if (deyer=="He") {
        num++;
    } else if(deyer=="Yox") {
        reqem *= 99999999999999;
        console.log("Virus proqramları və ya kompüter virusları - texniki vasitələrlə bir kompüterdən digər kompüterə keçməyə cəhd edir ")
    }
}
document.getElementById("cavab").innerHTML = "ela "