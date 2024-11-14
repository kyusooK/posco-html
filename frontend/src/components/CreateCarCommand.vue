<template>
    <v-card outlined>
        <v-card-title>
            CreateCar
        </v-card-title>

        <v-card-text>
            <Number label="ResourceId" v-model="value.resourceId" :editMode="editMode"/>
            <String label="CarrierNo" v-model="value.carrierNo" :editMode="editMode"/>
            <String label="WorksCode" v-model="value.worksCode" :editMode="editMode"/>
            <String label="CompanyCode" v-model="value.companyCode" :editMode="editMode"/>
            <String label="CarType" v-model="value.carType" :editMode="editMode"/>
            <String label="CarModel" v-model="value.carModel" :editMode="editMode"/>
            <String label="Usage" v-model="value.usage" :editMode="editMode"/>
            <String label="FuelFlag" v-model="value.fuelFlag" :editMode="editMode"/>
            <String label="PartCompanyCd" v-model="value.partCompanyCd" :editMode="editMode"/>
            <String label="OwnerTypeCode" v-model="value.ownerTypeCode" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="createCar"
            >
                CreateCar
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
        name: 'CreateCarCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.resourceId = 0;
            this.value.carrierNo = '';
            this.value.worksCode = '';
            this.value.companyCode = '';
            this.value.carType = '';
            this.value.carModel = '';
            this.value.usage = '';
            this.value.fuelFlag = '';
            this.value.partCompanyCd = '';
            this.value.ownerTypeCode = '';
        },
        watch: {
        },
        methods: {
            createCar() {
                this.$emit('createCar', this.value);
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

