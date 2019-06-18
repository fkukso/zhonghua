<style scoped>
    .ads-add-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    }

    .ads-add-form {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 44px;
        overflow: auto;
    }

    .ads-add-title {
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        color: rgba(69,90,100,.6);
        padding: 20px 15px 15px;
        background-color: #f8f8f8;
    }
</style>


<template>
  <div class="ads-add-wrap">
    <div class="ads-add-form">
        <section>
            <h2 class="ads-add-title">方案名称</h2>
            <van-cell-group >
                <van-field placeholder="请输入方案名称"></van-field>
            </van-cell-group>
        </section>

        <!-- 承保机构 -->
        <section>
            <h2 class="ads-add-title">承保机构</h2>
            <van-field
                readonly
                clickable
                right-icon="arrow-down"
                left-icon="aim"
                :value="scheme.organization"
                placeholder="请选择承保机构"
                @click="showPicker_organization = true"
            />
        </section>

        <!-- 适用类型 -->
        <section>
            <h2 class="ads-add-title">适用类型</h2>
            <van-field
                readonly
                clickable
                right-icon="arrow-down"
                left-icon="aim"
                :value="scheme.student"
                placeholder="请选择承保机构"
                @click="showPicker_student = true"
            />
        </section>

         <section>
            <h2 class="ads-add-title">保险期限</h2>
            <van-radio-group v-model="scheme.radio">
                <van-cell-group>
                    <van-cell title="半年" clickable @click="radio = '1'">
                    <van-radio name="1" />
                    </van-cell>
                    <van-cell title="1年" clickable @click="radio = '2'">
                    <van-radio name="2" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </section>

        <section>
            <h2 class="ads-add-title">保障项目</h2>
            <van-cell-group >
                <van-field
                  v-model="scheme.money0"
                  clearable
                  :label-width="80"
                  label="意外伤害身故/残疾"
                  placeholder="请输入保障金额"
                  @click-right-icon="$toast('question')"
                />

                <van-field
                  v-model="scheme.money1"
                  clearable
                  :label-width="80"
                  label="附加疾病身故"
                  placeholder="请输入保障金额"
                  @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="scheme.money2"
                    clearable
                    :label-width="80"
                    label="附加意外伤害医疗"
                    placeholder="请输入保障金额"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="scheme.money3"
                    clearable
                    :label-width="80"
                    label="附加住院医疗"
                    placeholder="请输入保障金额"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="scheme.money4"
                    clearable
                    :label-width="80"
                    label="附加重大疾病"
                    placeholder="请输入保障金额"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="scheme.money5"
                    clearable
                    :label-width="80"
                    label="校园意外身故/残疾"
                    placeholder="请输入保障金额"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="scheme.money6"
                    clearable
                    :label-width="80"
                    label="校园活动意外医疗"
                    placeholder="请输入保障金额"
                    @click-right-icon="$toast('question')"
                />


            </van-cell-group>
        </section>
        
    </div>

    <van-button  block square type="info" class="bottom-button" @click="save">保存</van-button>

    <van-popup v-model="showPicker_organization" position="bottom" >
        <van-picker
            show-toolbar
            title="选择承保机构"
            :columns="columns_organization"
            @cancel="showPicker_organization = false"
            @confirm="onConfirm_organization"
        />
    </van-popup>

    <van-popup v-model="showPicker_student" position="bottom" >
        <van-picker
            show-toolbar
            title="选择承保机构"
            :columns="columns_student"
            @cancel="showPicker_student = false"
            @confirm="onConfirm_student"
        />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "adseList",
  components: {
  },
  data() {
    return {        
        scheme: {
            name: "",
            money0: "",
            money1: "",
            money2: "",
            money3: "",
            money4: "",
            money5: "",
            money6: "",
            money7: "",
            radio: 0,
            organization: "",
            student: ""
        },
        showPicker_organization: false,
        showPicker_student: false,
        columns_organization: ['开福区支公司', '长沙县支公司', '雨花区支公司', '岳麓支公司', '浏阳支公司', '高开区支公司'],
        columns_student: ['幼儿园', '中小学', '高校']
    };
  },
  methods: {
      onConfirm_organization(value) {
        this.scheme.organization = value;
        this.showPicker_organization = false;
      },
      onConfirm_student(value) {
        this.scheme.student = value;
        this.showPicker_student = false;
      },
      save() {
          this.$router.back()
      }
  },
  created() {
    setDocTitle("新增方案");
  }
};
</script>
