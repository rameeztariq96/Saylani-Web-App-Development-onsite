function submitbtn(){
    var posttitle = document.getElementById("title")
    var postdescription = document.getElementById("descriptionOne")

    if(posttitle.value.trim() && postdescription.value.trim()){

        var posts=document.getElementById("posts")
        
    posts.innerHTML +=`<div class="card">
    <div class="card-header">
        Post
        </div>
    <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>${posttitle.value}</p>
            <footer class="blockquote-footer">${postdescription.value}</footer>
        </blockquote>
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