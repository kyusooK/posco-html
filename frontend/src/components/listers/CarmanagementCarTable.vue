<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="values"
                :items-per-page="5"
                class="elevation-1"
        ></v-data-table>

        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-fab-transition>
                            <v-btn
                                    color="primary"
                                    fab
                                    dark
                                    large
                                    style="position:absolute; bottom: 5%; right: 2%; z-index:99"
                                    @click="openDialog=true;"
                            >
                                <v-icon v-bind="attrs" v-on="on">mdi-plus</v-icon>
                            </v-btn>
                        </v-fab-transition>
                    </template>

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
            headers: 
                [
                    { text: "resourceId", value: "resourceId" },
                    { text: "carrierNo", value: "carrierNo" },
                    { text: "worksCode", value: "worksCode" },
                    { text: "companyCode", value: "companyCode" },
                    { text: "carType", value: "carType" },
                    { text: "carModel", value: "carModel" },
                    { text: "usage", value: "usage" },
                    { text: "fuelFlag", value: "fuelFlag" },
                    { text: "partCompanyCd", value: "partCompanyCd" },
                    { text: "ownerTypeCode", value: "ownerTypeCode" },
                    { text: "assetNumber", value: "assetNumber" },
                    { text: "organizationName", value: "organizationName" },
                    { text: "acquisitionAmt", value: "acquisitionAmt" },
                    { text: "driverEmpNo", value: "driverEmpNo" },
                    { text: "userName", value: "userName" },
                    { text: "registDate", value: "registDate" },
                    { text: "reversalDate", value: "reversalDate" },
                    { text: "managementNumber", value: "managementNumber" },
                    { text: "type", value: "type" },
                    { text: "yearTp", value: "yearTp" },
                    { text: "mdOutputValue", value: "mdOutputValue" },
                    { text: "lcaHeight", value: "lcaHeight" },
                    { text: "quantity", value: "quantity" },
                    { text: "personCount", value: "personCount" },
                    { text: "standardValue", value: "standardValue" },
                    { text: "maxCapacity", value: "maxCapacity" },
                    { text: "shortDistance", value: "shortDistance" },
                    { text: "laneDistance", value: "laneDistance" },
                    { text: "loadedTravelDistance", value: "loadedTravelDistance" },
                    { text: "inspectionDate", value: "inspectionDate" },
                    { text: "description", value: "description" },
                    { text: "lastUpdateDate", value: "lastUpdateDate" },
                    { text: "lastUpdatedBy", value: "lastUpdatedBy" },
                    { text: "creationDate", value: "creationDate" },
                    { text: "createdBy", value: "createdBy" },
                    { text: "createdObjectType", value: "createdObjectType" },
                    { text: "createdObjectId", value: "createdObjectId" },
                    { text: "createdProgramId", value: "createdProgramId" },
                    { text: "creationTimestamp", value: "creationTimestamp" },
                    { text: "lastUpdatedObjectType", value: "lastUpdatedObjectType" },
                    { text: "lastUpdatedObjectId", value: "lastUpdatedObjectId" },
                    { text: "lastUpdateProgramId", value: "lastUpdateProgramId" },
                    { text: "lastUpdateTimestamp", value: "lastUpdateTimestamp" },
                    { text: "dataEndStatus", value: "dataEndStatus" },
                    { text: "dataEndObjectType", value: "dataEndObjectType" },
                    { text: "dataEndObjectId", value: "dataEndObjectId" },
                    { text: "dataEndProgramId", value: "dataEndProgramId" },
                    { text: "dataEndTimestamp", value: "dataEndTimestamp" },
                    { text: "weight40Max", value: "weight40Max" },
                    { text: "width40Max", value: "width40Max" },
                    { text: "lengthConstraintKan", value: "lengthConstraintKan" },
                    { text: "usedWeight", value: "usedWeight" },
                    { text: "driverIds", value: "driverIds" },
                    { text: "usage", value: "usage" },
                ],
            car : [],
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
            },
        }
    }
</script>

