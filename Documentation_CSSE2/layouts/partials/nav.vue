<template>
    <header>
        <nuxt-link to="/" class="logo">Nuxty</nuxt-link>
        <nav>
            <ul>
                <li><nuxt-link to="/voorbeeld_1">Voorbeeld 1</nuxt-link></li>
                <li><nuxt-link to="/voorbeeld_2">Voorbeeld 2</nuxt-link></li>
                <li><nuxt-link to="/voorbeeld_3">Voorbeeld 3</nuxt-link></li>
                <li><nuxt-link to="/voorbeeld_4">Voorbeeld 4</nuxt-link></li>
                <li><nuxt-link to="/voorbeeld_5">Voorbeeld 5</nuxt-link></li>
            </ul>
        </nav>
    </header>

</template>

<script>
export default {

}
</script>

<style>
    header{
        background: rgb(0,219,146);
        display:grid;
        grid-template-columns: repeat(2,auto);
    }
    .logo, li a{
        padding: 1em 2em;
        display:block;
        text-transform: uppercase;
        text-decoration: none;
        font-family:Arial, Helvetica, sans-serif;
        font-weight: bold;
        color:#fff;
        font-size: .9em;
    }
    nav {
        justify-self: right;
    }
    ul{
        list-style-type: none;
    }
    li{
        display: inline;
    }
    li a{
                display:inline-block;
    }
</style>
