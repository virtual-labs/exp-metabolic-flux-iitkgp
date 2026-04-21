function restartexp() {
    window.location.reload();
}

function showselectedplant() {
    document.getElementById("plantcss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").setAttribute("onclick", "showplanttisse()");
}

function showplanttisse() {
    document.getElementById("planttissueleafcss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("checkbox1").disabled = false;
    document.getElementById("checkbox2").disabled = false;
    document.getElementById("checkbox3").disabled = false;
    document.getElementById("checkbox4").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").setAttribute("onclick", "enablecheckboxes()");
}

function enablecheckboxes() {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");
    var checkbox4 = document.getElementById("checkbox4");
    if ((checkbox1.checked) && (checkbox2.checked) && (checkbox3.checked) && (checkbox4.checked)) {
        document.getElementById("btn4").disabled = false;
        document.getElementById("btn4").setAttribute("onclick", "expgoal()");
        document.getElementById("checkbox5").setAttribute("onclick", "expgoalcheckbox()");
        $('#showalerttxt').modal('show');
        $('.modal-body').text('Correct growth conditions are selected');
        //alert("Correct growth conditions are selected");
        document.getElementById("checkbox5").disabled = false;
        document.getElementById("btn3").disabled = true;

    }
    else {
        document.getElementById("btn4").disabled = true;
        $('#showalerttxt').modal('show');
        $('.modal-body').text('Select growth conditions');
       
    }

}
function expgoal() {
    var checkbox5 = document.getElementById("checkbox5");
    if ((checkbox5.checked)) {
        document.getElementById("btn5").disabled = false;
        document.getElementById("btn5").setAttribute("onclick", "selectisotope()");

    }
    else {
        document.getElementById("btn5").disabled = true;
        $('#showalerttxt').modal('show');
        $('.modal-body').text('Select experiment goal');
        //alert("Select experiment goal");
    }
}

function expgoalcheckbox() {
    var checkbox5 = document.getElementById("checkbox5");
    if ((checkbox5.checked)) {
        document.getElementById("btn5").disabled = false;
        document.getElementById("btn5").setAttribute("onchange", "selectisotope()");
        document.getElementById("btn4").disabled = true;
    }
    else {
        document.getElementById("btn5").disabled = true;
        $('#showalerttxt').modal('show');
        $('.modal-body').text('Select experiment goal');
    }
}


function selectisotope() {
    var optionsisotope = document.getElementById("btn5");
    if (optionsisotope.options[optionsisotope.selectedIndex].value == 0) {

        $('#showalerttxt').modal('show');
        $('.modal-body').text('Select Isotope Labelling ');
        document.getElementById("btn6").disabled = true;

    }

    if (optionsisotope.options[optionsisotope.selectedIndex].value == 1) {

        $('#showalerttxt').modal('show');
        $('.modal-body').text('Correct Isotope Labelling is selected');
        document.getElementById("btn6").disabled = false;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").setAttribute("onchange", "selectduration()");
    }
    if (optionsisotope.options[optionsisotope.selectedIndex].value == 2) {
        $('#showalerttxt').modal('show');
        $('.modal-body').text('Incorrect Isotope Labelling is selected');

        document.getElementById("btn6").disabled = true;

    }
    if (optionsisotope.options[optionsisotope.selectedIndex].value == 3) {
        $('#showalerttxt').modal('show');
        $('.modal-body').text('Incorrect Isotope Labelling is selected');
        //alert("Incorrect Isotope Labelling is selected");
        document.getElementById("btn6").disabled = true;

    }

}


function selectduration() {
    var optionsduration = document.getElementById("btn6");
    if (optionsduration.options[optionsduration.selectedIndex].value == 0) {

        $('#showalerttxt').modal('show');
        $('.modal-body').text('Select labelling duration');
        document.getElementById("btn7").disabled = true;

    }

    if (optionsduration.options[optionsduration.selectedIndex].value == 1) {

        $('#showalerttxt').modal('show');
        $('.modal-body').text('Correct labelling duration is selected');

        $('#shownote').modal('show');
        $('.modal-body').text('Till this step, all the experimental goals, conditions and parameters are finalised.');
        document.getElementById("btn7").disabled = false;
        document.getElementById("btn7").setAttribute("onclick", "btn7click()");
        document.getElementById("btn6").disabled = true;
    }
    if (optionsduration.options[optionsduration.selectedIndex].value == 2) {
        
         $('#showalerttxt').modal('show');
        $('.modal-body').text('Incorrect labelling duration is selected');
        document.getElementById("btn7").disabled = true;

    }
    if (optionsduration.options[optionsduration.selectedIndex].value == 3) {
        $('#showalerttxt').modal('show');
        $('.modal-body').text('Incorrect labelling duration is selected');
        document.getElementById("btn7").disabled = true;

    }

}

function btn7click() {
    document.getElementById("planttissueleafcss").style.display = "none";
    document.getElementById("incubatorcss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn7").disabled = true;
    document.getElementById("btn8").setAttribute("onclick", "btn8click()");
}

function btn8click() {

    document.getElementById("incubatorcss").style.display = "none";
    document.getElementById("incubatorcss1").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn9").disabled = false;
    document.getElementById("btn8").disabled = true;
    document.getElementById("btn9").setAttribute("onclick", "btn9click()");
}

function btn9click() {
    document.getElementById("incubatorcss1").style.display = "none";
    document.getElementById("harvetplanttissuecss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn10").disabled = false;
    document.getElementById("btn9").disabled = true;
    $('#shownote').modal('show');
    $('.modal-body').text('Till this step, the plants are grown in controlled conditions, and then exposed to the 13C labelled CO2 and then the tissue samples are harvested at different time points for analysis.');
    document.getElementById("btn10").setAttribute("onclick", "btn10click()");
}

function btn10click() {
    document.getElementById("harvetplanttissuecss").style.display = "none";
    document.getElementById("freezetissuesamplesn2css").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn11").disabled = false;
    document.getElementById("btn10").disabled = true;
    $('#shownote').modal('show');
    $('.modal-body').text('The samples harvested at different time points are flash frozen with liquid nitrogen and then stored in -80ºC until further analysis. This is done to totally cease all the metabolic processes in the tissue samples and locks them in a particular metabolic stage.');
    document.getElementById("btn11").setAttribute("onclick", "btn11click()");
}

function btn11click() {
    document.getElementById("freezetissuesamplesn2css").style.display = "none";
    document.getElementById("extractfrozensamplescss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn12").disabled = false;
    document.getElementById("btn11").disabled = true;
    $('#shownote').modal('show');
    $('.modal-body').text('The metabolites are harvested from each time point tissue samples will be analysed for the differences in them. Different time points will give us the progression of the labelled 13C carbon in the isolated metabolites.');
    document.getElementById("btn12").setAttribute("onclick", "btn12click()");
}

function btn12click() {
    document.getElementById("extractfrozensamplescss").style.display = "none";
    document.getElementById("quantifymetaboliccss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn13").disabled = false;
    document.getElementById("btn12").disabled = true;
    $('#shownote').modal('show');
    $('.modal-body').text('The metabolites isolated from the different time point tissue samples were identified, and analysed by analytical techniques like GC-MS, LC-MS, HPLC etc, and their differences in quality and quantity at the different time points are monitored. ');
    document.getElementById("btn13").setAttribute("onclick", "btn13click()");
}
function btn13click() {
    document.getElementById("quantifymetaboliccss").style.display = "none";
    document.getElementById("generatemetaboliccss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn14").disabled = false;
    document.getElementById("btn13").disabled = true;

    document.getElementById("btn14").setAttribute("onclick", "btn14click()");
}


function btn14click() {
    document.getElementById("generatemetaboliccss").style.display = "block";
    document.getElementById("softwarepccss").style.display = "block";
    window.scrollBy(0, 1500);
    $('#shownote').modal('show');
    $('.modal-body').text('Based on the progression (flux) of the labelled 13C carbon, the metabolic model of the pathway is generated. Then softwares like 13CFLUX2, OpenFLUX, etc., are used to validate the metabolic model and analyse the metabolic flux data.');
    document.getElementById("btn14").disabled = true;

}

function hidenotemsg() {
    document.getElementById("shownote").style.display = "none";
    document.getElementById("shownote").classList.remove("show");

}

function hidenotemsg() {
    document.getElementById("showalerttxt").style.display = "none";
    document.getElementById("showalerttxt").classList.remove("show");

}