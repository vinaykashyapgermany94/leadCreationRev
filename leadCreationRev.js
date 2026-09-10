//console.log('Hallo, Ich bin Vinay');

let captchaFlag = false;

let fieldsChanged = document.addEventListener('change', (evt)=>{

    console.log('evt.target.id :'+evt.target.id);
    console.log('evt.target.value :'+evt.target.value);
    
    let currentFieldId = evt.target.id;
    let currentFieldValue = evt.target.value;

    //define the queryselector/getElementById variables below...
    let first_name_div = document.querySelector('.first_name_div');
    let last_name_div = document.querySelector('.last_name_div');
    let email_div = document.querySelector('.email_div');
    let recaptcha_div = document.querySelector('.recaptcha_div');


    if(currentFieldId == "first_name")
    {
        if(currentFieldValue != '')
        {
            if(first_name_div.firstChild != undefined)
            {
                if(first_name_div.firstChild != undefined)
                {
                    first_name_div.removeChild(first_name_div.firstChild);
                }//end of if
            }//end of if    
        }//end of if    
    }//end of if    
    if(currentFieldId == "last_name")
    {
        if(currentFieldValue != '')
        {
            if(last_name_div.firstChild != undefined)
            {
                if(last_name_div.firstChild != undefined)
                {
                    last_name_div.removeChild(last_name_div.firstChild);
                }//end of if
            }//end of if
        }//end of if           
    }//end of if
    if(currentFieldId == "email")
    {
        if(currentFieldValue != '')
        {
            if(currentFieldValue.indexOf('@') != -1 && currentFieldValue.indexOf('.') != -1)
            {
                if(email_div.firstChild != undefined)
                {
                    email_div.removeChild(email_div.firstChild);
                }//end of if
            }//end of if    
        }//end of if        
    }//end of if

    if(captchaFlag == true)
    {
        if(recaptcha_div.firstChild != undefined)
        {
            recaptcha_div.removeChild(recaptcha_div.firstChild);
        }//end of if
    }//end of if    
});

let formSubmit = document.addEventListener('submit', (evt)=>{

    //stop the default action which is submitting the form ..
    // the purpose of stopping the form submission is for validation
    evt.preventDefault();

    let isValid = true;

    //define the queryselector/getElementById variables below...
    let first_name_div = document.querySelector('.first_name_div');
    let last_name_div = document.querySelector('.last_name_div');
    let email_div = document.querySelector('.email_div');
    let recaptcha_div = document.querySelector('.recaptcha_div');

    let finalForm = document.getElementById('finalForm');
    let first_name = document.getElementById('first_name');
    let last_name = document.getElementById('last_name');
    let email = document.getElementById('email');
    let start_date = document.getElementById('start_date');
    let germanFormattedDateField = document.querySelector('.germanFormattedDate');

    if(first_name.value == '')
    {
        isValid = false;
        let firstNameErrorElement = document.createElement('p');
        firstNameErrorElement.innerText = 'First Name cannot be empty. Please enter a value.';
        if(first_name_div.firstChild != undefined)
        {
            first_name_div.replaceChild(firstNameErrorElement, first_name_div.firstChild);
        }//end of if
        else
        {
            first_name_div.appendChild(firstNameErrorElement);
        }//end of else        
    }//end of if
    if(last_name.value == '')
    {
        isValid = false;
        let lastNameErrorElement = document.createElement('p');
        lastNameErrorElement.innerText = 'Last Name cannot be empty. Please enter a value.';
        if(last_name_div.firstChild != undefined)
        {
            last_name_div.replaceChild(lastNameErrorElement, last_name_div.firstChild);
        }//end of if
        else
        {
            last_name_div.appendChild(lastNameErrorElement);
        }//end of else
    }//end of if
    if(email.value != '')
    {
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
        {
            isValid = false;
            let emailErrorElement = document.createElement('p');
            emailErrorElement.innerText = 'Looks like the email Id is invalid.Please enter a valid email address.. ';
            if(email_div.firstChild != undefined)
            {
                email_div.replaceChild(emailErrorElement, email_div.firstChild);
            }//end of if
            else
            {
                email_div.appendChild(emailErrorElement);
            }//end of else
        }//end of if    
    }//end of if
    if(captchaFlag == false)
    {
        let recaptchaErrorElement = document.createElement('p');
        recaptchaErrorElement.innerText = 'Please select the captcha to prove you are not a robot to submit the form';
        if(recaptcha_div.firstChild != undefined)
        {
            recaptcha_div.replaceChild(recaptchaErrorElement, recaptcha_div.firstChild);   
        }    
        else
        {
            recaptcha_div.appendChild(recaptchaErrorElement);
        }    
    }//end of if    

    if(start_date.value == '')
    {
        let currentDate = new Date();

        let currentDateWithLocale = new Date(currentDate.toLocaleString('de-DE'));
        let year = String(currentDateWithLocale.getFullYear());
        let month = String(currentDateWithLocale.getMonth()+1).padStart(2,'0');
        let date = String(currentDateWithLocale.getDate()).padStart(2,'0');

        let isoDate = `${year}-${month}-${date}`;
        let germanFormattedDate = `${date}.${month}.${year}`;
        console.log('isoDate :'+isoDate);
        console.log('germanFormattedDate :'+germanFormattedDate);

        start_date.value = isoDate;
        germanFormattedDateField.value = germanFormattedDate;
    }//end of if 
    else
    {
        let currentDate = new Date(start_date.value);
        let currentDateWithLocale = new Date(currentDate.toLocaleString("de-DE"));
        let year = String(currentDateWithLocale.getFullYear());
        let month = String(currentDateWithLocale.getMonth()+1).padStart(2,'0');
        let date = String(currentDateWithLocale.getDate()).padStart(2,'0');

        let germanFormattedDate = `${date}.${month}.${year}`;
        console.log('germanFormattedDate :'+germanFormattedDate);

        germanFormattedDateField.value = germanFormattedDate;
    }//end of else     
        
    if(isValid)
    {
        finalForm.submit();
    }//end of if(isValid)        
});

function setRecaptchaFlag()
{
    captchaFlag = true;
}