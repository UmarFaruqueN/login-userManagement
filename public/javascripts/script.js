// FOR SEARCH BAR
$(document).ready(function() {
    $('#myTable').DataTable();
} );



// FOR FORM VALIDATION
$.validator.addMethod("alpha", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
});
$.validator.addMethod("isEmail", function (value, element) {
    return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);

});


$(document).ready(()=>{
    // Login    
    $("#login").validate({
        rules:{
            user_email:{
                required: true,
                minlength:3,
                isEmail:true
            },
            user_password:{
                required:true,
                minlength:5,
            }
        },
        messages:{
            user_email:{
                required: "*Required Feild",
                minlength:"Min character 3",
                isEmail:"Enter a valid user_email"
            },
            user_password:{
                required:"*Required Feild",
                minlength:"Min character 5",

            }
        },
        
    }),
    $("#alogin").validate({
        rules:{
            user_email:{
                required: true,
                minlength:3,
                isEmail:true
            },
            user_password:{
                required:true,
                minlength:5,
            }
        },
        messages:{
            user_email:{
                required: "*Required Feild",
                minlength:"Min character 3",
                isEmail:"Enter a valid user_email"
            },
            user_password:{
                required:"*Required Feild",
                minlength:"Min character 5",

            }
        }
    })

})

$(document).ready(()=>{
    // SignUp
    $("#signup").validate({
        rules:{
            user_name:{
                required: true,
                minlength:3,
                alpha: true
            },
            user_number:{
                required:true,
                minlength:10,
            },
            user_email:{
                required:true,
                minlength:3,
                isEmail:true,

            },
            user_password:{
                required:true,
                minlength:5,
            }
        },
        messages:{
            user_name:{
                alpha:"Characters only",
                required: "*Required Feild",
                minlength:"Min character 3"
            }
            ,
            user_number:{
                required:"*Required Feild",
                minlength:"enter 10 digit mobile number"
            },

            user_email:{
                required: "*Required Feild",
                minlength:"Min character 3",
                isEmail:"Enter a valid user_email"
            },
            user_password:{
                required:"*Required Feild",
                minlength:"Min character 5",
            }
        }
   

})

})

