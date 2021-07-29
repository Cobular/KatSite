<script lang="ts">
</script>

<footer id="contact">
  <div id="footer-content">
    <p>
      If you wish to reach out to me for business inquiries, please contact me through
      <a href="https://www.instagram.com/shushicate/">Instagram</a>,
      <a href="https://twitter.com/Shushicate">Twitter</a>, or Gmail (<a
        href="mailto:katedejer@gmail.com">katedejer@gmail.com</a
      >)
    </p>
    <img
      src={'/img/bottom_icon.png'}
      alt="An icon of what appears to be a green mototcycle helmet with cat ears. It's very cute."
    />
    <p>
      Made with 🧡🧡 by @Cobular - Contact for Web Design at <a href="http://www.cobular.com"
        >www.cobular.com</a
      >!
    </p>
  </div>
</footer>

<style>
  footer {
    background-color: white;
    width: 100%;
    padding: 10px;
    padding-bottom: 2px;
    align-items: baseline;
  }

  #footer-content {
    margin: auto;
    max-width: 1125px;
    display: grid;
    align-items: center;
    grid-template-columns: auto 30% auto;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 525px) {
    #footer-content {
      grid-template-columns: auto;
    }
    p {
      text-align: center;
    }
  }

  img {
    justify-self: center;
  }
</style>
