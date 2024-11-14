<template>
    <v-card style="width:450px; height:100%;" outlined>
        <template slot="progress">
            <v-progress-linear
                    color="primary-darker-1"
                    height="10"
                    indeterminate
            ></v-progress-linear>
        </template>

        <v-card-title v-if="value._links">
            차량 # {{decode(value._links.self.href.split("/")[value._links.self.href.split("/").length - 1])}}
        </v-card-title >
        <v-card-title v-else>
            차량
        </v-card-title >        

        <v-card-text style="background-color: white;">
            <Number v-if="editMode" label="자원 ID" v-model="value.resourceId" :editMode="editMode" :inputUI="''"/>
            <String label="운송 번호" v-model="value.carrierNo" :editMode="editMode" :inputUI="''"/>
            <String label="작업 코드" v-model="value.worksCode" :editMode="editMode" :inputUI="''"/>
            <String label="회사 코드" v-model="value.companyCode" :editMode="editMode" :inputUI="''"/>
            <String label="차량 유형" v-model="value.carType" :editMode="editMode" :inputUI="''"/>
            <String label="차량 모델" v-model="value.carModel" :editMode="editMode" :inputUI="''"/>
            <String label="용도" v-model="value.usage" :editMode="editMode" :inputUI="''"/>
            <String label="연료 플래그" v-model="value.fuelFlag" :editMode="editMode" :inputUI="''"/>
            <String label="부품 회사 코드" v-model="value.partCompanyCd" :editMode="editMode" :inputUI="''"/>
            <String label="소유자 유형 코드" v-model="value.ownerTypeCode" :editMode="editMode" :inputUI="''"/>
            <String label="자산 번호" v-model="value.assetNumber" :editMode="editMode" :inputUI="''"/>
            <String label="조직 이름" v-model="value.organizationName" :editMode="editMode" :inputUI="''"/>
            <Money offline label="취득 금액" v-model="value.acquisitionAmt" :editMode="editMode" @change="change"/>
            <String label="운전자 사원 번호" v-model="value.driverEmpNo" :editMode="editMode" :inputUI="''"/>
            <String label="사용자 이름" v-model="value.userName" :editMode="editMode" :inputUI="''"/>
            <Date label="등록 날짜" v-model="value.registDate" :editMode="editMode" :inputUI="''"/>
            <Date label="반전 날짜" v-model="value.reversalDate" :editMode="editMode" :inputUI="''"/>
            <String label="관리 번호" v-model="value.managementNumber" :editMode="editMode" :inputUI="''"/>
            <String label="유형" v-model="value.type" :editMode="editMode" :inputUI="''"/>
            <String label="연도 유형" v-model="value.yearTp" :editMode="editMode" :inputUI="''"/>
            <String label="MD 출력 값" v-model="value.mdOutputValue" :editMode="editMode" :inputUI="''"/>
            <Number label="LCA 높이" v-model="value.lcaHeight" :editMode="editMode" :inputUI="''"/>
            <Number label="수량" v-model="value.quantity" :editMode="editMode" :inputUI="''"/>
            <Number label="인원 수" v-model="value.personCount" :editMode="editMode" :inputUI="''"/>
            <Number label="표준 값" v-model="value.standardValue" :editMode="editMode" :inputUI="''"/>
            <Number label="최대 용량" v-model="value.maxCapacity" :editMode="editMode" :inputUI="''"/>
            <Number label="단거리" v-model="value.shortDistance" :editMode="editMode" :inputUI="''"/>
            <Number label="차선 거리" v-model="value.laneDistance" :editMode="editMode" :inputUI="''"/>
            <Number label="적재 여행 거리" v-model="value.loadedTravelDistance" :editMode="editMode" :inputUI="''"/>
            <Date label="검사 날짜" v-model="value.inspectionDate" :editMode="editMode" :inputUI="''"/>
            <String label="설명" v-model="value.description" :editMode="editMode" :inputUI="''"/>
            <Date label="마지막 업데이트 날짜" v-model="value.lastUpdateDate" :editMode="editMode" :inputUI="''"/>
            <Number label="마지막 업데이트한 사람" v-model="value.lastUpdatedBy" :editMode="editMode" :inputUI="''"/>
            <Date label="생성 날짜" v-model="value.creationDate" :editMode="editMode" :inputUI="''"/>
            <Number label="생성한 사람" v-model="value.createdBy" :editMode="editMode" :inputUI="''"/>
            <String label="생성 객체 유형" v-model="value.createdObjectType" :editMode="editMode" :inputUI="''"/>
            <String label="생성 객체 ID" v-model="value.createdObjectId" :editMode="editMode" :inputUI="''"/>
            <String label="생성 프로그램 ID" v-model="value.createdProgramId" :editMode="editMode" :inputUI="''"/>
            <Date label="생성 타임스탬프" v-model="value.creationTimestamp" :editMode="editMode" :inputUI="''"/>
            <String label="마지막 업데이트 객체 유형" v-model="value.lastUpdatedObjectType" :editMode="editMode" :inputUI="''"/>
            <String label="마지막 업데이트 객체 ID" v-model="value.lastUpdatedObjectId" :editMode="editMode" :inputUI="''"/>
            <String label="마지막 업데이트 프로그램 ID" v-model="value.lastUpdateProgramId" :editMode="editMode" :inputUI="''"/>
            <Date label="마지막 업데이트 타임스탬프" v-model="value.lastUpdateTimestamp" :editMode="editMode" :inputUI="''"/>
            <String label="데이터 종료 상태" v-model="value.dataEndStatus" :editMode="editMode" :inputUI="''"/>
            <String label="데이터 종료 객체 유형" v-model="value.dataEndObjectType" :editMode="editMode" :inputUI="''"/>
            <String label="데이터 종료 객체 ID" v-model="value.dataEndObjectId" :editMode="editMode" :inputUI="''"/>
            <String label="데이터 종료 프로그램 ID" v-model="value.dataEndProgramId" :editMode="editMode" :inputUI="''"/>
            <Date label="데이터 종료 타임스탬프" v-model="value.dataEndTimestamp" :editMode="editMode" :inputUI="''"/>
            <Number label="최대 중량 40" v-model="value.weight40Max" :editMode="editMode" :inputUI="''"/>
            <Number label="최대 폭 40" v-model="value.width40Max" :editMode="editMode" :inputUI="''"/>
            <Number label="길이 제약 칸" v-model="value.lengthConstraintKan" :editMode="editMode" :inputUI="''"/>
            <Number label="사용된 중량" v-model="value.usedWeight" :editMode="editMode" :inputUI="''"/>
            <DriverIdManager offline label="DriverIds" v-model="value.driverIds" :editMode="editMode" @change="change"/>
            <Usage offline label="Usage" v-model="value.usage" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions style="background-color: white;">
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="edit"
                v-if="!editMode"
            >
                수정
            </v-btn>
            <div v-else>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    차량 생성
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    UpdateCar
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    DeleteCar
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
                >
                    삭제
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode && !isNew"
                >
                    취소
                </v-btn>
            </div>
        </v-card-actions>
        <v-card-actions>
            <v-spacer></v-spacer>
        </v-card-actions>

        <v-snackbar
            v-model="snackbar.status"
            :top="true"
            :timeout="snackbar.timeout"
            color="error"
        >
            {{ snackbar.text }}
            <v-btn dark text @click="snackbar.status = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-card>

</template>

<script>
    const axios = require('axios').default;

    import Money from './vo/Money.vue';

    export default {
        name: 'CarmanagementCar',
        components:{
            Money,
        },
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
        },
        data: () => ({
            snackbar: {
                status: false,
                timeout: 5000,
                text: '',
            },
        }),
	async created() {
        },
        methods: {
            decode(value) {
                return decodeURIComponent(value);
            },
            selectFile(){
                if(this.editMode == false) {
                    return false;
                }
                var me = this
                var input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.id = "uploadInput";
                
                input.click();
                input.onchange = function (event) {
                    var file = event.target.files[0]
                    var reader = new FileReader();

                    reader.onload = function () {
                        var result = reader.result;
                        me.imageUrl = result;
                        me.value.photo = result;
                        
                    };
                    reader.readAsDataURL( file );
                };
            },
            edit() {
                this.editMode = true;
            },
            async save(){
                try {
                    var temp = null;

                    if(!this.offline) {
                        if(this.isNew) {
                            temp = await axios.post(axios.fixUrl('/cars'), this.value)
                        } else {
                            temp = await axios.put(axios.fixUrl(this.value._links.self.href), this.value)
                        }
                    }

                    if(this.value!=null) {
                        for(var k in temp.data) this.value[k]=temp.data[k];
                    } else {
                        this.value = temp.data;
                    }

                    this.editMode = false;
                    this.$emit('input', this.value);

                    if (this.isNew) {
                        this.$emit('add', this.value);
                    } else {
                        this.$emit('edit', this.value);
                    }

                    location.reload()

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
                
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.value._links.self.href))
                    }

                    this.editMode = false;
                    this.isDeleted = true;

                    this.$emit('input', this.value);
                    this.$emit('delete', this.value);

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
            },
            change(){
                this.$emit('input', this.value);
            },
        },
    }
</script>

