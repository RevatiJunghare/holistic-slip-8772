let form=document.querySelector("form")
    let registerArr=[]
    let getArr=JSON.parse(localStorage.getItem("sign"))

    form.addEventListener("submit",function(){
        event.preventDefault()
        let registerobj={
            name:form.name.value,
            email:form.email.value,
            address:form.address.value,
            phone:form.phone.value,


        }
        registerArr.push(registerobj)
        //console.log(registerArr)
        //localStorage.setItem("reg",JSON.stringify(registerArr))
        if(name.value=="" || email.value=="" || address.value=="" || phone.value==""){
            alert("Fill all Fiels")
        }
        else{
            getArr.map(function(el){
            if(el.email==registerobj.email){
                alert("successful")
                window.location.href="skincare.html"
            }else{
                alert("Wrong Email ID")
            }
        })
        }
    })