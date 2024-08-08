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

function modalSendEmail(){
    console.log('hi');
    var param={
        name: document.getElementById('modalname').value,
        email: document.getElementById('modalemail').value,
        mobile: document.getElementById('modalmobile').value,
        service: document.getElementById('modalservice').value,
        location: document.getElementById('modallocation').value,
        message: document.getElementById('modalmessage').value,
    }

    const serviceId='service_50r1zrj'
    const templateId='template_bmvihbq'

    emailjs.send(serviceId,templateId,param).then(
        (res)=>{
            console.log(res);
            document.getElementById('modalname').value =''
        document.getElementById('modalemail').value=''
        document.getElementById('modalmobile').value=''
        document.getElementById('modalservice').value=''
        document.getElementById('modallocation').value=''
        document.getElementById('modalmessage').value=''
            alert("successfully submit details")
        }
    ).catch(err=>{console.log(err);})
   
}


 