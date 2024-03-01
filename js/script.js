const weight = document.querySelector(".input-text1");
const height = document.querySelector(".input-text2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const result = document.querySelector(".results");
const resultsBoxDOM = document.querySelector(".resultsBox");



btn1.addEventListener("click", function () {
    let count = 0;
    let str = '';
    let weightDOM = weight.value;
    let heightDOM = height.value;
    let HTML = `<button onclick="ClearFields();" class="btn2">Reset</button>`;

    
    count += (+((+weightDOM) / (((+heightDOM) / 100) ** 2)).toFixed(1));
    
    /* btn2.textContent.style.display    */
    
    let text = ''; 

    
    if (count < 18.6) {
        text += `Underweight`;
        
    } else if (count >= 18.6 && count < 24.9) {
        text += `Normal`;  
                     
    } else if (count >= 25 && count < 29.9) {
        text += `Overweight`;        
        
    } else {
        text += `Obese`;  
    }
    
    result.innerHTML = `${text} ${count} kg/m2`;
    resultsBoxDOM.innerHTML += HTML;
    
});

function ClearFields() {
    document.getElementById("weightClear").value = "";
    document.getElementById("heightClear").value = "";
    resultsBoxDOM.innerHTML = '';
    
};
// btn2.addEventListener("click", function () {
    //     // weight.textContent = "";
    //     // height.textContent = "";
    //     console.log(weight.value);
    //     console.log(height.value);
// });

