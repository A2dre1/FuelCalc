function fuelCalc() {

    if (document.getElementById('НайтиОбъём').checked) {
        var Расстояние = getFieldFloatValue("Расстояние");
        var Расход = getFieldFloatValue("Расход");
        var Стоимость = getFieldFloatValue("Стоимость");
        Объём = document.getElementById("Объём");
        Итог = document.getElementById("Итог");

        var a;
        {a = Расход / 100;}
        {
            Объём.value = round(Расстояние * a, 2);
            Итог.value = round(Расстояние * a * Стоимость, 2);
        }	
    }
    else if (document.getElementById('НайтиРасстояние').checked) {
        var Расход = getFieldFloatValue("Расход");
        var Стоимость = getFieldFloatValue("Стоимость");
        var Объём = getFieldFloatValue("Объём");
        Расстояние = document.getElementById("Расстояние");
        Итог = document.getElementById("Итог");

        var b;
        {b = Расход / 100;}
        {
            Расстояние.value = round(Объём / b , 2);
            Итог.value = round(Объём * Стоимость, 2);
        }
    }
    else if (document.getElementById('НайтиРасход').checked) {
        var Расстояние = getFieldFloatValue("Расстояние"); 
        var Объём = getFieldFloatValue("Объём"); 
        var Стоимость = getFieldFloatValue("Стоимость"); 
        Расход = document.getElementById("Расход"); 
        Итог = document.getElementById("Итог"); 

        var c;
        {c = 100;}
        {
            Расход.value = round(Объём * c / Расстояние, 2);
            Итог.value = round(Объём * Стоимость, 2);
        }
    }
}

function getFieldFloatValue(fieldId) {
    return parseFloat(document.getElementById(fieldId).value.replace("\,","."));
}

function round(n,dec)
{
	X = n * Math.pow(10,dec);
	X= Math.round(X);
	return (X / Math.pow(10,dec)).toFixed(dec);
}