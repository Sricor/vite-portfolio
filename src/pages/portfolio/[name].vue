<script setup lang="ts">
const props = defineProps<{ name: string }>()
const { t } = useI18n()
</script>

<template>
<div class="container" id="project">
  <header>
    <h1>Mark43</h1>
  </header>
  <div class="row">
    <div class="col">
      <h6>{{ t('intro.hi', { name: props.name }) }}</h6>
      <p class="lead">I spent my summer at Mark43 working with the team responsible for building the Computer Aided
        Dispatch software for public safety. Here is an image from the Mark43 website giving you a preview.</p>
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
  <p>I had been given 2 tasks for the summer, first of which was working on the <a
      href="https://drive.google.com/open?id=1R7C92yimJxUmWWMgGORdC5PYRnePDaIw" target="_blank">Command Line feature</a>
    of the product which had been spec’d but was yet to be designed. The other task was making a style guide for the
    entire CAD design components as a first step towards building a robust design system.</p>
  <p>On the weekend before my internship ended, while working on the style guide I thought of making a small goodbye
    gift for the team and made them a CAD-style Atom editor theme called <a
      href="https://atom.io/themes/atom-mark43-ui">Atom Mark43 UI</a>.
    If you use Atom feel free to try the theme.</p>
  <img src="https://data.sricor.work/images/ventHub/ventHub%20(1).png">
  <img src="https://data.sricor.work/images/ventHub/ventHub%20(2).png">
  <img src="https://data.sricor.work/images/ventHub/ventHub%20(3).png">
  <br>
  <hr> <br>
    <div class="row">
    <div class="col-2"><small><a href="#project">↑ back to top</a></small></div>
  </div>
</div>

</template>

<style scoped>
h1 {
    margin-bottom: 1rem;
    font-size: 2em;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align: center;
    margin: .35em 0 .7em;
}
#project header {
    text-align: center;
    font-size: 2rem;
    margin: 6rem 1rem;
}

</style>

<route lang="yaml">
meta:
  layout: default
</route>
