<template>
<section class="home-service">
    <div class="section__title">
        <div class="section__title-text">My Research</div>
    </div>
    <v-container>
        <v-row class="home-service__contents">
        <v-col md="3">
          <v-card
            to="/research#direction"
            hover
          >
            <div class="home-service__card-title">
              <h3>B3</h3>
            </div>
            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/research-img-1.jpg" alt="ディレクション">
            </div>
            <div class="home-service__card-text">
              <p>周辺の手書き文字の綺麗さが手書き文字に与える影響の調査</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            to="/service#coding"
            hover
          >
            <div class="home-service__card-title">
              <h3>B4</h3>
            </div>
            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/coding.jpg" alt="コーディング">
            </div>
            <div class="home-service__card-text">
              <p>ShrinkTextbox: Webアンケートの自由記述回答欄サイズ変化による回答の質向上法</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            to="/service#design"
            hover
          >
            <div class="home-service__card-title">
              <h3>デザイン</h3>
            </div>
            <div class="home-service__card-img">
              <img class="icon--service" src="../assets/img/design.jpg" alt="デザイン">
            </div>
            <div class="home-service__card-text">
              <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            </div>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
</section>
</template>

<style  lang="scss" scoped>
.home-service__contents {
  margin-top: 20px;
  justify-content: center;
}
 
.home-service__card-title {
  text-align: center;
  padding: 20px 10px 10px;
}
 
.home-service__card-img {
  text-align: center;
//   padding: 20px;
}
 
.home-service__card-text {
  padding: 10px 20px;
}
 
.icon--service {
  width: 100px;
  height: 100px;
}
 
.v-window {
  height: 300px !important;
 
  @include display_pc {
    height: 500px !important;
  }
}
</style>