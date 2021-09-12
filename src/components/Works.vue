<script setup lang="ts">
const router = useRouter()
const go = (name: string) => {
  router.push(`/portfolio/${name}`)
}
</script>

<template lang="pug">
div
  section.container.is-center.hero_2gtQS
    h2.lead_1u3G2 Hey there!
      img(src width="30" alt)
      br
      | I'm Jenil, a
      a computational designer
      .
        passionate about crafting great
        user experiences with a strong understanding of development.
      small I have a penchant for
        a design tools
        | and
        a design systems
        | .
      small Also, I've made
        a free website themes
        | ,
        a a CSS framework
        | ,
        a a icon CDN
        | and
        a a Chrome extension
        | .
  hr
  br
  h6.container.is-text-center.is-text-uppercase Selected work
  br
  .container.work_RC80A
    .row
      .col.left
        .card_OF-oQ
          a(@click="go('project')")
            figure.figure_1ZhV3
              img(src="https://data.sricor.work/images/ventHub/ventHub%20(1).png")
            footer
              h4 Datadog Synthetics
              small Product Design
              p A whole new layer of visibility on the Datadog platform.
      .col.right
        .card_OF-oQ
          a
            figure.figure_1ZhV3
              img(src="https://data.sricor.work/images/ventHub/ventHub%20(2).png")
            footer
              h4 Designing data visualizations
              small Writing • Prototyping
              p How can you design data visualizations in a design tool?
  p.is-text-center
    a.outline.button.secondary See more work on Behance
  br
</template>

<style scoped>
.is-text-center {
  text-align: center
}

hr {
  width: 100px;
  margin: 10px auto;
  display: block
}

.hero_2gtQS {
  min-height: 200px;
  height: 50vh;
  width: 75vw
}

.lead_1u3G2 {
  font-weight: 300
}

.lead_1u3G2 small {
  display: block;
  font-size: .65em;
  line-height: 1.8
}

@media screen and (max-width:48rem) {
  .lead_1u3G2 {
    font-size: 1.2em
  }

  .lead_1u3G2 small {
    font-size: .75em
  }
}

.card_OF-oQ {
  padding: 0;
  background-color: transparent;
  transition: all .2s ease, transform .2s cubic-bezier(.03, .98, .52, .99);
  box-shadow: 0 2px 15px rgba(0, 0, 0, .3);
  color: #ddd;
  position: relative;
  border-radius: 1rem;
  transform: translateZ(0);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform;
  margin-bottom: calc(var(--grid-gutter)*2)
}

.card_OF-oQ a {
  display: block
}

.card_OF-oQ footer {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  padding: .75rem 1rem;
  transform: translateZ(3rem);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 10px rgba(0, 0, 0, .25)
}

@media screen and (max-width:480px) {
  .card_OF-oQ footer {
    box-shadow: none;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    border-radius: 0 0 1rem 1rem
  }
}

.card_OF-oQ figure {
  margin: 0;
  border-radius: 1rem
}

.card_OF-oQ figure img {
  width: 100%
}

.card_OF-oQ h4 {
  margin: 0;
  line-height: 1.2;
  color: #fff;
  font-weight: 400;
  text-shadow: 0 1px 8px rgba(0, 0, 0, .4), 0 0 40px #000
}

@media screen and (max-width:480px) {
  .card_OF-oQ h4 {
    font-size: 1em
  }
}

.card_OF-oQ p {
  color: #eee;
  text-shadow: 0 1px 8px rgba(0, 0, 0, .4), 0 0 20px rgba(0, 0, 0, .4);
  width: 100%;
  margin-bottom: 0
}

@media screen and (max-width:480px) {
  .card_OF-oQ p {
    display: none
  }
}

.card_OF-oQ small {
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #eee;
  font-weight: 700;
  text-shadow: 0 0 3px rgba(0, 0, 0, .3), 0 1px 40px #000
}

.card_OF-oQ.black_bL7At h4 {
  color: #000;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .3), 0 1px 40px rgba(0, 0, 0, .4)
}

.card_OF-oQ.black_bL7At small {
  color: #333;
  text-shadow: 0 1px 2px transparent, 0 1px 40px rgba(0, 0, 0, .4)
}

.card_OF-oQ.black_bL7At p {
  color: #222;
  text-shadow: 0 1px 12px rgba(0, 0, 0, .3)
}

.figure_1ZhV3 {
  overflow: hidden;
  margin: 0
}

.figure_1ZhV3 p {
  font-style: italic;
  text-align: center;
  font-size: 90%;
  margin-top: 1rem
}

.figure_1ZhV3 img {
  display: block;
  transition: all .3s ease;
  margin: auto
}

.zoomable_1k6gX {
  cursor: zoom-in
}

.loading_3Pir6 {
  width: 100%;
  filter: blur(10px)
}

.holder_38gdO {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center
}

.holder_38gdO img {
  max-width: 96vw;
  max-height: 90vh;
  height: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .25)
}

.work_RC80A {
  margin-top: 2rem
}

.work_RC80A a:hover {
  opacity: 1
}

.work_RC80A>div>div {
  margin: var(--grid-gutter)
}
</style>
