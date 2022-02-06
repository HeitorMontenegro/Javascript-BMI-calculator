const checkbox = document.getElementById('checkbox');
const height = document.getElementById('userHeight');
const weight = document.getElementById('userWeight');

const heightLabel = document.getElementById('heightLabel');
const weightLabel = document.getElementById('weightLabel');

const submitButton = document.getElementById('submitBtn')
const heightToggleButton = document.getElementById('heightBtn')
const weightToggleButton = document.getElementById('weightBtn')
const heightToggleLabel = document.getElementById('heightBtnLabel')
const weightToggleLabel = document.getElementById('weightBtnLabel')

heightToggleButton.style.display = 'none';
weightToggleButton.style.display = 'none';
heightToggleLabel.style.display = 'none';
weightToggleLabel.style.display = 'none';


submitButton.addEventListener('click', getValues);


function toggleButton (){
    if (heightToggleButton.style.display === 'none'){

        heightToggleButton.style.display = 'inline';
        heightToggleLabel.style.display = 'inline';
        heightLabel.style.width = "22.5%";
        userHeight.style.width = "22.5%";
        heightToggleButton.style.width = "22.5%";
        heightToggleLabel.style.width = "22.5%";

        weightToggleButton.style.display = 'inline';
        weightToggleLabel.style.display = 'inline';
        weightLabel.style.width = "22.5%";
        userWeight.style.width = "22.5%";
        weightToggleButton.style.width = "22.5%";
        weightToggleLabel.style.width = "22.5%";




    }
    else{
        userHeight.style.width = "55%";
        heightLabel.style.width = "45%";
        userWeight.style.width = "55%";
        weightLabel.style.width = "45%";

        heightToggleButton.style.display = 'none';
        heightToggleLabel.style.display = 'none'; 
        weightToggleButton.style.display = 'none';
        weightToggleLabel.style.display = 'none';
    }
}

function changePerspective(){
    if (checkbox.checked){
    weightLabel.innerHTML = "Lbs";
    heightLabel.innerHTML = "Feet";
    heightLabel.style.width = "120%";
    height.value = "";
    weight.value = "";
    toggleButton();
    }

    else{
        weightLabel.innerHTML = "Quilograms";
        heightLabel.innerHTML = "Centimeters";
        heightLabel.style.width = "45%";
        height.value = "";
        weight.value = "";
        heightToggleButton.value = "";
        weightToggleButton.value = "";
        toggleButton();
    }
}


function getValues(){
if((height.value !== '' || heightToggleButton.value !== '') && (weight.value !== '' || weightToggleButton.value !== '')){

    let bmiValue;
    heightValue = height.value.replace(',','.').replace('','0');
    weightValue = weight.value.replace(',','.').replace('','0');
    heightToggleButtonValue = heightToggleButton.value.replace(',','.').replace('','0');
    weightToggleButtonValue = weightToggleButton.value.replace(',','.').replace('','0');

    if (heightToggleButton.style.display === 'none'){
        let heightValueMetric = parseFloat(heightValue) / 100;
        let weightValueMetric = parseFloat(weightValue);

        bmiValue = ((weightValueMetric)/(Math.pow(heightValueMetric, 2)));
        document.getElementById('bmiRes').innerHTML = `Your BMI: ${bmiValue.toFixed(1)}`;
    }

    else{
        let heightValueImperial = parseFloat(heightValue) * 12 + parseFloat(heightToggleButtonValue); 
        let weightValueImperial = parseFloat(weightValue) + parseFloat((weightToggleButtonValue)/16);

        console.log(heightValueImperial);
        console.log(weightValueImperial);

        bmiValue = ((weightValueImperial)/(Math.pow(heightValueImperial, 2))) * 703;
        document.getElementById('bmiRes').innerHTML = `Your BMI: ${bmiValue.toFixed(1)}`;
    }


    let bmiInfo = document.getElementById('bmiInfo');
    let infoAboutCategorie;

if (bmiValue < 18.5){
    categorie = "underweight";
    infoAboutCategorie = "I'm sorry! Have you considered getting a diet and exercising? Go see a doctor for the best of your health, just in case! <3 :)"
}
if ((bmiValue >= 18.5) && (bmiValue < 25)){
    categorie = "healthy";
    infoAboutCategorie = "I'm so proud of you! :) <3"
}

if ((bmiValue >= 25) && (bmiValue < 29.9)){
    categorie = "overweight";
    infoAboutCategorie = "I'm sorry! Have you considered getting a diet and exercising? Go see a doctor for the best of your health, just in case! <3 :)"
}

if (bmiValue >= 30){
    categorie = "obese";
    infoAboutCategorie = "I'm sorry! Have you considered getting a diet and exercising? Go see a doctor for the best of your health, just in case! <3 :)"
}

bmiInfo.innerHTML = `You are categorized as ${categorie}. ${infoAboutCategorie}`;





}
else{
    alert('Please, insert valid values!')
}
}



