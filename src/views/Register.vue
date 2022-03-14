<template>
  <div class="messages">
    <div class="blue_container">
        <h1>Herzlich Wilkommen unseren WEB SEITE!</h1>
    </div>
    <div class="form_container">
        <h2>Erstellen Sie Account</h2>
        <div class="flex_column" v-if="step === 1">
            <input type="text" placeholder="Vorname" v-model="in_vn" >
            <input type="text" placeholder="Nachname" v-model="in_nh" >
            <input type="date" placeholder="Geburstdatum" v-model="in_gb" >
            <button  @click="weiter1"> weiter </button>
        </div>

        <div class="flex_column" v-else-if="step === 2">
          
            <input type="text" placeholder="Username" v-model="in_un">
            <input type="email" placeholder="Email" v-model="in_mail">
            <input type="password" placeholder="Paswort" v-model="in_pw" >
            <button  @click="weiter2"> weiter </button>
            <span class="zurucktxt" @click="zuruck1"> {{zuruck}} </span>
        </div>


        <div class="flex_column" v-else-if="step === 3">
          
            <textarea  rows="5" placeholder="Wie möhtest du genannt werden?" v-model="in_con"></textarea>
            <button  @click="registrieren"> Registrieren </button>
            <span class="zurucktxt" @click="zuruck2"> {{zuruck}} </span>
        </div>
                    
        

        <div class="errorBox"> {{error}} </div>

    </div>
  </div>
</template>
<script>

  export default {

  data()
  {
    return {
      in_vn: "",
      in_nh: "",
      in_gb: "",
      in_un: "",
      in_mail: "",
      in_pw: "",
      in_con: "",
      error: "errori",
      step: 1,
      zuruck: "<-"
    }
  },
  methods:
  {
    weiter1() 
    {
      this.step = 2
      {
        this.error = "Step 2";
      }
    },

     weiter2()
    {
      this.step = 3
      {
        this.error = "Step 3";
      }
    }, 
    zuruck1()
    {
      this.step = 1
      {
        this.error = "Step 1";
      }
    },
    zuruck2()
    {
      this.step = 2
      {
        this.error = "Step 2";
      }
    },
    registrieren()
    {
      this.error = "Erfolgreich";

      const formData = new FormData();
      formData.append("vorname", this.in_vn);
      formData.append("nachname", this.in_nh);
      formData.append("geburstdatum", this.in_gb);
      formData.append("username", this.in_un);
      formData.append("email", this.in_mail);
      formData.append("passwort", this.in_pw);
      formData.append("user_content", this.in_con);

      fetch("http://localhost/test/register.php", 
      {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
      .then(cevap => cevap.json())
      .then(sonuc => {
        
        if(sonuc.basarili == "1")
        {
          // BURASI DEGISTIRELECEK
            document.cookie = "eingeloggt=" + sonuc.eingeloggt;
            
            this.$router.push('/');

          // HOS GELDIN
          // sayfayi degis
          // ...

          console.log("GIRIS BASARILI");
        }
        else
        {
          console.log("GIRIS Hatali");
        }

      })
      .finally(() =>
      {
        console.log("GIRIS finally");
      });
    }
  }

  }
</script>
<style scoped>
.messages
{
    margin:0;
    height: 100vh;
    background: linear-gradient(90deg, rgba(99,169,223,1) 0%, rgba(180,212,236,1) 50%, rgba(99,169,223,1) 100%);
    

    display:flex;
    justify-content: center;
    align-items: center;
}
.blue_container
{
    width: 400px;
    background-color: var(--accent);
    border-radius: var(--radius);
    padding: 70px;
    color:white;
    box-shadow: 0px 6px 10px 0px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 0px 6px 10px 1px rgb(0 0 0 / 20%);

    position:relative;
    left: 20px;
    z-index: 2;

}
.flex_column
{
    display:flex;
    flex-direction: column;
}
.form_container
{
    background-color: white;
    width: 450px;
    padding: 70px;
    border-radius: var(--radius);
    box-shadow: 0px 0px 17px -7px rgba(0,0,0,5);
    -webkit-box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 0.5);
    text-align: center;
    position:relative;
    z-index: 1;
}
.form_container h2
{
    margin:0;
    margin-bottom: 30px;
    color:#013a66;
}
.form_container a
{
    color:var(--accent);
}
.flex_column>input, .flex_column>textarea
{
    margin-bottom: 20px;
    font-size: 1.1em;
    padding: 6px 12px;
    border:none;
    outline: none;
    background-color: #f2f6fa;
    border-radius: var(--radius);
}
.flex_column>input:focus, .flex_column>textarea:focus, .flex_column>*:hover
{
    box-shadow: px 10px 7px 5px rgb(0 0 0 / 0.05);
    -webkit-box-shadow: 0px 5px 17px 0px rgb(0 0 0 / 0.1);
}
.flex_column>input:focus
{
    border-left: 7px solid var(--primary);
}

.flex_column> button
{
    margin:20px 0;
    width: 100%;
    font-size: 1.1em;
    border-radius: var(--radius);
    background-color: var(--accent);
    
    box-shadow: 0px 6px 10px 0px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 0px 6px 10px 0px rgb(0 0 0 / 20%);
    cursor: pointer;
    color:white;
    font-weight: bold;
    padding: 8px;
}

.flex_column>button:hover
{
  background-color: rgb(61, 149, 216);
  
}

.errorBox
{
  position: absolute;
  top: 20px;
  width: 310px;
  padding: 6px 12px;
  font-size: 1.1em;
  border-radius: var(--radius); 
  border: 1px solid rgb(235, 235, 235);
  border-left: 7px solid red;

  display:none;
  
}
.zurucktxt
{
  position: absolute;
  bottom: 20px;
  left: 20px;
  color:var(--accent);
  font-weight: bold;
  font-size: 1.4em;
}
</style>
