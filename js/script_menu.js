function Evacuation(){
    document.getElementById('Evacuation').style.display = 'block';
    document.getElementById('Sto').style.display = 'none';
    document.getElementById('Auto_park').style.display = 'none';

    // redakt knopk_active
    document.getElementById('Evacuation_a').style.color = "#fff";
    document.getElementById('Evacuation_a').style.backgroundColor = "#f03738";
    document.getElementById('Evacuation_a').style.border = "4px solid #f03738";
    // redakt knopk_inakrive
    document.getElementById('Sto_a').style.color = "#FBCDCD";
    document.getElementById('Sto_a').style.backgroundColor = "#ffffff00";
    document.getElementById('Sto_a').style.border = "4px solid #FBCDCD";

    document.getElementById('Auto_park_a').style.color = "#FBCDCD";
    document.getElementById('Auto_park_a').style.backgroundColor = "#ffffff00";
    document.getElementById('Auto_park_a').style.border = "4px solid #FBCDCD";
}

function Sto(){
    document.getElementById('Evacuation').style.display = 'none';
    document.getElementById('Sto').style.display = 'block';
    document.getElementById('Auto_park').style.display = 'none';

    // redakt knopk_active
    document.getElementById('Sto_a').style.color = "#fff";
    document.getElementById('Sto_a').style.backgroundColor = "#f03738";
    document.getElementById('Sto_a').style.border = "4px solid #f03738";
    // redakt knopk_inakrive
    document.getElementById('Evacuation_a').style.color = "#FBCDCD";
    document.getElementById('Evacuation_a').style.backgroundColor = "#ffffff00";
    document.getElementById('Evacuation_a').style.border = "4px solid #FBCDCD";

    document.getElementById('Auto_park_a').style.color = "#FBCDCD";
    document.getElementById('Auto_park_a').style.backgroundColor = "#ffffff00";
    document.getElementById('Auto_park_a').style.border = "4px solid #FBCDCD";
}

function Auto_park(){
    document.getElementById('Evacuation').style.display = 'none';
    document.getElementById('Sto').style.display = 'none';
    document.getElementById('Auto_park').style.display = 'block';

    // redakt knopk_active
    document.getElementById('Auto_park_a').style.color = "#fff";
    document.getElementById('Auto_park_a').style.backgroundColor = "#f03738";
    document.getElementById('Auto_park_a').style.border = "4px solid #f03738";
    // redakt knopk_inakrive
    document.getElementById('Evacuation_a').style.color = "#FBCDCD";
    document.getElementById('Evacuation_a').style.backgroundColor = "#ffffff00";
    document.getElementById('Evacuation_a').style.border = "4px solid #FBCDCD";

    document.getElementById('Sto_a').style.color = "#FBCDCD";
    document.getElementById('Sto_a').style.backgroundColor = "#ffffff00";
    document.getElementById('Sto_a').style.border = "4px solid #FBCDCD";
}