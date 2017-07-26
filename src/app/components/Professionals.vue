<template lang="pug">
div.right
    .box
        h1 Profissionais
        el-table(:data='profissionais', style='width: 100%')
            el-table-column(prop='nome', label='Nome')
            el-table-column(prop='especialidade', label='Data de nascimento')
            el-table-column(label='Operations')
                template(scope='scope')
                    el-button(size='small', @click='handleEdit(scope.$index, scope.row)') Edit
                    el-button(size='small', type='danger', @click='handleDelete(scope.$index, scope.row)') Delete


</template>

<script>
export default {
    data () {
        return {
            profissionais: [
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
        },
        handleEdit(index, row) {},
        handleDelete(index, row) {}
    }
}
</script>
