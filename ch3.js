function password()
{
    let x=document.getElementById("pswd").value;
    let f=0;
    if(x.length < 8)
    {
        alert("Password Length Must Be above 8 Letter");
    }
    let uc=0;
    let nc=0;
    let lc=0;
    let sc=0;
    for(let i=0;i<x.length;i++)
    {
        let a=x[i];
        if(a>=0 && a<=9)
        {
            nc++;
        }
        if(a.toUpperCase() === a)
        {
            uc++;
        }
    }
    if( uc<1 || nc <1)
    {
        alert(" Password Should Contains 1 Upper & 1 special & 1 digit ");
    }

    let u=0;
    for(let i=0;i<x.length;i++)
    {
        let a=x[i];
        
        if((/[a-zA-Z]/).test(a))
        {
            u=0;
        }
        else if(a>=0 && a<=9)
        {
            u=0;
            continue;
        }
        else
        {
            u=1;
            break;
        }
    }
    if(u==0)
    {
        alert("Please enter Special letters");
    } 
}
function username()
{
        let email_id = document.getElementById("username").value;
        const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex_pattern.test(email_id)) {
            alert("Enter Valid Email");
        }
        else
        {
            alert("Successfully Logged");
        }
}
