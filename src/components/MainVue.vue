<template>
  <div class="hello">
    <flex-box direction="column">
      <flex-item class="toggle-buttons">
        <flex-box align-items="center" wrap="wrap">
          <flex-item>
            ボールサイズ:<input
              type="range"
              v-model="r"
              min="8.0"
              max="12"
              step="0.1"
              style="width: 100px"
            />
          </flex-item>
          <flex-item>
            タップ:{{ tapSize }}mm<input
              type="range"
              v-model="tapSize"
              min="12"
              max="20"
              step="0.1"
              style="width: 100px"
            />
          </flex-item>
          <flex-item>
            見下ろし角度:<input
              type="range"
              v-model="phi"
              min="0.1"
              max="1.5"
              step="0.01"
              style="width: 100px"
            />
          </flex-item>
          <flex-item>
            <toggle-button
              :labels="{ checked: 'ズームON', unchecked: 'ズームOFF' }"
              v-model="zoom"
              :width="100"
            />
          </flex-item>
          <flex-item>
            <toggle-button
              :labels="{ checked: 'GB表示', unchecked: 'GB非表示' }"
              v-model="showGB"
              :width="100"
            />
          </flex-item>
          <flex-item>
            <toggle-button
              :labels="{ checked: 'GB中心', unchecked: '的球中心' }"
              v-model="lookAtGb"
              :width="100"
            />
          </flex-item>
          <flex-item>
            <toggle-button
              :labels="{ checked: 'Train On', unchecked: 'Train Off' }"
              v-model="trainBalls"
              :width="100"
            />
          </flex-item>
          <flex-item>
            <toggle-button
              :labels="{ checked: 'Guide On', unchecked: 'Guide Off' }"
              v-model="betweenLine"
              :width="100"
            />
          </flex-item>
          <flex-item>
            <toggle-button
              :labels="{ checked: 'Scroll Lock', unchecked: 'Scroll Unlock' }"
              v-model="scrollLock"
              :width="100"
            />
          </flex-item>
        </flex-box>
      </flex-item>
      <flex-item>
        <flex-box v-if="!isSmartPhone">
          <flex-item>
            <!-- 2D 表示 -->
            <pool
              ref="pool"
              :cb="cb"
              :ob="ob"
              :pk="pk"
              :radius="r"
              :na="naturalAngle"
              @moveBall="onMoveBall"
              @degreeGB2CB="onDegreeGB2CB"
              @selectPocket="onSelectPocket"
              @setGB="onSetGB"
              @moveEnd="onMoveEnd"
            ></pool>
          </flex-item>
          <flex-item>
            <flex-box direction="column">
              <flex-item style="width: 800px">
                <flex-box>
                  <flex-item>
                    <!-- 厚み表示 -->
                    <thick-ball
                      :degree="gb2cbDegree"
                      :tap-size="tapSize"
                      @thickPercent="onThickPercent"
                    />
                  </flex-item>
                  <flex-item>
                    <!-- コンタクトポイント -->
                    <contact-point
                      :degree="gb2cbDegree"
                      :dispDegree="getDegree()"
                    />
                  </flex-item>
                </flex-box>
              </flex-item>
              <flex-item style="width: 800px">
                <!-- 3D 表示 -->
                <gl-panel
                  ref="gl_panel"
                  :radius="r"
                  :cb="cb"
                  :gb="gb"
                  :ob="ob"
                  :pk="pk"
                  :degree="gb2cbDegree"
                  :lookAtGb="lookAtGb"
                  :is-zoom="zoom"
                  :showGB="showGB"
                  :phi="phi"
                  :trainBalls="trainBalls"
                  :betweenLine="betweenLine"
                ></gl-panel>
              </flex-item>
            </flex-box>
          </flex-item>
        </flex-box>

        <flex-box v-if="isSmartPhone" direction="column">
          <flex-item>
            <flex-box>
              <flex-item>
                <!-- 2D 表示 -->
                <pool
                  ref="pool"
                  :cb="cb"
                  :ob="ob"
                  :pk="pk"
                  :radius="r"
                  :na="naturalAngle"
                  @moveBall="onMoveBall"
                  @degreeGB2CB="onDegreeGB2CB"
                  @selectPocket="onSelectPocket"
                  @setGB="onSetGB"
                  @moveEnd="onMoveEnd"
                ></pool>
              </flex-item>
              <flex-item>
                <flex-box direction="row">
                  <flex-item>
                    <flex-box direction="column">
                      <flex-item class="ball-view">
                        <!-- 厚み表示 -->
                        <thick-ball
                          :degree="gb2cbDegree"
                          :tap-size="tapSize"
                          @thickPercent="onThickPercent"
                        />
                      </flex-item>
                      <flex-item class="ball-view">
                        <!-- コンタクトポイント -->
                        <contact-point
                          :degree="gb2cbDegree"
                          :dispDegree="getDegree()"
                        />
                      </flex-item>
                    </flex-box>
                  </flex-item>
                </flex-box>
              </flex-item>
            </flex-box>
          </flex-item>
          <flex-item style="width: 800px">
            <gl-panel
              ref="gl_panel"
              :radius="r"
              :cb="cb"
              :gb="gb"
              :ob="ob"
              :pk="pk"
              :degree="gb2cbDegree"
              :lookAtGb="lookAtGb"
              :is-zoom="zoom"
              :showGB="showGB"
              :phi="phi"
              :trainBalls="trainBalls"
              :betweenLine="betweenLine"
            ></gl-panel>
          </flex-item>
        </flex-box>
      </flex-item>
    </flex-box>
  </div>
</template>

<script>
import Pool from "./Pool";
import ContactPoint from "./ContactPoint";
import FlexBox from "./FlexBox";
import FlexItem from "./FlexItem";
import ThickBall from "./ThickBall";
import GlPanel from "./GlPanel";
import isMobile from "ismobilejs";

let isMobileResult = isMobile(window.navigator)

function handleTouchMove(event) {
  event.preventDefault();
}

function deg2rad(deg) {
  return deg * ( Math.PI / 180)
}

function rad2deg(rad) {
  return rad * ( 180 / Math.PI )
}

const naturalAngles = {
  0: 0,
  1: 9.112000001,
  2: 10.91400001,
  3: 12.39866667,
  4: 13.69066666,
  5: 14.83533334,
  6: 15.91766666,
  7: 16.8048148,
  8: 17.64033333,
  9: 18.462,
  10: 19.18733333,
  11: 19.91266667,
  12: 20.58133333,
  13: 21.267,
  14: 21.90733334,
  15: 22.53444446,
  16: 23.12566667,
  17: 23.74900001,
  18: 24.33833333,
  19: 24.91066666,
  20: 25.449,
  21: 26.03266667,
  22: 26.52,
  23: 27.0174074,
  24: 27.472,
  25: 27.948,
  26: 28.407,
  27: 28.85466666,
  28: 29.26266667,
  29: 29.69333333,
  30: 30.05851852,
  31: 30.37899999,
  32: 30.753,
  33: 31.07033334,
  34: 31.39899999,
  35: 31.69933335,
  36: 31.97133332,
  37: 32.24900001,
  38: 32.46370369,
  39: 32.69100002,
  40: 32.91766665,
  41: 33.10466668,
  42: 33.24066669,
  43: 33.45033331,
  44: 33.541,
  45: 33.70533336,
  46: 33.7166667,
  47: 33.90933332,
  48: 34,
  49: 34,
  50: 34,
  51: 34,
  52: 34,
  53: 34,
  54: 34,
  55: 34,
  56: 33.91499999,
  57: 33.72233336,
  58: 33.71100003,
  59: 33.52966667,
  60: 33.43333331,
  61: 33.24444446,
  62: 33.10466668,
  63: 32.87799998,
  64: 32.63433335,
  65: 32.38499998,
  66: 32.10166668,
  67: 31.78433333,
  68: 31.44999999,
  69: 31.08481482,
  70: 30.719,
  71: 30.28266667,
  72: 29.82933333,
  73: 29.308,
  74: 28.798,
  75: 28.20866666,
  76: 27.61555556,
  77: 26.99033334,
  78: 26.367,
  79: 25.57366666,
  80: 24.72933333,
  81: 23.86233334,
  82: 22.93866666,
  83: 21.97533334,
  84: 21.01074076,
  85: 20.03166666,
  86: 19.00033333,
  87: 17.986,
  88: 16.94333333,
  89: 15.844,
  90: 14.705,
  91: 13.55466666,
  92: 12.45407409,
  93: 11.27099999,
  94: 10.03566667,
  95: 8.760666667,
  96: 7.389333333,
  97: 6.035,
  98: 4.612666667,
  99: 2.594074073,
  100: 0,  
}

export default {
  name: "MainVue",
  components: {
    ContactPoint,
    FlexBox,
    FlexItem,
    Pool,
    ThickBall,
    GlPanel,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      pk: {
        cx: 9,
        cy: 9,
      },
      ob: {
        cx: 100,
        cy: 100,
      },
      cb: {
        cx: 200,
        cy: 500,
      },
      gb: {
        cx: 200,
        cy: 500,
      },
      naturalAngle: {
        cx: 0,
        cy: 0
      },
      isSmartPhone: isMobileResult.phone,
      // isSmartPhone: true,
      r: "8.0",
      gb2cbDegree: 0,
      thick: 0,
      tapSize: "12.4",
      zoom: false,
      lookAtGb: true,
      showGB: true,
      phi: "" + (Math.PI / 180) * 80,
      trainBalls: false,
      betweenLine: true,
      scrollLock: false,
    };
  },
  mounted() {
    this.scroll(this.scrollLock);
  },
  watch: {
    scrollLock(value) {
      this.scroll(value);
    },
  },
  methods: {
    scroll(enable) {
      if (enable) {
        // スクロール禁止
        document.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
      } else {
        // スクロール復帰
        document.removeEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
      }
    },
    onMoveBall({ target, cx, cy }) {
      // console.log({target,cx,cy});
      const vm = this;
      const r = Number(vm.r);
      if (cx <= r) {
        cx = r;
      }
      if (400 - r <= cx) {
        cx = 400 - r;
      }
      if (cy <= r) {
        cy = r;
      }
      if (800 - r <= cy) {
        cy = 800 - r;
      }
      vm[target].cx = cx;
      vm[target].cy = cy;
    },
    onDegreeGB2CB(deg) {
      const vm = this;
      // console.log({deg})
      vm.gb2cbDegree = deg;
    },
    onThickPercent(thick) {
      this.thick = thick;
      this.calcNaturalAngle()
    },
    getDegree() {
      const vm = this;
      let deg = 0;
      if (vm.gb2cbDegree < -270) {
        deg = 360 + vm.gb2cbDegree;
      } else {
        deg = Math.abs(vm.gb2cbDegree);
      }
      if (deg > 90) {
        deg = 360 - deg;
      }
      return deg;
    },
    onSelectPocket({ x, y }) {
      this.pk.cx = x;
      this.pk.cy = y;
    },
    onSetGB(gb) {
      this.gb = gb;
    },
    onClickUpdate() {
      this.$refs.gl_panel.$forceUpdate();
    },
    onMoveEnd() {
      const vm = this;
      vm.betweenLine = false;
      window.setTimeout(() => {
        vm.betweenLine = true;
      }, 0);
    },
    onClickRefresh() {
      this.$refs.gl_panel.refreshBalls();
    },
    calcNaturalAngle() {
      // ポケットとキューボールを結ぶラインの角度を取得
      const x = this.cb.cx - this.pk.cx
      const y = (this.cb.cy - this.pk.cy) * -1
      const atn = Math.atan2(y,x)
      let deg = rad2deg(atn)
      if (deg < 0) {
        deg = 360 + deg
      }
      // 90度まで何度回転させればよいか計算
      const rotate = deg2rad(deg - 90)

      // ゴーストボールを回転させる
      const cx = (this.cb.cx - this.gb.cx) * Math.cos(rotate) - (this.cb.cy - this.gb.cy) * Math.sin(rotate)

      // CBとGBの角度を計算
      const xx = this.gb.cx - this.cb.cx
      const yy = (this.gb.cy - this.cb.cy) * -1
      const cb2gbRad = Math.atan2(yy,xx)

      let naRad = deg2rad( naturalAngles[this.thick] )
      if (cx > 0) {
        // CBは右側に存在
        naRad = cb2gbRad - naRad
      } else if (cx < 0) {
        // CBは左側に存在
        naRad = cb2gbRad + naRad
      } else {
        // 一直線
        console.log("CB is same line")
        naRad = cb2gbRad
      }
      this.naturalAngle.cx = this.gb.cx + 1000 * Math.cos(naRad)
      this.naturalAngle.cy = this.gb.cy - 1000 * Math.sin(naRad)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
pool {
  width: 400px;
  height: 800px;
}
.hello {
  margin: 0px;
}

input {
  font-size: 20px;
  width: 30%;
  text-align: right;
}

span {
  font-size: 20px;
}

.toggle-buttons{
  width: 700px;
}

.ball-view {
  width: 400px;
  height: 400px;
}
</style>
