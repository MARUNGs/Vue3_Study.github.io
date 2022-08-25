<template>
    <div class="header">
        <ul class="header-button-left">
        <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
        <li>Next</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :Data="Data" />
    <button type="button" class="btn btn-primary" 
            @click="pushData"
    >더보기
    </button>

    <div class="footer">
        <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
import {Data} from '@/types'
import axios from 'axios'

// ********** Type & Interface **********


// ********** Object **********


// ********** Variable **********
let cnt :number = 0;


// ********** function **********
/** 더보기 클릭 */
function pushData() :void {
    switch(cnt) {
        case 0:
            axios.get('https://codingapple1.github.io/vue/more' + (cnt) + '.json')
            .then((response) => {
                Data.push(response.data)
            })

            ++cnt
            break
        case 1:
            axios.get('https://codingapple1.github.io/vue/more' + (cnt) + '.json')
            .then((response) => {
                Data.push(response.data)
            })

            ++cnt
            break
    }
}
</script>

<style scoped>
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: #ffbdbd;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: rgb(150, 44, 44);
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
}
.header-button-right {
  color: rgb(150, 44, 44);
  float: right;
  width: 50px;
  cursor: pointer;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: #ffbdbd;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
