<template>
    <div class="vorschlage">
        <h4> Vorschläge für dich</h4>
        <div class="user_image" v-for="a in abonent" v-bind:key="a.username">
            <img src="../assets/woman.png" >
            <div>
                <b> {{a.username}} </b> <br>
                <small> <b style="color:#63a9df;"> {{a.aboname}} </b>  followed this</small>
            </div>
            <button @click="add_follow_list(a.username)"><i class="fas fa-plus"></i></button>
        </div>
        

        <div class="show_more">
            <a href="">Alle ansehen</a>
        </div>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
            
            abonent: [
            {
                username: "",
                aboname: "",
            }
            ],
            token: "",
        }
    },
    created()
    {
        this.token = document.cookie.split("=")[1];


        const formData = new FormData();
        formData.append("token", this.token);

            fetch("https://socialmedia.durdyyeva.com/social_media_php/vorschlage.php", //http://localhost/test/vorschlage.php
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(cevap => cevap.json())
            .then(sonuc => {
                            console.log(" ici");
            this.$delete(this.abonent, 0);           
                for(let i=0;  i<sonuc[0].length; i++) 
                {  
                      
                   this.abonent.push({username : sonuc[0][i].username, aboname : sonuc[1][i].username  }); 
                  // this.abonent.push({aboname : sonuc[1][i].username });             
                }

            })
            .finally(() =>
            {
                console.log(" finally");
            });
            //" v-for="a in abonent" v-bind:key="a.username">
    },

    methods:{
        add_follow_list(a){
            console.log("Cliked:  " + a);

                this.token = document.cookie.split("=")[1];
                const formData = new FormData();
                formData.append("token", this.token);
                formData.append("user_it", a);

                fetch("https://socialmedia.durdyyeva.com/social_media_php/meselem.php",    //http://localhost/test/post_share.php
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(cevap => cevap.json())
            .then(sonuc => {
                if(sonuc.basarili == "0")
                {
                  console.log("add_follow_liste hataly");
                }
                else
                {
                  console.log("add_follow_liste basarili");
                  
                }

            })
          .finally(() =>
              {
                console.log("add_follow_liste finally");
              });
                
        }
    }
}
</script>


<style scoped>

    .vorschlage
    {
        border-radius: var(--radius);
        padding: 15px;
        margin-bottom: 20px;
        box-shadow: 0px 0px 5px 0px var(--primary);
        -webkit-box-shadow: 0px 0px 5px 0px var(--primary);
    }
    .vorschlage h4
    {
        margin-bottom: 15px;
    }
    .vorschlage .user_image button
    {
        margin-left: 10px;
    }
    .vorschlage small
    {
        color:rgb(129, 129, 129);
    }
    .vorschlage .show_more 
    {
        text-align: right;
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
</style>
