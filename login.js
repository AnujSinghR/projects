let temp = 0;
        function eye(){
            if(temp==0){
        document.getElementById("icon-eye").name="eye-outline";
        document.getElementById("pass").type="text";
        temp=1;
            }
            else{
             document.getElementById("icon-eye").name="eye-off-outline";
             document.getElementById("pass").type="password";
             temp=0;
            }
            
        }
        var gmail;
        var uname;
        var pass;
        var u_name;
        function sign_sub(){
             gmail= document.getElementById("g-mail").value;
             uname= document.getElementById("u-name").value;
             pass= document.getElementById("pass").value;
             if(gmail!=undefined){
                document.getElementById("submited").innerHTML="your account is signed up";
             }
             else{
                document.getElementById("submited").innerHTML="bhhhvg";
             }
        }
        function log_sub(){
        let password = document.getElementById("pass").value;
        console.log(password);
        document.getElementById("checked").style.color="green";
        u_name= document.getElementById("log-uname").value;
        if(u_name==uname){
            if(password==pass){
                document.getElementById("logged-in").innerHTML="your account is logged in";
            }
            else{
                document.getElementById("logged-in").innerHTML="pass incorrect";
            }
        }
        else{
            document.getElementById("logged-in").innerHTML="uname incorrect";
        }
        }