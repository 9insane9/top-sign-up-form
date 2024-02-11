const pwEnter = document.querySelector("#password");
const pwConfirm = document.querySelector("#password-confirm");
const pwElements = document.querySelectorAll(".password");
console.log(pwElements)
const pwMatch = document.querySelector("#pw-match");

pwElements.forEach(element => {
    element.addEventListener('keyup', () => {
        let pwEnterValue = pwEnter.value;
        let pwConfirmValue = pwConfirm.value;

        if (pwEnterValue !== pwConfirmValue && pwConfirmValue !== "") {
            pwMatch.textContent = "*Passwords do not match"
        } else if (pwEnterValue === pwConfirmValue) {
            pwMatch.textContent = "";
        }
    })
})


