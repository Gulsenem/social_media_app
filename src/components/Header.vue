<template>
    <div>
        <header>
      <div class="wrapper sp_btw">
          <div class="logo"><b>Senem.</b></div>
          <div class="search sp_btw" >
              <input type="text" placeholder="Search">
              <i class="fal fa-search"></i>
          </div>
          <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/messages">Messages</router-link>
            <router-link to="/notification">Notification</router-link>
          </div>  
          <div class="user_image" > 
                <router-link to="/myProfile" class="flex_center">
                    <img src="../assets/woman.png"> 
                    <span>Ogulsenem</span> 
                </router-link>
          </div> 
                   
      </div>
    </header>
    </div>
</template>
