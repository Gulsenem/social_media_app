<template>
    <div class=" eigenes_profil">
        <div class="hintergrund_bild">
                
        </div>  
        <div class="flex">
            <div class="profile_img">
                <img src="../assets/woman.png">
                <h3> {{vorname + " " + nachname }}</h3>
                <small>joined {{joined }} </small> <br>
                <span> <b>125</b>  Abonnent    | </span>  
                <span> <b>15 000</b> abonniert </span>
            </div>

            

            <div class="profile_info">
                <div class="setUP_btn">
                    <button>Set up Profile</button>
                </div>
                
                <div class="content">
                    {{user_content}}
                </div>
            </div>                        
        </div>

        <div class="links flex">
            <h5>Beiträge</h5>
            <h5>Likes</h5>
            <h5>Gespeichert</h5>
        </div>

                        
    </div>

</template>

<script>
export default {

    data()
    {
        return{
            vorname: "",
            nachname: "",
            user_content: "",
            joined: "",
            token: "",
        }
    },
    created()
    {
          this.token = document.cookie.split("=")[1];
          console.log(this.token);
          const formData = new FormData();
          formData.append("token", this.token);
          
          fetch("https://durdyyeva.com/social_media_php/profil.php", // http://localhost/test/profil.php
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(response => response.json())
            .then(sonuc => {

                if(sonuc.basarili == "1")
                {
                    console.log("token");
                    console.log(this.token);
                    this.vorname = sonuc.vorname;
                    this.nachname = sonuc.nachname;
                    this.user_content = sonuc.user_content;
                    this.joined = sonuc.joined;

                }
                else{
                    console.log("hata");
                }

                
            })
            .finally(() =>
            {
                this.loading = false;
            });

    }
}
</script>


<style scoped>

    .eigenes_profil
    {
        background-color:var(--secondary);
        border-radius: var(--radius);
        margin-right: 20px;
        margin-bottom: 20px;
        
        box-shadow: 0px 0px 5px 0px var(--primary);
        -webkit-box-shadow: 0px 0px 5px 0px var(--primary);
    }

    .hintergrund_bild
    {
        width:100%;
        height:200px;
        background-color: var(--primary);
        border-bottom: 2px solid var(--accent);
        border-radius: var(--radius) var(--radius) 0 0;
    }
    .eigenes_profil .flex
    {padding: 0 30px 20px 30px;}

    .eigenes_profil .flex .profile_img
    {
        text-align: left;
    }
    .eigenes_profil .flex .profile_info
    {
        width: 60%;
    }
    .eigenes_profil .profile_img img
    {
        margin-top: -60px;
        margin-bottom: 20px;
        border: 2px solid var(--accent);
    }
    .eigenes_profil .profile_info .setUP_btn
    {
        text-align: right;
        margin-bottom: 10px;
    }
    .links h5
    {
        color:var(--accent);
        margin-right: 50px;
    }    
    
    .profile_img
{
    width: 300px;
    text-align:center;
    margin-right: 20px;
}
.profile_img img
{
    width: 120px;
    height:120px;
    border-radius: 50%;
}
    .profile_info
    {
        margin-top: 20px;
    }
</style>

