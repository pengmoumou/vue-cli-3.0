<template>
  <div class="vuetify-main">
    <v-app class="box-content box-mt demo-box">
      <!-- 只要使用 app 属性，就可以将布局元素放置在任何地方 -->
      <!-- 使用app属性后会自动地在布局元素中使用固定（fixed）位置。如果你的应用程序需要一个绝对位置的元素, 可以使用absolute属性重写此功能。 -->
        <v-navigation-drawer app>{{$t('frame.navigation')}}</v-navigation-drawer>
        <!-- 分隔线 -->
        <v-divider></v-divider>
        <v-toolbar app>{{$t('frame.toolbar')}} </v-toolbar>
        <v-content>
          <!-- <v-btn @click="changeLang">en</v-btn>-->
          <!-- {{$t('dataIterator.rowsPerPageText')}} -->
          <!--12月20日，无法根据lang进行翻译字段-->
          <!-- {{$vuetify.t('dataIterator.rowsPerPageText')}} -->
          <!-- {{$vuetify.t('demo.frame')}} -->
          <!--12月20日，icon引入失败-->
          <!-- <v-icon>$vuetify.icons.kline</v-icon>
          <v-icon>$vuetify.icons.product</v-icon> -->
          <!-- 用fluid来扩展v-container的全部宽度 -->
          <v-container fluid>
            <v-layout row wrap>
              <v-flex>
                <v-card>A</v-card>
                <v-card>B</v-card>
              </v-flex>
              <v-flex>
                <v-card>C</v-card>
                <v-card>D</v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
        <v-footer app>{{$t('frame.footer')}}</v-footer>
    </v-app>
  </div>
</template>
<script>
  import '@script/vuetify'
  export default {
    name: "demo_vuetify",
    data() {
      return {
        
      };
    },
    created(){
      //输出主题色，设置成功
      // console.log(this.$vuetify.theme.primary)
    },
    methods:{
      changeLang(){
        //12月20日，已更改lang.curren的值，但是没有进行翻译
        // console.log('lang'+this.$vuetify.lang.current)
        this.$vuetify.lang.current = 'en';
        
      }
    }
  };
</script>

<style lang="scss">
  .vuetify-main {
    // color:#1976D2;
    color:var(--v-primary-base);
  }
</style>
