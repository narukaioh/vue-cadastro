<template lang="pug">
div.right
    .box
        h1 Pacientes
        el-table(:data='pacientes', style='width: 100%')
            el-table-column(prop='nome', label='Nome')
            el-table-column(prop='datanasc', label='Data de nascimento')
            el-table-column(prop='email', label='Email')

            el-table-column(label='Operations')
                template(scope='scope')
                    el-button(size='small', @click='handleEdit(scope.$index, scope.row)') Edit
                    el-button(size='small', type='danger', @click='handleDelete(scope.$index, scope.row)') Delete

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
        },
        handleEdit(index, row){
            console.log(index, row)
        },
        handleDelete(index, row){
            console.log(index, row)
        }
    }
}
</script>
