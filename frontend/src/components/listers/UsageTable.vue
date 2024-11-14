<template>

    <v-data-table
            :headers="headers"
            :items="usage"
            :items-per-page="5"
            class="elevation-1"
    ></v-data-table>

</template>

<script>

    export default {
        name: 'UsageList',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { 
                    text: "id", 
                    value: "id" 
                },
                { 
                    text: "a", 
                    value: "a" 
                },
                { 
                    text: "b", 
                    value: "b" 
                },
                { 
                    text: "c", 
                    value: "c" 
                },
            ],
            usage : [],
        }),
        async created() {
            if(!this.value) this.value = [];
        },
        methods: {
        }
    }
</script>

