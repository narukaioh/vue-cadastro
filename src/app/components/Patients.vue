<template lang="pug">
div.right
    .box
        h1 Pacientes
        table.list
            thead
                tr
                    th Nome
                    th Data de nascimento
                    th Email
                    th Editar
                    th Excluir
            tbody
                tr(v-for="paciente in pacientes")
                    td {{ paciente.nome }}
                    td {{ paciente.datanasc }}
                    td {{ paciente.email }}
                    td: button Editar
                    td: button Excluir

</template>

<script>
export default {
    data () {
        return {
            pacientes: [
                { nome: 'João Silva Ferreira', datanasc: '04/11/1997', email: 'joao@com.br' },
                { nome: 'Dona Irene', datanasc: '28/08/1956', email: 'irene@dona.com.br' },
                { nome: 'Pedro Francisco', datanasc: '23/01/1980', email: 'pfrancisco12@bol.com' },
                { nome: 'Maria Madalena', datanasc: '10/04/2000', email: 'mmadalena@ig.com.br' },
                { nome: 'Alanis Morissete', datanasc: '12/12/1987', email: 'alanismorissete@mtv.com' },
            ]
        }
    },
    mouted () {
        this.getPacientes()
    },
    methods: {
        getPacientes() {
            console.log('get().then(data=> data.result)')
        }
    }
}
</script>
