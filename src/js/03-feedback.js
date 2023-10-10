import throttle from "lodash.throttle";
const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const FFS_Key = "feedback-form-state";

const saveEmailMessage = function (event) {
     const obj = {
        email: email.value,
        message: message.value
     }
    localStorage.setItem(FFS_Key, JSON.stringify(obj));
};

form.addEventListener('input', throttle(saveEmailMessage, 500));

const saveValueKey = JSON.parse(localStorage.getItem(FFS_Key));

const updateValueKey = function () {
    if (saveValueKey) {
        email.value = saveValueKey.email;
        message.value = saveValueKey.message;
    } else {
        email.value = "";
        message.value = "";
    } 

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        console.log({ eemail: email.value, message: message.value });
        if (!email.value) {
        return alert `Please fill in all fields.`
    } if (!message.value) {
        return alert `Please fill in all fields.`
    };
  localStorage.removeItem(FFS_Key);
    form.reset();
    });
   
};
updateValueKey();

