<script setup>
import config from '../../web.config'
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.project

const projectList = config.project

for(let i=0; i<projectList.length; i++) {
  if(projectList[i].name == name) {
    const project = projectList[i]
    this.project = project
  }
}
console.log(project)
</script>
<template>
  <div class="container" id="project">
  <header>
    <h1>Mark43</h1>
  </header>
  <div class="row">
    <div class="col">
      <h6>Overview</h6>
      <p class="lead">I spent my summer at Mark43 working with the team responsible for building the Computer
        Aided Dispatch software for public safety. Here is an image from the Mark43 website giving you a
        preview.</p>
    </div>
    <div class="col-1"></div>
    <div class="col details">
      <h6>Details</h6>
      <table>
        <tbody>
          <tr>
            <td>Role</td>
            <td>Product Design Intern</td>
          </tr>
          <tr>
            <td>Mentor</td>
            <td>Daniel Yang, Director of Design, Mark43</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> <br>
  
  <figure class="figure_1ZhV3">
    <img src="https://data.sricor.work/images/ventHub/ventHub%20(1).png">
  </figure>
  <figure class="figure_1ZhV3">
    <img src="https://data.sricor.work/images/ventHub/ventHub%20(2).png">
  </figure> <br>
  <hr> <br>
  <div class="row">
    <div class="col-2"><small><a href="#project">↑ back to top</a></small></div>
    <div class="col"></div>
    <div class="col-3 is-text-right"><small>Also see: <a href="/work/cita">Cita →</a></small></div>
  </div>
</div>
</template>