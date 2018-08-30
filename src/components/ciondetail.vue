<template>
    <div>
       {{msg.detail}}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name:this.$route.params.name,
                msg:{}
            }

        },
        created(){
            console.log(this.$route.params.name)
            this.getDetailMsg()
        },
        methods: {
            getDetailMsg(){
                const that=this;
                this.$http.post('/api/coin',{coin:that.name}).then(res=>{
                    that.msg=res.data[0]
                }).catch(err=>{
                    console.log(err)
                })
                // this.$http.post(api+'/coin',{coin:that.name}).then(res=>{
                //     that.msg=res.data[0]
                // }).catch(err=>{
                //     console.log(err)
                // })
            }

        }
    }
</script>
<style lang="scss" scoped>

</style>