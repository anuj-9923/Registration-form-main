function validform(){
    var a = document.forms["my-form"]["firstName"].value;
    var b = document.forms["my-form"]["lastName"].value;
    var c = document.forms["my-form"]["email"].value;
    var d = document.forms["my-form"]["birthDate"].value;
    
    var f = document.forms["my-form"]["phoneNumber"].value;
    var g = document.forms["my-form"]["gender"].value;

    if(a==null || a==""){
        alert("FILL YOUR FIRST NAME");
        return false;
    }
    else if(b==null || b==""){
        alert("FILL YOUR LAST NAME ");
        return false;
    }
    else if(c==null || c==""){
        alert("FILL YOUR EMAIL");
        return false;
    }
    else if(d==null || d==""){
        alert("FILL YOUR BIRTH DATE ");
        return false;
    }
    
    else if(f==null || f==""){
        alert("FILL YOUR PHONE NUMBER");
        return false;
    }
    else if(g==null || g==""){
        alert("SPECIFY YOUR GENDER");
        return false;
    }
}