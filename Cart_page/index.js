let count1 = 1;
let count2 = 1;
let count3 = 1;
let total1 = 5;
let total2 = 9;
let total3 = 4;

// Items 1
document.getElementById("decrease1").onclick = function () {
  count1--;
  if (count1 < 0) count1 = 0;
  document.getElementById("labelText1").innerHTML = count1;
  document.getElementById("total-1").innerHTML = count1 * 5;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};

document.getElementById("increase1").onclick = function () {
  count1++;
  document.getElementById("labelText1").innerHTML = count1;
  document.getElementById("total-1").innerHTML = count1 * 5;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};

document.getElementById("delete-1").onclick = function () {
  count1 = 0;
  document.getElementById("labelText1").innerHTML = 0;
  document.getElementById("total-1").innerHTML = 0;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};

// Items 2
document.getElementById("decrease2").onclick = function () {
  count2--;
  if (count2 < 0) count2 = 0;
  document.getElementById("labelText2").innerHTML = count2;
  document.getElementById("total-2").innerHTML = count2 * 9;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};

document.getElementById("increase2").onclick = function () {
  count2++;
  document.getElementById("labelText2").innerHTML = count2;
  document.getElementById("total-2").innerHTML = count2 * 9;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};

document.getElementById("delete-2").onclick = function () {
  count2 = 0;
  document.getElementById("labelText2").innerHTML = 0;
  document.getElementById("total-2").innerHTML = 0;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};

// Items 3
document.getElementById("decrease3").onclick = function () {
  count3--;
  if (count3 < 0) count3 = 0;
  document.getElementById("labelText3").innerHTML = count3;
  document.getElementById("total-3").innerHTML = count3 * 4;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};

document.getElementById("increase3").onclick = function () {
  count3++;
  document.getElementById("labelText3").innerHTML = count3;
  document.getElementById("total-3").innerHTML = count3 * 4;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};

document.getElementById("delete-3").onclick = function () {
  count3 = 0;
  document.getElementById("labelText3").innerHTML = 0;
  document.getElementById("total-3").innerHTML = 0;
  document.getElementById("total-all").innerHTML =
    count1 * 5 + count2 * 9 + count3 * 4;
};
