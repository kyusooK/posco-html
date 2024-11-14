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
            운전자 # {{decode(value._links.self.href.split("/")[value._links.self.href.split("/").length - 1])}}
        </v-card-title >
        <v-card-title v-else>
            운전자
        </v-card-title >        

        <v-card-text style="background-color: white;">
            <String v-if="editMode" label="운전자 사원 번호" v-model="value.driverEmpNo" :editMode="editMode" :inputUI="''"/>
            <String label="이름" v-model="value.name" :editMode="editMode" :inputUI="''"/>
            <String label="회사 코드" v-model="value.companyCode" :editMode="editMode" :inputUI="''"/>
            <String label="작업 코드" v-model="value.worksCode" :editMode="editMode" :inputUI="''"/>
            <String label="HR 접근 레벨" v-model="value.hrAccessLevel" :editMode="editMode" :inputUI="''"/>
            <String label="감독자 유형" v-model="value.supervisorType" :editMode="editMode" :inputUI="''"/>
            <String label="현재 직업" v-model="value.currentJob" :editMode="editMode" :inputUI="''"/>
            <String label="핸드폰" v-model="value.handPhone" :editMode="editMode" :inputUI="''"/>
            <String label="면허 번호" v-model="value.licenseNumber" :editMode="editMode" :inputUI="''"/>
            <String label="국가 식별자" v-model="value.nationalIdentifier" :editMode="editMode" :inputUI="''"/>
            <Number label="자원 ID" v-model="value.resourceId" :editMode="editMode" :inputUI="''"/>
            <String label="차량 유형" v-model="value.carType" :editMode="editMode" :inputUI="''"/>
            <String label="퇴직 플래그" v-model="value.retirementFlag" :editMode="editMode" :inputUI="''"/>
            <Date label="퇴직 날짜" v-model="value.retiredDate" :editMode="editMode" :inputUI="''"/>
            <Photo offline label="이미지" v-model="value.image" :editMode="editMode" @change="change"/>
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
                    운전자 생성
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    UpdateDriver
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    DeleteDriver
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

    import Photo from './vo/Photo.vue';

    export default {
        name: 'CarmanagementDriver',
        components:{
            Photo,
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
                            temp = await axios.post(axios.fixUrl('/drivers'), this.value)
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

