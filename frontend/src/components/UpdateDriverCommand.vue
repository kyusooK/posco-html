<template>
    <v-card outlined>
        <v-card-title>
            UpdateDriver
        </v-card-title>

        <v-card-text>
            <String label="RetirementFlag" v-model="value.retirementFlag" :editMode="editMode"/>
            <Date label="RetiredDate" v-model="value.retiredDate" :editMode="editMode"/>
            <Photo offline label="Image" v-model="value.image" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="updateDriver"
            >
                UpdateDriver
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
        name: 'UpdateDriverCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.retirementFlag = '';
            this.value.retiredDate = '2024-11-14';
            this.value.image = {};
        },
        watch: {
        },
        methods: {
            updateDriver() {
                this.$emit('updateDriver', this.value);
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

