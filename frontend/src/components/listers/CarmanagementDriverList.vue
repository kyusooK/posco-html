<template>
    <div>
    <h1>운전자</h1>
        <v-row>
            <v-card
                class="mx-auto"
                style="height:300px; width:300px; margin-bottom:20px; text-align: center;"
                outlined
            >
                <v-list-item>
                    <v-list-item-avatar 
                        class="mx-auto"
                        size="80"
                        style="margin-top:80px;"
                    ><v-icon color="primary" x-large>mdi-plus</v-icon>
                    </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn 
                        v-on="on"
                        class="mx-auto"
                        outlined
                        rounded
                        @click="openDialog=true;"
                        color="primary"
                        style="font-weight:500; font-size:20px; padding:15px; border:solid 2px; max-width:250px; overflow:hidden"
                    >
                        운전자 등록
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
        <v-list two-line>
            <template>
                <v-list-item v-for="(data, n) in values" :key="n">
                    <v-list-item-avatar color="grey darken-1">
                        <v-img :src="data.photo ? data.photo:'https://cdn.vuetifyjs.com/images/cards/cooking.png'"/>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title style="margin-bottom:10px;">
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                        </v-list-item-title>

                        <v-list-item-subtitle style="font-size:25px; font-weight:700;">
                            [ DriverEmpNo :  {{data.driverEmpNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Name :  {{data.name }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CompanyCode :  {{data.companyCode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ WorksCode :  {{data.worksCode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ HrAccessLevel :  {{data.hrAccessLevel }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ SupervisorType :  {{data.supervisorType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CurrentJob :  {{data.currentJob }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ HandPhone :  {{data.handPhone }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LicenseNumber :  {{data.licenseNumber }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ NationalIdentifier :  {{data.nationalIdentifier }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ResourceId :  {{data.resourceId }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CarType :  {{data.carType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RetirementFlag :  {{data.retirementFlag }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RetiredDate :  {{data.retiredDate }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Image :  {{data.image }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Description :  {{data.description }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LastUpdateDate :  {{data.lastUpdateDate }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LastUpdatedBy :  {{data.lastUpdatedBy }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CreationDate :  {{data.creationDate }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CreatedBy :  {{data.createdBy }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CreatedObjectType :  {{data.createdObjectType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CreatedObjectId :  {{data.createdObjectId }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CreatedProgramId :  {{data.createdProgramId }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CreationTimestamp :  {{data.creationTimestamp }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LastUpdatedObjectType :  {{data.lastUpdatedObjectType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LastUpdatedObjectId :  {{data.lastUpdatedObjectId }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LastUpdateProgramId :  {{data.lastUpdateProgramId }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LastUpdateTimestamp :  {{data.lastUpdateTimestamp }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ DataEndStatus :  {{data.dataEndStatus }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ DataEndObjectType :  {{data.dataEndObjectType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ DataEndObjectId :  {{data.dataEndObjectId }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ DataEndProgramId :  {{data.dataEndProgramId }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ DataEndTimestamp :  {{data.dataEndTimestamp }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </v-list-item-subtitle>

                    </v-list-item-content>
                </v-list-item>

                <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
            </template>
        </v-list>

        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >

                    <CarmanagementDriver :offline="offline" class="video-card" :isNew="true" :editMode="true" v-model="newValue" @add="append" v-if="tick"/>
                
                    <v-btn
                            style="postition:absolute; top:2%; right:2%"
                            @click="closeDialog()"
                            depressed 
                            icon 
                            absolute
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-dialog>
            </div>
        </v-col>
    </div>
</template>

<script>
    const axios = require('axios').default;
    import CarmanagementDriver from './../CarmanagementDriver.vue';

    export default {
        name: 'CarmanagementDriverManager',
        components: {
            CarmanagementDriver,
        },
        props: {
            offline: Boolean,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            values: [],
            newValue: {},
            tick : true,
            openDialog : false,
        }),
        async created() {
            if(this.offline){
                if(!this.values) this.values = [];
                return;
            } 

            var temp = await axios.get(axios.fixUrl('/drivers'))
            temp.data._embedded.drivers.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])
            this.values = temp.data._embedded.drivers;
            
            this.newValue = {
                'driverEmpNo': '',
                'name': '',
                'companyCode': '',
                'worksCode': '',
                'hrAccessLevel': '',
                'supervisorType': '',
                'currentJob': '',
                'handPhone': '',
                'licenseNumber': '',
                'nationalIdentifier': '',
                'resourceId': 0,
                'carType': '',
                'retirementFlag': '',
                'retiredDate': '2024-11-14',
                'image': {},
                'description': '',
                'lastUpdateDate': '2024-11-14',
                'lastUpdatedBy': 0,
                'creationDate': '2024-11-14',
                'createdBy': 0,
                'createdObjectType': '',
                'createdObjectId': '',
                'createdProgramId': '',
                'creationTimestamp': '2024-11-14',
                'lastUpdatedObjectType': '',
                'lastUpdatedObjectId': '',
                'lastUpdateProgramId': '',
                'lastUpdateTimestamp': '2024-11-14',
                'dataEndStatus': '',
                'dataEndObjectType': '',
                'dataEndObjectId': '',
                'dataEndProgramId': '',
                'dataEndTimestamp': '2024-11-14',
            }
        },
        methods: {
            closeDialog(){
                this.openDialog = false
            },
            append(value){
                this.tick = false
                this.newValue = {}
                this.values.push(value)
                
                this.$emit('input', this.values);

                this.$nextTick(function(){
                    this.tick=true
                })
            }
        },
    };
</script>


<style>
    .video-card {
        width:300px; 
        margin-left:4.5%; 
        margin-top:50px; 
        margin-bottom:50px;
    }
</style>

