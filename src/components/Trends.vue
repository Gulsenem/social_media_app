<template>
    <div class="trends">
        <h4>Trends</h4>    
        <div class="trends_news" v-for="n in news" v-bind:key="n.titel">
            <h5>{{n.titel}}</h5>
            <p>{{n.des}}</p>
            
            <a :href=" n.url " target="_blank"> go to page</a>

            <hr>

        </div>

    </div>


</template>
<script>
export default {
        data()
    {
      return{
            
        news: [
            {
                titel: "",
                des:"",
                url:"",
            }
    ],

        
      }
    },
    created()
    {
        fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                "x-rapidapi-key": "b6ea4c6179mshaee28b624113c0cp195f32jsna08ab544faa1"
            }
        })
            .then(cevap => cevap.json())
            .then(sonuc => {
                console.log(sonuc);

                     this.$delete(this.news, 0);  

                for(let i=0;  i<sonuc.value.length; i++) {    
                     
                        this.news.push({titel : sonuc.value[i].title, des : sonuc.value[i].description, url : sonuc.value[i].url }); 
                                    

                    }
            })
        .catch(err => {
            console.error(err);
        });
    }
}
</script>


<style scoped>
    .trends
    {
        border-radius: var(--radius);
        padding: 15px;
        margin-bottom: 20px;
        box-shadow: 0px 0px 5px 0px var(--primary);
        -webkit-box-shadow: 0px 0px 5px 0px var(--primary);
    }
    .trends_news
    {
        border-radius: var(--radius);
        padding: 15px;
        color: rgb(116, 115, 115);
    }
    .trends_news h5
    {

        color: rgb(116, 115, 115);
    }
</style>
