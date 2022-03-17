<template>
  <div class="home">
    <Header />
    <main>
      <div class="wrapper flex">
        <aside>
          <Abonnieren />
          <Vorschlage/>
        </aside>

        <div class="container">
          <div class="teilen">
            <div class="user_image">
                <img src="../assets/woman.png" >
                <textarea placeholder="Was machst du gerade, Ogulsenem ?" v-model="post_content"></textarea>
            </div>
            <button @click="teilen">Teilen</button>
          </div>

          <Paylasimlar />
        </div>

      
        <aside>
          <Trends />
          <NachrichtButton/>
        </aside>

      </div>    
    </main>


  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Abonnieren from '@/components/Abonnieren.vue'
  import Vorschlage from '@/components/Vorschlage.vue'
  import Paylasimlar from '@/components/Paylasimlar_all.vue'
  import Trends from '@/components/Trends.vue'
  import NachrichtButton from '@/components/NachrichtButton.vue'

  export default {
    components: {
      Header,
      Abonnieren,
      Vorschlage,
      Paylasimlar,
      Trends,
      NachrichtButton
    },
    data()
    {
      return{
        
            post_content: "",
            token:"",
            tokenvalue: "",
        
      }
    },

    created() 
    {
            let cookies = document.cookie;
            const formData = new FormData();
            if(cookies.length!=0 && cookies.includes("eingeloggt"))
            {
              formData.append("id", "eingeloggt");
            }
            else
            {
              formData.append("id", "error");
            }
            
            fetch("https://durdyyeva.com/social_media_php/index.php", 
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(cevap => cevap.json())
            .then(sonuc => {
                //console.log("sonuc:"+sonuc.basarili);
                if(sonuc.basarili == "0")
                {
                  this.$router.push('/login');
                }
            });

    },
    
    methods:
    {
      teilen()
      {
          this.token = document.cookie.split("=")[1];
          const formData = new FormData();
          formData.append("post_content", this.post_content);
          formData.append("token", this.token);
          console.log(this.token);
          fetch("https://durdyyeva.com/social_media_php/post_share.php",    //http://localhost/test/post_share.php
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(cevap => cevap.json())
            .then(sonuc => {
                if(sonuc.basarili == "0")
                {
                  console.log("hata");
                }
                else
                {
                  console.log("basarili");
                  console.log(sonuc.basarili);

                }

            })
          .finally(() =>
              {
                console.log("finally");
              });

              this.post_content = "";
      }
    }

  }

</script>
<style scoped>


.container
{
   width: 50%;
   margin: 0 20px;
}
.teilen
{
    background-color: var(--primary);
    box-shadow: 0px 0px 5px 0px var(--primary);
    -webkit-box-shadow: 0px 0px 5px 0px var(--primary);
    border-radius: var(--radius);
    padding: 15px;
}
.teilen
{
    text-align: right;
    margin-bottom: 20px;
}
.teilen textarea
{
    width:100%;
    margin: 10px 0;
    padding: 10px;
    border:none;
    outline:none;
    border-radius: 4px;
}
.teilen button
{
    padding: 6px 12px;
    border:none;
    outline:none;
    border-radius: 4px;
    background-color:var(--accent);
    color:white;
    font-weight: bold;
    cursor:pointer;
    box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 20%);
}
    .user_image
    {
        padding: 10px 0;
        display:flex;
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
