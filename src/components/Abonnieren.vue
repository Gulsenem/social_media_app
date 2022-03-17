<template>
    <div class="abonnieren">
        <h4> Abonnieren</h4>
        <div class="user_image" v-for="a in abonent" v-bind:key="a.username">  
            <img src="../assets/woman.png" >
            <span> {{a.username}} </span>
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
                img : "../assets/woman.png",
                username: "Gülsenem",
            }
            ],
            token: "",
        }
    },
    created()
    {
        this.token = document.cookie.split("=")[1];
        console.log(this.token);

        const formData = new FormData();
        formData.append("token", this.token);

            fetch("https://durdyyeva.com/social_media_php/abonnieren.php", //http://localhost/test/abonnieren.php
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(cevap => cevap.json())
            .then(sonuc => {
                            console.log(" ici");
            this.$delete(this.abonent, 0);           
                for(let i=0;  i<sonuc.length; i++) 
                {    
                    this.abonent.push({username : sonuc[i].username });              
                }

            })
            .finally(() =>
            {
                console.log(" finally");
            });
            //" v-for="a in abonent" v-bind:key="a.username">
    }
}
</script>


<style scoped>

    .abonnieren
    {
        border-radius: var(--radius);
        padding: 15px;
        margin-bottom: 20px;
        box-shadow: 0px 0px 5px 0px var(--primary);
        -webkit-box-shadow: 0px 0px 5px 0px var(--primary); 
    }
    .abonnieren h4
    {
        margin-bottom: 15px;
    }
    .abonnieren .show_more
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


