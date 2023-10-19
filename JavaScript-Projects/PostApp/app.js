var backgroundImage = "";

function submitbtn(){
    var posttitle = document.getElementById("title")
    var postdescription = document.getElementById("descriptionOne")

    if(posttitle.value.trim() && postdescription.value.trim()){

        var posts=document.getElementById("posts")
        
    posts.innerHTML +=`<div class="card">
    <div class="card-header">
        Post
        </div>
    <div class="card-body" style="background-image:url(${backgroundImage})">
        <blockquote class="blockquote mb-0">
            <p>${posttitle.value}</p>
            <footer class="post-content blockquote-footer">${postdescription.value}</footer>
        </blockquote>
        <div class="overlay">
        </div>
    </div>
    </div>`
    posttitle.value="";
    postdescription.value="";
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please write a Title & description!',
          })
    }
}
function selectImage(src){
    backgroundImage = src;
    var bgImage = document.getElementsByClassName("bg-image")
    for(var i=0 ; i < bgImage.length; i++){
        bgImage[i].className="bg-image";
    }
    event.target.className += " image-list-selected"
}