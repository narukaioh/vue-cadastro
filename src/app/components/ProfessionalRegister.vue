<template lang="pug">

div.right
    .box
        h1 Cadastro de Profissional de saúde
        form(@submit.prevent="submit()")
            fieldset
                p Os campos * são obrigatórios
                p
                    label(for="nome", :class="{ 'is-danger': errors.has('nome') }") Nome*
                    div: input(name="nome", v-model="profissional.nome", v-validate="'required'", :class="{ 'is-danger': errors.has('nome') }", type="text", placeholder="Nome")
                    span(v-show="nomeFlags.invalid", class="help is-danger") {{ errors.first('nome') }}
                p
                    label(for="especialidade", :class="{ 'is-danger': errors.has('especialidade') }") Especialidade*
                    div: input(name="especialidade", v-model="profissional.especialidade", v-validate="'required'", :class="{ 'is-danger': errors.has('especialidade') }", type="text", placeholder="Especialidade")
                    span(v-show="especialidadeFlags.invalid", class="help is-danger") {{ errors.first('especialidade') }}
                p: button(type="submit") Cadastrar

</template>

<script>
import { mapFields } from 'vee-validate'

const post = profissional => {
    console.log(profissional)
	return new Promise((resolve) => {
  	setTimeout(() => resolve(), 1000);
  });
}

export default {
    data () {
        return {
            profissional: {
                nome: '',
                especialidade: ''
            }
        }
    },
    computed: {
        ...mapFields({
            nomeFlags: 'nome',
            especialidadeFlags: 'especialidade'
        })
    },
    methods: {
        submit(profissional) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    post(profissional).then(() => {
                        Object.assign(this.$data, this.$options.data());
                        this.message = 'Profissional de saúde cadastrado com sucesso!'
                    }).then(() => {
                        this.errors.clear();        
                    })
                }
            })
        }
    }
}
</script>
