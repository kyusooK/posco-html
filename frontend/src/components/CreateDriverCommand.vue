<template>
    <v-card outlined>
        <v-card-title>
            CreateDriver
        </v-card-title>

        <v-card-text>
            <String label="DriverEmpNo" v-model="value.driverEmpNo" :editMode="editMode"/>
            <String label="Name" v-model="value.name" :editMode="editMode"/>
            <String label="CompanyCode" v-model="value.companyCode" :editMode="editMode"/>
            <String label="WorksCode" v-model="value.worksCode" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="createDriver"
            >
                CreateDriver
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'CreateDriverCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.driverEmpNo = '';
            this.value.name = '';
            this.value.companyCode = '';
            this.value.worksCode = '';
        },
        watch: {
        },
        methods: {
            createDriver() {
                this.$emit('createDriver', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

