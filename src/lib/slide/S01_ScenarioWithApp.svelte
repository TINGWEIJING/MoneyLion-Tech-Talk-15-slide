<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';
  import JavaIcon from '$lib/images/java.svg';
  import SpringBootIcon from '$lib/images/springboot.svg';
  import MouseProductImg from '$lib/images/01_mouse.webp';
  import HeadsetProductImg from '$lib/images/02_headset.webp';
  import CardReaderProductImg from '$lib/images/03_card_reader.webp';
</script>

<Slide>
  <p class="slide-header-div s-6xl font-bold">Scenario</p>

  <div class="absolute top-[18%]">
    <p class="s-6xl">Developing an endpoint to retrieve trending products...</p>
  </div>

  <div class="mobile-frame">
    <div class="mobile-screen">
      <div class="top-ui">
        <div class="page-title">Trending Products</div>
        <div class="product-tab-row">
          <div class="selected-tab">Electronics</div>
          <div class="normal-tab">Games</div>
          <div class="normal-tab">Beauty</div>
          <div class="normal-tab">Fashion</div>
        </div>
      </div>
      <div class="bottom-ui">
        <div class="product-row">
          <div class="rank-div">1</div>
          <div class="product-preview-div">
            <img class="product-img" src={MouseProductImg} alt="Mouse Product" />
          </div>
          <div class="product-label">Gaming Mouse</div>
        </div>
        <div class="product-row">
          <div class="rank-div">2</div>
          <div class="product-preview-div">
            <img class="product-img" src={HeadsetProductImg} alt="Headset Product" />
          </div>
          <div class="product-label">Headset</div>
        </div>
        <div class="product-row">
          <div class="rank-div">3</div>
          <div class="product-preview-div">
            <img class="product-img" src={CardReaderProductImg} alt="Card Reader Product" />
          </div>
          <div class="product-label">Card Reader</div>
        </div>
        <div class="product-row">
          <div class="rank-div">4</div>
          <div class="product-preview-div">
            <img class="product-img" src={MouseProductImg} alt="Mouse Product" />
          </div>
          <div class="product-label">Mouse</div>
        </div>
      </div>
    </div>
  </div>
</Slide>

<style>
  .mobile-frame {
    position: absolute;
    background-color: black;
    border-radius: var(--size-36);
    bottom: -10%;
    display: flex;
    height: var(--size-800);
    width: var(--size-700);
    justify-content: center;
    align-items: center;
  }

  .mobile-screen {
    position: relative;
    background-color: white;
    border-radius: var(--size-24);
    height: calc(var(--size-800) - var(--size-36));
    width: calc(var(--size-700) - var(--size-36));
    overflow: hidden;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch; */
  }

  .top-ui {
    position: absolute;
    background-color: rgb(249, 121, 121);
    height: 100%;
    width: 100%;
    z-index: 10;
  }

  .bottom-ui {
    position: absolute;
    background-color: white;
    height: 72%;
    width: 100%;
    bottom: 0%;
    z-index: 20;
    border-radius: 0% var(--size-36) 0% 0%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding-top: var(--size-24);
  }

  .product-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    color: black;
  }

  .rank-div {
    font-size: var(--size-48);
    padding: var(--size-24) var(--size-12);
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
  }

  .product-preview-div {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: var(--size-12);
  }

  .product-img {
    height: var(--size-150);
    aspect-ratio: 1/1;
  }

  .product-label {
    font-size: var(--size-48);
    padding-left: var(--size-12);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
  }

  .page-title {
    position: absolute;
    left: 4%;
    top: 4%;
    font-size: var(--size-56);
    font-weight: 900;
  }

  .product-tab-row {
    position: absolute;
    left: 0%;
    top: 16%;
    height: 12%;
    width: 140%;
    /* background-color: rgb(254, 255, 173); */
    border-radius: var(--size-12);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }

  .selected-tab,
  .normal-tab {
    font-size: var(--size-36);
    color: rgb(94, 66, 76);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: var(--size-32);
    padding-right: var(--size-32);
  }

  .selected-tab {
    font-weight: 600;
    background-color: white;
    border-radius: var(--size-24) var(--size-24) 0% 0%;
    color: rgb(215, 38, 38);
    padding-left: var(--size-12);
    padding-right: var(--size-12);
  }
</style>
