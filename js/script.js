let personData = [];

let jsDOM = {
    data: {
        fname: document.getElementById('fNameInput'),
        lname: document.getElementById('lNameInput'),
        email: document.getElementById('emailInput'),
        phone: document.getElementById('phoneNumInput'),
        city: document.getElementById('cityInput'),
        message: document.getElementById('messageInput')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
}

let jsFunc = {
    myFunction: () => {
        jsDOM.fnameOutput.innerHTML = `First Name: ${jsDOM.fname.value}`;
        jsDOM.lnameOutput.innerHTML = `Last Name: ${jsDOM.lname.value}`;
        jsDOM.emailOutput.innerHTML = `Email: ${jsDOM.email.value}`;
        jsDOM.phoneNumOutput.innerHTML = `Phone Number: ${jsDOM.phone.value}`;
        jsDOM.city.innerHTML = `City: ${jsDOM.city.value}`;
        jsDOM.messageOutput.innerHTML = `Message: ${jsDOM.message.value}`;
    },
    showData: () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';

        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);

        let fullname, email, phone, city, message;

        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}`, email = x.email, phone = x.phone, city = x.city, message = x.message;
            let personData = document.createElement('p');
            let personDataText = document.createTextNode(`Name: ${fullname}\u00A0\u00A0\u00A0\u00A0
            \u00A0Email:${email}\u00A0\u00A0\u00A0\u00A0
            Phone Number:${phone}\u00A0\u00A0\u00A0\u00A0
            \u00A0City:${city}\u00A0\u00A0\u00A0\u00A0
            Message:${message}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
        })
        parentDiv.appendChild(node);
    },
    clearFields: () => {
        jsDOM.data.fname.value = "";
        jsDOM.data.lname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phone.value = "";
        jsDOM.data.city.value = "";
        jsDOM.data.message.value = "";
    },
    addData: () => {
        personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value,  phone: jsDOM.data.phone.value, city: jsDOM.data.city.value, message: jsDOM.data.message.value });
        jsFunc.clearFields(); 
    }

} 

jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);