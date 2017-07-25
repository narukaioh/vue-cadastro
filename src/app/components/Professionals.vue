<template lang="pug">
div.right
    .box
        h1 Profissionais
        table
            thead
                tr
                    th Nome
                    th Especialidade
                    th Editar
                    th Excluir
            tbody
                tr(v-for="profissional in Profissionais")
                    td {{ profissional.nome }}
                    td {{ profissional.especialidade }}
                    td: button.btn Editar
                    td: button.btn Excluir

</template>

<script>
export default {
    data () {
        return {
            Profissionais: [
                { nome: 'João Silva Ferreira', especialidade: 'Nutricionista' },
                { nome: 'Dona Irene', especialidade: 'Nutricionista'},
                { nome: 'Pedro Francisco', especialidade: 'Oftamologista'},
                { nome: 'Maria Madalena', especialidade: 'Dermatologista'},
                { nome: 'Alanis Morissete', especialidade: 'Nutricionista'},
            ]
        }
    },
    mouted () {
        this.getProfissionais()
    },
    methods: {
        getProfissionais() {
            console.log('get().then(data=> data.result)')
        }
    }
}
</script>
