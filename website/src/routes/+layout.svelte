<script>
  export const ssr = false;
  export const prerenderer = true;
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";  
</script>

<Header />
<slot />
<Footer />