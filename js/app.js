
(function(){
    // check fields and hide the submit button
    document.addEventListener("DOMContentLoaded", function() {
        const display = new Display();
        display.checkFields();
        display.hideSubmit();
    });
    //add customer when click Submit button
    document.getElementById('customer-form').addEventListener('submit', function(event){
        event.preventDefault();

        const name = this.querySelector('.name');
        const email = this.querySelector('.email');
        const course = this.querySelector('.course');

        const customer = new Customer(name.value, email.value, course.value);
        const display = new Display();
        // display.feedback(customer);
        display.clearFields();

    });
    // display
    function Display(){
        this.name = document.getElementById('name');
        this.email = document.getElementById('course');
        this.course = document.getElementById('email');
        this.costumers = document.querySelector('.customer-list');
    }
    // check fields
    Display.prototype.checkFields = function(){
        this.name.addEventListener('blur', this.validateField);
        this.email.addEventListener('blur', this.validateField);
        this.course.addEventListener('blur', this.validateField);
    };
    // validate each field
    Display.prototype.validateField = function(){
        // if field is empty add fail class with red border
        if(this.value === ''){
            this.classList.remove('complete');
            this.classList.add('fail');
        }
        else{
            this.classList.add('complete');
            this.classList.remove('fail');
        }

        // const inputName = document.getElementById('name');
        // const nameError = document.getElementById('nameError');
        // const inputEmail = document.getElementById('email');
        // const emailError = document.getElementById('emailError');
        // const inputCourse = document.getElementById('course');
        // const courseError = document.getElementById('courseError');

        // // show Name error msg 
        // if(inputName.value === ''){
        //     nameError.classList.remove('msgErrorOff');
        //     nameError.classList.add('msgErrorOn');
        // }
        // else{
        //     nameError.classList.add('msgErrorOff');
        //     nameError.classList.remove('msgErrorOn');
        // }

        // // show Email error msg 
        // if(inputEmail.value === ''){
        //     emailError.classList.remove('msgErrorOff');
        //     emailError.classList.add('msgErrorOn');
        // }
        // else{
        //     emailError.classList.add('msgErrorOff');
        //     emailError.classList.remove('msgErrorOn');
        // }

        // // show Course error msg 
        // if(inputCourse.value === ''){
        //     courseError.classList.remove('msgErrorOff');
        //     courseError.classList.add('msgErrorOn');
        // }
        // else{
        //     courseError.classList.add('msgErrorOff');
        //     courseError.classList.remove('msgErrorOn');
        // }



        const complete = document.querySelectorAll('.complete');
        if(complete.length === 3){
            document.querySelector('.submitBtn').disabled = false;
        }
    };
    // disable submit button
    Display.prototype.hideSubmit = function(){
        const btn = document.querySelector('.submitBtn');
        btn.disabled = true;
    }

    // show loading and feedback
    Display.prototype.feedback = function(customer){
        const feedback = document.querySelector('.feedback');
    }

    // clear fields and remove complete class with green border
    Display.prototype.clearFields = function(){
        this.name.value = '';
        this.email.value = '';
        this.course.value = '';
        this.name.classList.remove('complete', 'fail');
        this.email.classList.remove('complete', 'fail');
        this.course.classList.remove('complete', 'fail');
    }

    // Customer constructor function
    function Customer(name, email, course){
        this.name = name;
        this.email = email;
        this.course = course;
    }
})();

