<template>
    <div class="index">
        <p>投票规则：</p>
        <div class="handing">
            <p style="color:red;margin:1rem 0 -1rem 0;">正在投票：</p>
            <ul>
                <li v-for="(item,i) in msg" :key="i">
                    <img :src="item.url" alt="" @click="gomsg(item.name)" title="点击查看详细信息">
                    <el-button type="text" @click="showmodel(item.address)">点击投票</el-button>
                    <p><span>币种</span><em>{{item.name}}</em></p>
                    <p class="shengyu"><span>总量</span><em>{{item.snum>10000?parseFloat(item.snum/10000)+'万':item.snum||0}}</em></p>
                    <p class="yitou"><span>已投</span><em>{{item.num>10000?parseFloat(item.num/10000)+'万':item.num||0}}</em></p>
                    <p class="shengyu"><span>剩余</span><em>{{(item.snum-item.num)>10000?parseFloat((item.snum-item.num)/10000)+'万':item.snum-item.num}}</em></p>
                </li>
            </ul>
        </div>
        <div class="handed">
            <p style="color:#409EFF;">投票结束：</p>
            <ul>
                <li>币种，结束时间</li>
            </ul>
        </div>
        <el-dialog title="投票地址" :visible.sync="dialogTableVisible">
            <div class="qr">
                <qriously :value="initQCode" :size="220" :style="'margin:0 auto'" />
                <p>
                    <span>{{initQCode}}</span>
                    <span class="copyBtn" :data-clipboard-text="initQCode" @click="open2">
                                 复制地址
                            </span>
                </p>
            </div>
            <!--<div slot="footer" class="dialog-footer">
                            <el-button @click="dialogTableVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
                        </div>-->
        </el-dialog>
    </div>
</template>
<script>
    import Clipboard from 'clipboard'
    let clipboard = new Clipboard('.copyBtn')
    export default {
        data() {
            return {
                msg: [],
                dialogTableVisible: false,
                initQCode: '12345'
            }
        },
        created() {
            this.getAllMsg()
        },
        mounted() {
            const that = this
            setInterval(() => {
                that.getAllMsg()
            }, 10000)
        },
        methods: {
            open2() {
                this.$message({
                    message: '复制成功',
                    type: 'success'
                });
            },
            gomsg(name) {
                this.$router.push({
                    path: '/coinmsg/' + name
                })
            },
            getAllMsg() {
                const that = this
                // this.$http.get(api+'/vote').then(res=>{
                //     console.log(res)
                //     that.msg=res.data
                // }).catch(err=>{
                //     console.log(err)
                // })
                this.$http.get('/api/vote').then(res => {
                    console.log(res)
                    that.msg = res.data
                }).catch(err => {
                    console.log(err)
                })
            },
            showmodel(address) {
                this.dialogTableVisible = true
                this.initQCode = address
            }
        }
    }
</script>
<style lang="scss" scoped>
    .index {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%; //display:flex;
        // align-items:center;
        min-height: 100vh;
        justify-content: center;
        .handing {
            ul {
                display: flex;
                flex-wrap: wrap; //justify-content:space-around;
                //margin-bottom:2rem;
                padding: 2rem 0 0 0;
                width: 100%;
                li {
                    width: 21%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-bottom: 2rem;
                    background: #fff;
                    box-shadow: 0px 0px 10px 5px #ccc;
                    padding: 1rem 0;
                    margin-right: 4%;
                    button {
                        height: 2.5rem;
                        background: #409EFF;
                        color: #fff;
                        width: 5rem;
                        margin: 1rem auto;
                    }
                    p {
                        display: flex;
                        justify-content: space-between;
                        width: 70%;
                        margin: 0 auto;
                        line-height: 2rem;
                    }
                    p.yitou {
                        color: red;
                        font-weight: 700;
                    }
                    p.shengyu {
                        // color:green;
                    }
                    img {
                        display: block;
                        width: 60%;
                        height: auto;
                        margin: 0 auto;
                        border-radius: 100%;
                        cursor: pointer;
                    }
                }
            }
        }
        .handed{
            ul{
                li{
                    
                }
            }
        }
        .qr {
            display: flex;
            justify-content: center;
            flex-direction: column;
            p {
                text-align: center;
                margin-top: 1rem;
            }
        }
        .copyBtn {
            color: blue;
        }
    }
    @media screen and (max-width:768px) {
        .index {
            ul {
                padding: 2rem 0 0 0;
                li {
                    width: 44%;
                }
            }
            .el-dialog {
                width: 80% !important;
            }
        }
    }
    @media screen and (max-width:480px) {
        .index {
            ul {
                padding: 2rem 0 0 0;
                li {
                    width: 90%;
                }
            }
        }
        .el-dialog {
            width: 60% !important;
        }
    }
</style>