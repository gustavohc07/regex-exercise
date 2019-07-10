// validation script here

// var reg = /[a-z]/ig;

// Can use it in this following way too:

/* var reg2 = new RegExp([a-z], "i"); */

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/ 
};

//validation function

function validate(field, regex){
    if(regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className ="Invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});




