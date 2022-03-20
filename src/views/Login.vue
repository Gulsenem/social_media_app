<template>

  <div class="login">
    <div class="blue_container">
        <h1>Herzlich Wilkommen unseren WEB SEITE!</h1>
    </div>
    <div class="form_container">
        <h2>Anmelden</h2>
        <div class="flex_column">

            <input type="email" placeholder="Email" v-model="input_email">
            <input type="password" placeholder="Passwort" v-model="input_pass">
            
            <button @click="anmelden">Anmelden</button>
        </div>

            Haben Sie kein Konto? <br>
            <router-link to="/register">Registrieren Sie sich!</router-link>

        <div class="errorBox"> {{error}} </div>

    </div>
  </div>
</template>
<script>

  export default {
      data()
      {
          return{
            input_email: "",
            input_pass: "",
            
            error: "" 
          }
          
      },
      methods:
      {
        anmelden()
        {

            const formData = new FormData();
            formData.append("email", this.input_email);
            formData.append("passwort", this.input_pass);  
            
            fetch("https://socialmedia.durdyyeva.com/social_media_php/login.php", //  http://localhost/test/login.php     
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(cevap => cevap.json())
            .then(sonuc => {
            
                if(sonuc.basarili == "1")
                {
                // token ululyga token value.ni berdik
                    document.cookie = "eingeloggt=" + sonuc.eingeloggt;
                    console.log("basarili");
                    this.$router.push('/');


                }
                else
                {
                    console.log("else");
                    setTimeout(()=>{
                        this.error = "Falsche Angaben!";

                    },2000);

                    
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
.login
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
    position: relative;
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
.flex_column>input
{
    margin-bottom: 20px;
    font-size: 1.1em;
    padding: 6px 12px;
    border:none;
    outline: none;
    background-color: #f2f6fa;
    border-radius: var(--radius);
}
.flex_column>input:focus, .flex_column>input:hover
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
    margin: 20px  0;
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
</style>
