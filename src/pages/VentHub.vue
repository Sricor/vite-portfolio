<!--
 * @Author: joSricor
 * @Date: 2021-10-07 21:21:49
-->

<script setup>
//import { onMounted } from 'vue'
import ShowImage from '../components/ShowImage.vue'

const backTop = () => {
  window.scrollTo(0,0)
}

// darkmode
/*
onMounted(() => {
  document.body.style.backgroundColor= "#121212"
  document.body.style.color= "#fff"
 })
*/
const title = 'ventHub'
const images = [
  'ventHub/ventHub%20(1).png',
  'ventHub/ventHub%20(2).png',
  'ventHub/ventHub%20(3).png',
  'ventHub/ventHub%20(4).png',
  'ventHub/ventHub%20(5).png',
  'ventHub/ventHub%20(6).png',
  'ventHub/ventHub%20(7).png',
  'ventHub/ventHub%20(8).png'
  ]
const detail = "I spent my summer at Mark43 working with the team responsible for building the Computer Aided Dispatch software for public safety. Here is an image from the Mark43 website giving you a preview."
</script>

<template>
<div class="container" id="projct">
  <header>
    <h1>{{ title }}</h1>
  </header>
  <div class="row">
    <div class="col overview">
      <h6>Overview</h6>
      <p class="lead">{{ detail }} </p>
    </div>
    <div class="col-1 mid"></div>
    <div class="col details">
      <h6>Details</h6>
      <table>
        <tbody>
          <tr>
            <td>Time</td>
            <td>1212</td>
          </tr>
          <tr>
            <td>Categories</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <br/>
  <ShowImage :images=images />
  <br/><hr/><br/>
  <div class="row">
    <div class="col-2">
      <a @click="backTop()">👆 Back to top</a>
    </div>
    <div class="col"></div>
    <div class="col-2 is-text-right">
      Also see: <a>Anthor</a>
    </div>
  </div>
</div>
</template>

<style scoped>
a {
  transition: color .2s ease;
  cursor: pointer;
}

a.no-hover-effect:hover {
  opacity: 1
}

hr {
  width: 100px;
  margin: 10px auto;
  display: block
}

iframe, video {
  max-width: 100%
}

figure {
  width: 90%;
  margin: 5rem auto
}

header {
  text-align: center;
  font-size: 2rem;
  margin: 6rem 1rem
}

header h1 {
  margin-bottom: 1rem
}

@media screen and (max-width:480px) {
  h1 {
    margin: 5rem 1rem
  }
}

.details tr {
  border-bottom: 1px solid var(--lightGrey-color)
}

.details tr td:last-child {
  font-weight: 500
}
</style>