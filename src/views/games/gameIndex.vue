<template>
    <div id="gameIndex">
        <div class="gameIndex" :style = "{ height:pageHeight }">
            <div class="gameTop">
              <div class="gameTitle">抓娃娃机</div>
              <mu-raised-button label="退出" @click="$router.back()" class="gameOut"/>
            </div>
            <div class="playBox">
                <div v-show="playState" class="playingText">抓取中，请稍等</div>
                <div :style="{ marginLeft: ml , marginTop:mt }" class="zhuazi"><img src="../../assets/img/games/zhuazi.png" alt=""/></div>
                <div class="giftBox">
                  <div :style="{bottom:bl+'px'}"><img src="../../assets/img/games/box.png" alt=""/></div>
                  <div class="giftBoxCenter" :style="{ bottom:bc+'px'}"><img src="../../assets/img/games/box.png" alt=""/></div>
                  <div class="giftBoxRight" :style="{ bottom:br+'px'}"><img src="../../assets/img/games/box.png" alt=""/></div>
                  <p class="giftBoxHint">点击查看对应商品</p>
                </div>
            </div>
          <div class="handle">
                <div class="arrow">
                    <button @touchstart="playArrow" @touchend="playUp" class="topA"><img src="../../assets/img/games/top.png" alt="top"/></button>
                    <button @touchstart="playArrow" @touchend="playUp" class="downA"><img src="../../assets/img/games/down.png" alt="down"/></button>
                    <button @touchstart="playArrow" @touchend="playUp" class="leftA"><img src="../../assets/img/games/left.png" alt="left"/></button>
                    <button @touchstart="playArrow" @touchend="playUp" class="rightA"><img src="../../assets/img/games/right.png" alt="right"/></button>
                </div>
              <div>
                <button class="play" @click="playNow"><span class="iconfont icon-wawaji wawalogo"></span></button>
              </div>
            </div>
          <div class="diaLog">
            <mu-dialog :open="dialog1" title="" @close="close1">
              <mu-raised-button label="立即充值" class="gamePayBtn"/>
              <div class="dialog1Money">剩余金币数:<span class="iconfont inco-"></span><span>{{money}}</span></div>
              <div class="gameStartImg"><img src="../../assets/img/games/gameLog1.png" alt=""/></div>
              <div class="gamePlayBtnBox">
                <p>一次抓取将消耗<span>5</span>点金币</p>
                <mu-raised-button label="等等再来" @click="close1" class="gameTryNow  colorDefault"/>
                   <span v-if="money>5">
                     <mu-raised-button label="立即试抓" @click="playTry"  class="gameTryNow" secondary/>
                </span>
                <span v-else>
                   <mu-raised-button label="金币不足"class="gameTryNow colorDefault"/>
                </span>
              </div>
            </mu-dialog>
            <mu-dialog :open="dialog2" title="" @close="close1">
              <mu-raised-button label="立即充值" class="gamePayBtn"/>
              <div class="dialog1Money">剩余金币数:<span class="iconfont inco-"></span><span>{{money}}</span></div>
              <div class="gameStartImg"><img :src="'/img/'+goodsInfo.g_img" alt=""/></div>
              <div class="gamePlayBtnBox">
                <p>恭喜你,抓中一只<span class="gameGoodsName">{{goodsInfo.g_name}}</span></p>
                <mu-raised-button label="立即查看" @click="close1" class="gameTryNow  colorDefault"/>
                <span v-if="money>5">
                     <mu-raised-button label="再来一次" @click="playTry"  class="gameTryNow" secondary/>
                </span>
                <span v-else>
                   <mu-raised-button label="金币不足"  class="gameTryNow colorDefault"/>
                </span>
              </div>
            </mu-dialog>
            <mu-dialog :open="dialog3" title="" @close="close1">
              <mu-raised-button label="立即充值" class="gamePayBtn"/>
              <div class="dialog1Money">剩余金币数:<span class="iconfont inco-"></span><span>{{money}}</span></div>
              <div class="gameStartImg"><img src="../../assets/img/games/gameLog3.png" alt=""/></div>
              <div class="gamePlayBtnBox">
                <mu-raised-button label="调整位置" @click="close1" class="gameTryNow  colorDefault"/>
                <span v-if="money>5">
                     <mu-raised-button label="再来一次" @click="playTry"  class="gameTryNow" secondary/>
                </span>
                <span v-else>
                   <mu-raised-button label="金币不足" class="gameTryNow colorDefault"/>
                </span>
              </div>
            </mu-dialog>
          </div>
        </div>
    </div>
</template>


<script type="es6">
    export default {
        name: '',
        data: function () {
            return {
              dialog1:false,
              dialog2:false,
              dialog3:false,
              pageHeight:0,
              playState:false,
              ml:0,
              mt:0,
              bl:0,
              bc:0,
              br:0,
              probability:0.5,
              money:0,
              userId:1,
              topTimer:'',
              downTimer:'',
              leftTimer:'',
              rightTimer:'',
              zzBoxWidth:0,
              goodsInfo:{'g_img':''},
              goodsInfoImg:'',
              bgmSrc:''
            }
        },
        created:function(){
            this.pageHeight=window.screen.height+"px";
            this.userId=sessionStorage.getItem('userId');
          if(!this.userId){
            this.$router.push('/login')
          }
            this.getMoney()
        },
      mounted(){
        let zhuazi = document.getElementsByClassName('zhuazi')[0];
        this.zzBoxWidth=parseInt(window.getComputedStyle(zhuazi).width)/2;
      },
      methods: {
        getMoney(){
          this.$axios.get('http://172.16.10.22:8888/api/user/userInfo.do?userId='+this.userId).then((res)=>{
            this.money=res.data.data[0].u_money
          })
        },
        playArrow(e){
          if(!this.playState){
            if (e.target.alt == 'top') {
              this.playTop()
            }
            else if (e.target.alt == 'down') {
              this.playDown()
            }
            else if (e.target.alt == 'left') {
              this.playLeft()
            }
            else if (e.target.alt == 'right') {
              this.playRight()
            }
          }
        },
        playUp(e){
          if (e.target.alt == 'top') {
            clearInterval(this.topTimer)
          }
          else if (e.target.alt == 'down') {
            clearInterval(this.downTimer)
          }
          else if (e.target.alt == 'left') {
            clearInterval(this.leftTimer)
          }
          else if (e.target.alt == 'right') {
            clearInterval(this.rightTimer)
          }
        },
        playTop(){
          this.topTimer = setInterval(()=> {
            let mt = parseInt(this.mt);
            if (mt > 0) {
              mt--;
            }
            this.mt = mt + 'px'
          }, 50)
        },
        playDown(){
          this.downTimer = setInterval(()=> {
            let mt = parseInt(this.mt);
            if (mt < 40) {
                mt++;
              }
              this.mt = mt + 'px'
            }, 50)
          },
          playLeft(){
            this.leftTimer = setInterval(()=> {
              let ml = parseInt(this.ml);
              if (ml > -this.zzBoxWidth-68) {
                ml--;
              }
              this.ml = ml + 'px'
            }, 15)
          },
        playRight(){
          this.rightTimer = setInterval(()=> {
            let ml = parseInt(this.ml);
            if(ml < this.zzBoxWidth+68){
              ml++;
            }
            this.ml = ml + 'px'
          }, 15)
        },
        playNow(){
          if(!this.playState){
            this.dialog1 = true;
          }
          //this.playing()
        },
        playTry(){
          this.dialog1 = false;
          this.dialog2 = false;
          this.dialog3 = false;
          let Url;
          if (parseInt(this.ml) > this.zzBoxWidth - 34) {
            Url = 'http://172.16.10.22:8888/api/store/specialGoods.do';
          } else if (parseInt(this.ml) < -this.zzBoxWidth) {
            Url = 'http://172.16.10.22:8888/api/store/newGoods.do';
          } else {
            Url = 'http://172.16.10.22:8888/api/store/goodsList.do';
          }
          this.$axios.get(Url).then((data)=> {
            let goodsLength = data.data.data.length;
            let goodsInfo = data.data.data;
            let goodsIndex = parseInt(Math.random() * goodsLength);
            this.goodsInfo = goodsInfo[goodsIndex];
          });
          this.playing()
        },
        playing(){
          this.$axios.get('http://172.16.10.22:8888/api/user/pay.do?userId=' + this.userId + '&money=' + (this.money - 5)).then((res)=> {
            this.getMoney()
          });
          this.playState = true;
          let isSuccess = false;
          let probability = Math.random();
          if (probability < this.probability) {
            isSuccess = true;
          }
          let startP = parseInt(this.mt);
          new Promise((resolve, reject)=> {
            let timer1 = setInterval(()=> {
              let mt = parseInt(this.mt);
              if (mt < 140) {
                mt++;
              } else {
                clearInterval(timer1);
                resolve()
              }
              this.mt = mt + 'px'
            }, 30)
          }).then((data)=> {
              return new Promise((resolve, reject)=> {
                let timer2 = setInterval(()=> {
                  let mt = parseInt(this.mt);
                  if (mt > startP) {
                    if (isSuccess) {
                      if (parseInt(this.ml) > this.zzBoxWidth - 34) {
                        this.br++;
                      } else if (parseInt(this.ml) < -this.zzBoxWidth) {
                        this.bl++;
                      } else {
                        this.bc++;
                      }
                    }
                    mt--;
                  } else {
                    clearInterval(timer2);
                    resolve()
                  }
                  this.mt = mt + 'px'
                }, 30);
              })
            }).then(()=> {
              this.bl = 0;
              this.bc = 0;
              this.br = 0;
              this.playState = false;
              if (isSuccess) {
                this.$axios.get('http://172.16.10.22:8888/api/game/getPrize.do?goodsId='+this.goodsInfo.g_id+'&userId='+this.userId).then((res)=>{
                  //console.log(res.data)
                });
                this.dialog2 = true
              } else {
                this.dialog3 = true
              }
            })
        },
        open1 () {
          this.dialog1 = true
        },
        close1 () {
          this.dialog1 = false;
          this.dialog2 = false;
          this.dialog3 = false
        }
      }
    }
</script>

<style scoped>
@import '../../assets/css/games/gameIndex.css';
</style>
