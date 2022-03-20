<template>
  <div id="app">
     



    <router-view/>
  </div>
</template>

<style>
*
{
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}

:root
{
    --primary: #B4D4EC;
    --secondary: #F5FBFF;
    --accent: #63a9df;
   
    --radius: 5px;
}
body
{
    margin:0;
}

.sp_btw
{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.flex
{
    display:flex;
}
.flex_center
{
    display:flex;
    justify-content: center;
    align-items: center;
}
.wrapper
{
    max-width: 1200px;
    margin: 0 auto;
}
a
{
    color:var(--accent);
    text-decoration: none;
}
a:hover
{
    text-decoration: underline;
}
input
{
    outline:none;
    border:none;
    padding: 8px;
    border-radius: 10px;
}
button
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

h1, h2, h3, h4, h5, b
{
    margin:0;
    color:#013a66;
}
/******************Header************** ***/
header
{
    background-color: var(--primary);
    padding: 10px 0;
}

header .search
{
    width: 350px;
    background-color: white;
    border-radius: 10px;
}
header .search i
{
    background-color: var(--accent);
    border-left: 1px solid var(--primary);
    padding:8px;
    padding-right: 12px;
    border-radius: 0 10px 10px 0;
    color:white;
}

#nav a, header a
{
    color: #013a66;
    margin-left: 15px;
    
}
#nav a:hover
{
    text-decoration: none;
}
header #nav a i
{
    color: #013a66;
    margin-right: 6px;
    font-size: 1.2em;
}

 #nav router-link-exact-active
{
    border-bottom: 3px solid black;
}

header .user_image img
{
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
}

/******************Main************** ***/
  main
  {
      padding: 70px 0;
  }
  aside
  {
      width:25%;  
      position: relative;
  }
</style>
