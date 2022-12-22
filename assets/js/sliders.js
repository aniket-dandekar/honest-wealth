var slider = document.getElementById("Years");
var output = document.getElementById("years-txt");
output.value = slider.value;
slider.oninput = function () {
    output.value = this.value;
}

var slider_c = document.getElementById("Cost");
var output_c = document.getElementById("cost-txt");
output_c.value = slider_c.value;
slider_c.oninput = function () {
    output_c.value = this.value;
}

var slider_pv = document.getElementById("PV");
var output_pv = document.getElementById("PV-txt");
output_pv.value = slider_pv.value;
slider_pv.oninput = function () {
    output_pv.value = this.value;
}

var slider_inf = document.getElementById("inflation");
var output_inf = document.getElementById("inflation-txt");
output_inf.value = slider_inf.value;
slider_inf.oninput = function () {
    output_inf.value = this.value;
}

var slider_r = document.getElementById("ror");
var output_r = document.getElementById("ror-txt");
output_r.value = slider_r.value;
slider_r.oninput = function () {
    output_r.value = this.value;
}

var slider_p = document.getElementById("Percentage");
var output_p = document.getElementById("Percentage-txt");
output_p.value = slider_p.value;
slider_p.oninput = function () {
    output_p.value = this.value;
}

var slider_Age = document.getElementById("Age");
var output_Age = document.getElementById("Age-txt");
output_Age.value = slider_Age.value;
slider_Age.oninput = function () {
    output_Age.value = this.value;
}

var slider_RAge = document.getElementById("RAge");
var output_RAge = document.getElementById("RAge-txt");
output_RAge.value = slider_RAge.value;
slider_RAge.oninput = function () {
    output_RAge.value = this.value;
}


var slider_LAge = document.getElementById("LAge");
var output_LAge = document.getElementById("LAge-txt");
output_LAge.value = slider_LAge.value;
slider_LAge.oninput = function () {
    output_LAge.value = this.value;
}

var slider_pri = document.getElementById("pri");
var output_pri = document.getElementById("pri-txt");
output_pri.value = slider_pri.value;
slider_pri.oninput = function () {
    output_pri.value = this.value;
}

var slider_Expense = document.getElementById("Expense");
var output_Expense = document.getElementById("Expense-txt");
output_Expense.value = slider_Expense.value;
slider_Expense.oninput = function () {
    output_Expense.value = this.value;
}

var slider_roi = document.getElementById("roi");
var output_roi = document.getElementById("roi-txt");
output_roi.value = slider_roi.value;
slider_roi.oninput = function () {
    output_roi.value = this.value;
}

var slider_expected = document.getElementById("expected");
var output_expected = document.getElementById("expected-txt");
output_expected.value = slider_expected.value;
slider_expected.oninput = function () {
    output_expected.value = this.value;
}