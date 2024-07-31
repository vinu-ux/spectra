function sendEmail(){
    console.log('hi');
    var param={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        service: document.getElementById('service').value,
        location: document.getElementById('location').value,
        message: document.getElementById('message').value,
    }

    const serviceId='service_50r1zrj'
    const templateId='template_bmvihbq'

    emailjs.send(serviceId,templateId,param).then(
        (res)=>{
            console.log(res);
            document.getElementById('name').value =''
        document.getElementById('email').value=''
        document.getElementById('mobile').value=''
        document.getElementById('service').value=''
        document.getElementById('location').value=''
        document.getElementById('message').value=''
            alert("successfully submit details")
        }
    ).catch(err=>{console.log(err);})
   
}


 