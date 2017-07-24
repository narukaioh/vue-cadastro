<template lang="pug">

div.left(v-if="isSignin")
    ul.nav
        li.menu
            i(class="fa fa-bars", aria-hidden="true")
            | Menu
            ul
                li: router-link(to="/") Home
                li: router-link(to="/auth/patients") Pacientes
                li: router-link(to="/auth/professionals") Profissionais
                li: router-link(to="/auth/patient") Cadastrar paciente
                li: router-link(to="/auth/professional") Cadastrar profissional de saúde
                li: router-link(to="/auth/scheduling") Agendamento
    ul.logout
        li Olá, {{ username }}.
        li: span(class="exit", @click="signout()") Sair
div.left(v-else)
    ul.nav
        li.menu Nome do Sistema
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            isSignin: state => state.token !== '',
            username: state => state.user.name
        })
    },
    methods: {
        ...mapActions(['logout']),
        signout () {
            this.logout()
        }
    }
}

</script>

<style lang="scss">

@import '../../assets/css/colors.scss';
span.exit { cursor: pointer }
.left {

    float: left;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #1fa67a;
    ul.logout {
        float: right;
    }

    li {
        float: left;
        color: #fff;
        width: auto;
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        background: inherit;
        list-style: none;
        border-right: 1px solid $navcolor;
        &:last-child {
            border-right: none;
        }
    }

    ul.nav {
        
        float: left;
        margin-left: 10px;
        background-color: darken($navcolor, 6);


        /* Custom, iPhone Retina */ 
        @media only screen and (min-width : 320px) {
            li.menu {
                width: auto;
            }
        }

        /* Extra Small Devices, Phones */ 
        @media only screen and (min-width : 480px) {
            li.menu {
                width: auto;
            }
        }

        /* Small Devices, Tablets */
        @media only screen and (min-width : 768px) {
            li.menu {
                width: 200px;
            }
        }

        /* Medium Devices, Desktops */
        @media only screen and (min-width : 992px) {

        }

        /* Large Devices, Wide Screens */
        @media only screen and (min-width : 1200px) {

        }

        /*==========  Non-Mobile First Method  ==========*/

        /* Large Devices, Wide Screens */
        @media only screen and (max-width : 1200px) {

        }

        /* Medium Devices, Desktops */
        @media only screen and (max-width : 992px) {

        }

        /* Small Devices, Tablets */
        @media only screen and (max-width : 768px) {

        }

        /* Extra Small Devices, Phones */ 
        @media only screen and (max-width : 480px) {

        }

        /* Custom, iPhone Retina */ 
        @media only screen and (max-width : 320px) {

        }        

        li.menu {

            position: relative;
            background: inherit;
            border-right: 1px solid $navcolor;

            ul { display: none; }

            &:hover {
                
                background: darken($navcolor, 6);

                ul {

                    top: 39px;
                    left: 0px;
                    width: 120%;
                    z-index: 100;
                    display: block;
                    position: absolute;
                    background: darken($navcolor, 6);

                    li {

                        width: 100%;
                        text-align: left;
                        padding: 15px 30px;

                        a {

                            color: #fff;  
                            display: block;
                            font-size: 14px;
                            font-weight: bold;
                            text-decoration: none;

                            &:hover { text-decoration: underline; }

                        }
                    }
                }
            }
        }
    }
}


</style>