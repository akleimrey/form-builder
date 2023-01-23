"use strict";
// JSON data
const jsonData = {
    "kind": "form",
    "formId": "fami-bestand-v6",
    "formTitle": "Fragebogen zur Überprüfung der Familienversicherung (Bestandsbogen)",
    "fieldgroups": [
        {
            "kind": "fieldgroup",
            "fieldgroupId": "familienstand",
            "title": "Familienstand",
            "formfields": [
                {
                    "kind": "formfield",
                    "label": "Familienstand",
                    "formfieldId": "familienstand",
                    "type": "SELECT",
                    "options": [
                        {
                            "value": "verheiratet",
                            "label": "verheiratet"
                        },
                        {
                            "value": "geschieden",
                            "label": "geschieden"
                        },
                        {
                            "value": "verwitwet",
                            "label": "verwitwet"
                        },
                        {
                            "value": "eingetr. Lebenspartnerschaft",
                            "label": "ingetr. Lebenspartnerschaft"
                        }
                    ]
                },
                {
                    "kind": "formfield",
                    "label": "Abhängig vom Familienstand (nur bei geschieden)",
                    "formfieldId": "abhaengigVomFamilienstand",
                    "type": "TEXT",
                    "validation": {
                        "maxLength": 40,
                        "visible": "familienstand == 'geschieden'"
                    }
                },
                {
                    "kind": "formfield",
                    "label": "Lastname",
                    "formfieldId": "lastName",
                    "type": "TEXT",
                    "placeholder": "Please put your lastname here",
                    "validation": {
                        "maxLength": 40
                    }
                },
                {
                    "kind": "formfield",
                    "type": "INFOTEXT",
                    "formfieldId": "datumDerHeiratOderScheidung",
                    "text": "Das Datum der Heirat / Scheidung / eingetragenen Lebenspartnerschaft ist erforderlich, sofern gegenüber dem zuletzt abgegebenen Fragebogen eine Änderung eingetreten ist.",
                    "validation": {
                        "visible": "familienstand == 'geschieden' || familienstand == 'verheiratet'"
                    }
                },
                {
                    "kind": "formfield",
                    "type": "INFOTEXT",
                    "formfieldId": "textVerwitwet",
                    "text": "Dieser Text erscheint nur bei verwitwet",
                    "validation": {
                        "visible": "familienstand == 'verwitwet'"
                    }
                }
            ]
        },
        {
            "kind": "fieldgroup",
            "formfieldId": "basisangaben",
            "title": "Basisangaben",
            "formfields": [
                {
                    "kind": "formfield",
                    "label": "Versichertennummer",
                    "formfieldId": "kvnr",
                    "type": "TEXT",
                    "placeholder": "kvnr",
                    "validation": {
                        "maxLength": 10
                    },
                    "prefilled": true
                },
                {
                    "kind": "formfield",
                    "label": "Vorname",
                    "formfieldId": "firstName",
                    "type": "TEXT",
                    "placeholder": "Please put your firstname here",
                    "validation": {
                        "maxLength": 40
                    }
                },
                {
                    "kind": "formfield",
                    "label": "Nachname",
                    "formfieldId": "lastName",
                    "type": "TEXT",
                    "placeholder": "Please put your lastname here",
                    "validation": {
                        "maxLength": 40
                    }
                },
                {
                    "kind": "formfield",
                    "label": "Straße",
                    "formfieldId": "street",
                    "type": "TEXT",
                    "placeholder": "Bitte geben Sie hier Ihre Straße ein",
                    "validation": {
                        "maxLength": 80,
                        "required": true
                    }
                },
                {
                    "kind": "formfield",
                    "label": "Volker",
                    "formfieldId": "volker",
                    "type": "TEXT",
                    "placeholder": "Bitte geben Sie hier Ihren Volker ein",
                    "validation": {
                        "maxLength": 5,
                        "required": true
                    }
                },
                {
                    "kind": "formfield",
                    "label": "Atha",
                    "formfieldId": "atha",
                    "type": "TEXT",
                    "placeholder": "Bitte geben Sie hier Ihren Atha ein",
                    "validation": {
                        "maxLength": 12,
                        "required": true
                    }
                }
            ]
        },
        {
            "kind": "fieldgroup",
            "fieldgroupId": "kind",
            "title": "Angaben zu Kindern",
            "formfields": [
                {
                    "kind": "formfield",
                    "label": "Vorname",
                    "formfieldId": "firstName",
                    "type": "TEXT",
                    "placeholder": "Bitte geben Sie hier den Vornamen des Kindes ein",
                    "validation": {
                        "maxLength": 40
                    }
                },
                {
                    "kind": "formfield",
                    "label": "Nachname",
                    "formfieldId": "lastName",
                    "type": "TEXT",
                    "placeholder": "Bitte geben Sie hier den Nachnamen des Kindes ein",
                    "validation": {
                        "maxLength": 40
                    }
                },
                {
                    "kind": "formfield",
                    "label": "Geburtstag",
                    "formfieldId": "geburtstag",
                    "type": "TEXT",
                    "placeholder": "Bitte geben Sie hier das Geburtsdatum des Kindes ein",
                    "validation": {
                        "maxLength": 10
                    }
                }
            ]
        }
    ]
};

// Create form element
const form = document.createElement("form");
form.setAttribute("id", jsonData.formId);

handleFormChange = (event) => {
    console.log("Form changed:", event);
}

document.querySelector("#your-form-id");
form.addEventListener("change", handleFormChange);

// Create form title element
const formTitle = document.createElement("h1");
formTitle.setAttribute("id", "formTitle");
formTitle.innerHTML = jsonData.formTitle;
form.appendChild(formTitle);

// Create fieldgroup container
const fieldgroupContainer = document.createElement("div");
fieldgroupContainer.setAttribute("id", "fieldgroup-container");
form.appendChild(fieldgroupContainer);

// Iterate through fieldgroups
for (let i = 0; i < jsonData.fieldgroups.length; i++) {
    const fieldgroup = jsonData.fieldgroups[i];

    // Create fieldgroup element
    const fieldgroupDiv = document.createElement("div");
    fieldgroupDiv.setAttribute("class", "fieldgroup");
    fieldgroupDiv.setAttribute("id", fieldgroup.fieldgroupId);
    fieldgroupContainer.appendChild(fieldgroupDiv);

    // Create fieldgroup title element
    const fieldgroupTitle = document.createElement("h2");
    fieldgroupTitle.innerHTML = fieldgroup.title;
    fieldgroupDiv.appendChild(fieldgroupTitle);

    // Iterate through formfields
    for (let j = 0; j < fieldgroup.formfields.length; j++) {
        const formfield = fieldgroup.formfields[j];

        // Create formfield element
        const formfieldDiv = document.createElement("div");
        formfieldDiv.setAttribute("class", "formfield");
        fieldgroupDiv.appendChild(formfieldDiv);

        // Create label element
        const label = document.createElement("label");
        label.setAttribute("for", formfield.formfieldId);
        label.innerHTML = formfield.label;
        formfieldDiv.appendChild(label);

        if (formfield.type === "SELECT") {
            // Create select element
            const select = document.createElement("select");
            select.setAttribute("id", formfield.formfieldId);
            select.setAttribute("name", formfield.formfieldId);
            formfieldDiv.appendChild(select);

            // Iterate through options
            for (let k = 0; k < formfield.options.length; k++) {
                const option = formfield.options[k];
                // Create option element
                const optionElem = document.createElement("option");
                optionElem.setAttribute("value", option.value);
                optionElem.innerHTML = option.label;
                select.appendChild(optionElem);
            }
        } else if (formfield.type === "TEXT") {
            // Create input element
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", formfield.formfieldId);
            input.setAttribute("name", formfield.formfieldId);
            input.setAttribute("placeholder", formfield.placeholder);
            input.setAttribute("maxlength", formfield.validation.maxLength);
            formfieldDiv.appendChild(input);
        } else if (formfield.type === "INFOTEXT") {
            // Create info text element
            const infoText = document.createElement("p");
            infoText.setAttribute("id", formfield.formfieldId);
            infoText.innerHTML = formfield.text;
            formfieldDiv.appendChild(infoText);
        }
    }

    // Create fieldgroup nav element
    const fieldgroupNav = document.createElement("div");
    fieldgroupNav.setAttribute("class", "fieldgroup-nav");
    fieldgroupDiv.appendChild(fieldgroupNav);

    // Create previous button
    if (i !== 0) {
        const prevBtn = document.createElement("button");
        prevBtn.setAttribute("type", "button");
        prevBtn.setAttribute("class", "prev-fieldgroup");
        prevBtn.innerHTML = "Previous";
        fieldgroupNav.appendChild(prevBtn);
    }

    // Create next/submit button
    if (i !== jsonData.fieldgroups.length - 1) {
        const nextBtn = document.createElement("button");
        nextBtn.setAttribute("type", "button");
        nextBtn.setAttribute("class", "next-fieldgroup");
        nextBtn.innerHTML = "Next";
        nextBtn.setAttribute("onclick", `validateFieldGroup("${fieldgroup.fieldgroupId}")`);
        fieldgroupNav.appendChild(nextBtn);
    } else {
        const submitBtn = document.createElement("button");
        submitBtn.setAttribute("type", "submit");
        submitBtn.setAttribute("class", "submit-form");
        submitBtn.innerHTML = "Submit";
        submitBtn.setAttribute("onclick", `validateFieldGroup("${fieldgroup.fieldgroupId}")`);
        fieldgroupNav.appendChild(submitBtn);
    }
}

// Append form to form container
const formContainer = document.getElementById("form-container");
formContainer.appendChild(form);


const checkFieldValidity = (field, errorText) => {
    let isValid = true;
    let errorObj = {
        error: false,
        errorMsg: ""
    };

    // Check if field is empty
    if (field.value === "") {
        isValid = false;
        errorObj.error = true;
        errorObj.errorMsg = errorText;
    }
    // Check max length
    if (field.validation.maxLength) {
        if (field.value.length > field.validation.maxLength) {
            isValid = false;
            errorObj.error = true;
            errorObj.errorMsg = errorText;
        }
    }
    // Check visible
    if (!field.validation.visible) {
        if (!visible) {
            field.parentNode.removeChild(field);
        }
    }

    // Create error message element and append it to the field
    if (!isValid) {
        // check if error message element already exists
        let errorMessage = field.parentNode.querySelector(`#error-${field.id}`)
        if (!errorMessage) {
            errorMessage = document.createElement("div");
            errorMessage.setAttribute("id", `error-${field.id}`);
            errorMessage.setAttribute("class", "error-message");
            field.parentNode.appendChild(errorMessage);
        }
        errorMessage.innerHTML = errorObj.errorMsg;
    } else {
        let errorMessage = field.parentNode.querySelector(`#error-${field.id}`);
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    return errorObj;
}