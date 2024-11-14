<template>
    <div>
    <h1>차량</h1>
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
                        차량 등록
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
                            [ ResourceId :  {{data.resourceId }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CarrierNo :  {{data.carrierNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ WorksCode :  {{data.worksCode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CompanyCode :  {{data.companyCode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CarType :  {{data.carType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CarModel :  {{data.carModel }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Usage :  {{data.usage }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ FuelFlag :  {{data.fuelFlag }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ PartCompanyCd :  {{data.partCompanyCd }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OwnerTypeCode :  {{data.ownerTypeCode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ AssetNumber :  {{data.assetNumber }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OrganizationName :  {{data.organizationName }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ AcquisitionAmt :  {{data.acquisitionAmt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ DriverEmpNo :  {{data.driverEmpNo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ UserName :  {{data.userName }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RegistDate :  {{data.registDate }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ReversalDate :  {{data.reversalDate }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ManagementNumber :  {{data.managementNumber }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Type :  {{data.type }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ YearTp :  {{data.yearTp }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MdOutputValue :  {{data.mdOutputValue }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LcaHeight :  {{data.lcaHeight }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Quantity :  {{data.quantity }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ PersonCount :  {{data.personCount }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ StandardValue :  {{data.standardValue }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MaxCapacity :  {{data.maxCapacity }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ShortDistance :  {{data.shortDistance }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LaneDistance :  {{data.laneDistance }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LoadedTravelDistance :  {{data.loadedTravelDistance }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ InspectionDate :  {{data.inspectionDate }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                            [ Weight40Max :  {{data.weight40Max }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Width40Max :  {{data.width40Max }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ LengthConstraintKan :  {{data.lengthConstraintKan }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ UsedWeight :  {{data.usedWeight }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ DriverIds :  {{data.driverIds }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Usage :  {{data.usage }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

                    <CarmanagementCar :offline="offline" class="video-card" :isNew="true" :editMode="true" v-model="newValue" @add="append" v-if="tick"/>
                
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
    import CarmanagementCar from './../CarmanagementCar.vue';

    export default {
        name: 'CarmanagementCarManager',
        components: {
            CarmanagementCar,
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

            var temp = await axios.get(axios.fixUrl('/cars'))
            temp.data._embedded.cars.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])
            this.values = temp.data._embedded.cars;
            
            this.newValue = {
                'resourceId': 0,
                'carrierNo': '',
                'worksCode': '',
                'companyCode': '',
                'carType': '',
                'carModel': '',
                'usage': '',
                'fuelFlag': '',
                'partCompanyCd': '',
                'ownerTypeCode': '',
                'assetNumber': '',
                'organizationName': '',
                'acquisitionAmt': {},
                'driverEmpNo': '',
                'userName': '',
                'registDate': '2024-11-14',
                'reversalDate': '2024-11-14',
                'managementNumber': '',
                'type': '',
                'yearTp': '',
                'mdOutputValue': '',
                'lcaHeight': 0,
                'quantity': 0,
                'personCount': 0,
                'standardValue': 0,
                'maxCapacity': 0,
                'shortDistance': 0,
                'laneDistance': 0,
                'loadedTravelDistance': 0,
                'inspectionDate': '2024-11-14',
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
                'weight40Max': 0,
                'width40Max': 0,
                'lengthConstraintKan': 0,
                'usedWeight': 0,
                'driverIds': [],
                'usage': '',
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

