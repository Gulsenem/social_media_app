<template>
    <div class="paylasimlar">
    <h4>Posts</h4>
    <div class="box" v-for="p in paylasim" v-bind:key="p.name">
        <div class="user_image">
            <img src="../assets/woman.png" >
            <span>{{p.name}} </span> <pre><i> geteilt um {{p.time}} :</i></pre> 
        </div>
        <div class="content">
           " {{p.content}} " 

        </div>
        <div class="content_unten">
            <div class="like">
                <i class="far fa-heart"></i>
                <span>100 {{p.likeZahl}} </span>
            </div>
            <div class="comment">
                <i class="far fa-comment"></i>
                <span>150 {{p.commentZahl}} </span>
            </div>
        </div>

    </div>


    </div>
</template>
<script>
export default {
    data()
    {
        return{
            paylasim: [
                {
                    time:"",
                    name: "",
                    content: "",
                    likeZahl: "",
                    commentZahl: "",
                }
            ],
            token: "",
        }
    },
    created()
    {
        this.token = document.cookie.split("=")[1];
        //console.log(this.token);

        const formData = new FormData();
        formData.append("token", this.token);

            fetch("https://socialmedia.durdyyeva.com/social_media_php/allpost.php", //http://localhost/test/allpost.php
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(cevap => cevap.json())
            .then(sonuc => {
            
                if(sonuc.basarili == "0")
                {
                    console.log("paylasim basarisiz");
                    
                }
                else
                {
                    console.log("paylasim ALL ELSE");
                    console.log(sonuc);
                     this.$delete(this.paylasim, 0);           
                    for(let i=0;  i<sonuc[0].length; i++) {    
                       // console.log(sonuc[0][i].post_content, sonuc[1][i].username);  
                        this.paylasim.push({content : sonuc[0][i].post_content, name : sonuc[1][i].username, time : sonuc[0][i].post_tarih });//sonuc[1];  
                        console.log(sonuc[0][i].post_content, sonuc[0][i].post_tarih);              
                        //this.paylasim.content = sonuc[0][i].post_content;
                       // this.paylasim[0].content = sonuc[0][i].post_content;
                       // this.paylasim[0].name = sonuc[1][i].username;
                    }


                    
                }

            })
            .finally(() =>
            {
                console.log("PAYLASIM ALL finally");
            });
    }
}
</script>


<style scoped>
    .paylasimlar
    {
        background-color: var(--primary);
        box-shadow: 0px 0px 5px 0px var(--primary);
        -webkit-box-shadow: 0px 0px 5px 0px var(--primary);
        border-radius: var(--radius);
        padding: 15px;
        background-color: white;
    }

    .user_image
    {
        padding: 10px 0;
        display: flex;
        align-items: center;
    }
    .user_image img
    {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid var(--accent);
        margin-right: 20px;
    }
    .box
    {
        background-color:var(--secondary);
        margin: 15px 0;
        padding: 10px 15px;
        border-radius: var(--radius);
    }
    h4
    {
        margin-bottom: 10px;
    }

    .content
    {
        margin: 15px 0;
        color:rgb(99, 97, 97);
    }
    .content_unten
    {
    display:flex;
    padding: 10px;
    border-top: 1px solid var(--primary); 
    }
    .content_unten .like i
    {
        color: red;
    }
    .content_unten .comment i
    {
        color: rgb(164, 167, 0);
    }
    .content_unten div
    {
        margin-right: 15px;
    }
</style>
