 

    $(document).ready(function(){
       
        $("#submit2").click(function(){
            var username = $("#username").val();
            var password = $("#password").val();
             if( username != "" && password != "" ){
                 $.ajax({
                    url:'/login',
                    type:'post',
                    data:{username,password},
                    success:function(response){
                        if(response.request){
                                       
                                        console.log(response)
                                        localStorage.setItem("username", response.data[0].username);
                                        window.location.href="Employes.html?"; 
                                       
                        }


                    },
                    error:function(){
                        $("#alert").css('visibility', 'visible');
                    }
                });
            }else{
                $("#alert").css('visibility', 'visible');
            }
        });   
      }); 