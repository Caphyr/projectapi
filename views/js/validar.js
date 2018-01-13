//function recibir(){

    //var Email, Password;

    //Email= document.getElementById("inputEmail").value;
    //Password=document.getElementById("inputPassword").value;

    //document.write(Email);
    //document.write(Password);

//}

$(document).ready(function(){

    $('button').click(function() {

    var data = {};
        data.email = $("#inputEmail").val();
        data.pw = $("#inputPassword").val();


    $.ajax({
		type: 'POST',
	    data: JSON.stringify(data),
		contentType: 'application/json',
        url: '/v1/signin',
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
            }
        });
    })
});


// $(document).ready(function(){
//     var email, password;
//     $("#submit").click(function(){
//         email = $("#inputEmail").val();
//         password = $("inputPassword").val();
//
//         // $.ajax({
//         //   type: "POST",
//         //   url: '/login',
//         //   data: { Email : email, Password : password}
//         // });
//
//         $.post("http://localhost:3000/v1/signin",{ Email:email,Pass:password},function(data){
//             if(data==='done')
//             {
//                 window.location.href="/v1/signin";
//             }
//         });
//     });
//
// });
