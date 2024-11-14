<template>
    <v-card outlined>
        <v-card-title>
            UpdateCar
        </v-card-title>

        <v-card-text>
            <String label="CarType" v-model="value.carType" :editMode="editMode"/>
            <String label="CarModel" v-model="value.carModel" :editMode="editMode"/>
            <String label="Usage" v-model="value.usage" :editMode="editMode"/>
            <String label="FuelFlag" v-model="value.fuelFlag" :editMode="editMode"/>
            <String label="DriverEmpNo" v-model="value.driverEmpNo" :editMode="editMode"/>
            <String label="UserName" v-model="value.userName" :editMode="editMode"/>
            <List&lt;DriverId&gt; offline label="DriverIds" v-model="value.driverIds" :editMode="editMode" @change="change"/>
            <DriverIdList offline label="DriverIds" v-model="value.driverIds" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="updateCar"
            >
                UpdateCar
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
        name: 'UpdateCarCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.carType = '';
            this.value.carModel = '';
            this.value.usage = '';
            this.value.fuelFlag = '';
            this.value.driverEmpNo = '';
            this.value.userName = '';
            this.value.driverIds = [];
        },
        watch: {
        },
        methods: {
            updateCar() {
                this.$emit('updateCar', this.value);
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

