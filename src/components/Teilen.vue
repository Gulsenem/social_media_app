<template>
    <div>
        <div class="teilen">
            x
            <div class="user_image">
                <img src="../assets/woman.png" >
                <textarea placeholder="Was machst du gerade?" v-model="post_content"></textarea>
                
            </div>
            <button @click="teilen">Teilen</button>
        </div>
    </div>
</template>

<style>

    
.teilen
{
    width: 500px;
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
.teilen>button
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

