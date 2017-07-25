<template lang="pug">

div.right
    .box
        h1 Cadastro de Paciente
        form(novalidate)
            fieldset
                p Os campos * são obrigatórios
                p(:class="{ 'control': true }")
                    label(for="nome", :class="{'input': true, 'is-danger': errors.has('nome') }") Nome*
                    .inputbox
                        input(name="nome", v-model="paciente.nome", type="text", placeholder="Nome", v-validate="'required'",  :class="{'input': true, 'is-danger': errors.has('nome') }" )
                        span(v-show="nomeFlags.invalid", class="help is-danger") {{ errors.first('nome') }}

                p(:class="{ 'control': true }")
                    label(for="genero", :class="{'input': true, 'is-danger': errors.has('genero') }") Genero*
                    .inputbox(class="select-wrapper", :class="{ 'is-danger': errors.has('genero') }")
                        select(v-model="paciente.genero", name="genero", v-validate="'required'", placeholder="Genero")
                            option(value="")
                            option(value="F") Feminino
                            option(value="M") Masculino
                    span(v-show="generoFlags.invalid", class="help is-danger") {{ errors.first('genero') }}

                p(:class="{ 'control': true }")
                    label(for="datanasc", :class="{'input': true, 'is-danger': errors.has('datanasc')} ") Data de nascimento*
                    .inputbox
                        input(name="datanasc", v-model="paciente.datanasc", type="text", placeholder="Data de nascimento", v-validate="'required'",  :class="{'input': true, 'is-danger': errors.has('datanasc') }" )
                        span(v-show="datanascFlags.invalid", class="help is-danger") {{ errors.first('datanasc') }}


                p
                    label(for="email") Email
                    .inputbox: input(name="email", v-model="paciente.email", type="text", placeholder="Email")
                p
                    label(for="indicacao") Indicação
                    .inputbox: input(name="indicacao", v-model="paciente.indicacao", type="text", placeholder="Indicação")
                p
                    label(for="contato") Contato
                    .inputbox: input(name="contato", v-model="paciente.contato", type="text", placeholder="Contato")

                p: button(class="btn", type="button" @click="submit(paciente)" ) Cadastrar

</template>
<script type="javascript">

import { mapFields } from 'vee-validate'

const post = paciente => {
    console.log(paciente)
	return new Promise((resolve) => {
  	setTimeout(() => resolve(), 1000);
  });
}

export default {
    data () {
        return {
            paciente: {
                nome: '',
                genero: '',
                datanasc: '',
                email: '',
                indicacao: '',
                contato: ''

            },
            message: ''
        }
    },
    computed: {
        ...mapFields({
            nomeFlags: 'nome',
            generoFlags: 'genero',
            datanascFlags: 'datanasc'
        })
    },
    methods: {
        submit (paciente) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    post(paciente).then(() => {
                        Object.assign(this.$data, this.$options.data());
                        this.message = 'Paciente cadastrado com sucesso!'
                    }).then(() => {
                        this.errors.clear();        
                    })
                }
            })
        }
    }
}
</script>