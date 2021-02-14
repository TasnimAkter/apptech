<template>
  <div class="wrapper">
    <Hero/>
    <Services/>
    <About/>
    <Features/>
    <ChooseUs/>
    <Video/>
  </div>
</template>

<script>
  import About from '../components/About';
  import Services from '../components/Services';
  import Features from '../components/Features';
  import Hero from '../components/Hero';
  import ChooseUs from '../components/ChooseUs';
  import Video from '../components/Video';
  export default {
    components: {
      Hero,
      About,
      Services,
      Features,
      ChooseUs,
      Video
    }
  }
</script>


