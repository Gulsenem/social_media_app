<template>
<div class="myProfile">
    <Header />
    <main>
        <div class="wrapper flex">
            <div class="profile_container1">
                
                <eigenes_profile/>
                <div class="profile_container flex">
                    <aside>
                        <Abonnieren />
                    </aside>
                    <Paylasimlar />
                </div>
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
  import eigenes_profile from '@/components/eigenes_profile.vue'
  import Trends from '@/components/Trends.vue'
  import NachrichtButton from '@/components/NachrichtButton.vue'
  import Abonnieren from '@/components/Abonnieren.vue'
  import Paylasimlar from '@/components/Paylasimlar_me.vue'


export default {
    components: {
        Header,
        eigenes_profile,
        Trends,
        NachrichtButton,
        Abonnieren,
        Paylasimlar
    }
}
</script>

<style scoped>
.profile_container1
{
    width:75%; 
    
}

.profile_container1 .profile_container aside
{
    width:35%;
    margin-right: 20px;
}
.profile_container1 .profile_container .paylasimlar
{
    width:65%;
    margin-right: 20px;
}
</style>
