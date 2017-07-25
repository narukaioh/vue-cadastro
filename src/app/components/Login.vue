
<template lang="pug">
div.right(v-if="!isSignin")
    .box
        h1 Login
        form
            fieldset
                p.error(v-if="message") {{message}}
                p: .inputbox: input(type="text", v-model="user.login", placeholder="Login")
                p: .inputbox: input(type="password" v-model="user.password", placeholder="Senha")
                p: button(class="btn", type="button" @click="signin(user)") Logar

scheduling-register(v-else)

</template>

<script>
import SchedulingRegister from './SchedulingRegister.vue'
import { mapActions, mapState } from 'vuex'
export default {
    data () {
        return {
            user: {
                login: '',
                password: '',
                token: ''
            },
            message: ''
        }
    },
    computed: {
        ...mapState({
            isSignin: state => state.token !== ''
        })
    },
    mounted () {
    },
    methods: {
        ...mapActions(['login']),
        
        signin (user) {
            if (this.isValid(user)) {
                this.login('token.da.aplicacao')
                return
            }
            this.message = 'Login inválido!'
        },

        isValid(user){
            return user.login == 'admin' && user.password == '123456'
        }
    },
    components: {
        'scheduling-register': SchedulingRegister
    }
}

</script>

<style lang="scss">
p.error {
    border: 1px solid red;
    padding: 3px 10px;
    text-align: center;
    border-radius: 3px;
    color: red;
    font-family: arial;
    width: 97%;
}
</style>