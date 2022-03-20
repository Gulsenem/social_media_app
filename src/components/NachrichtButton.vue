<template>
    <div class="nachrichten">
        


        <button @click="nachrichtBtn"><i class="far fa-comments"></i> </button> 

    </div>
</template>
<script>
export default {
    methods:
    {
        nachrichtBtn()
        {
            alert("funktioenirt");
        }
    }
}
</script>

<style scoped>
    .nachrichten
    {
        width: 100%;
        display: flex;
        justify-content: right;
    }

    .nachrichten >button
    {
        width: 80px;
        height:80px;
        font-size: 3em;
        border-radius: 50%;

        
        position: fixed;
        bottom:20px;


        display: flex;
        justify-content: center;
        align-items: center;

        
    }


</style>
