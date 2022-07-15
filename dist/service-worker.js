/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9de09627630c2b7f4f45a2295bebb87b"
  },
  {
    "url": "assets/css/0.styles.a6776394.css",
    "revision": "0cf9031d8e25e7b1ef634850eba4ca18"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d1e879a0.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.4d733ea2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.ef746ede.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.1015241d.js",
    "revision": "97f5eb0051c1e758f898b8f67ac29469"
  },
  {
    "url": "assets/js/13.9c122b31.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.3ce24242.js",
    "revision": "39e5e6f084e4f74d8c47b6344ad6a523"
  },
  {
    "url": "assets/js/15.1ad9e7af.js",
    "revision": "db8f0050de63e8e9fb79afb1f14d8086"
  },
  {
    "url": "assets/js/16.0a78aac3.js",
    "revision": "6de673e7ef988dbbfd15aabb0c2f81dd"
  },
  {
    "url": "assets/js/17.838c3951.js",
    "revision": "b9b41fe53c2ccae5effa7a1c00537e4d"
  },
  {
    "url": "assets/js/18.bf37913f.js",
    "revision": "c4eb1f7d208b53c30bd139d83ffadd08"
  },
  {
    "url": "assets/js/4.620f8225.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.4a08826e.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.da361a5a.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.0c009bd3.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.1c1995c7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.7d4f4532.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.141a52e7.js",
    "revision": "198761e6811e321daaeb220d9deac402"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.f362bf99.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "864a27e66f395dce3a2990b0b9a307fd"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b5cbda559eaa18da116fd626c86bb44e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0dfdd306871fcde06372fe09d0a1651b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9b5fa958f591c63de9fefb2cf9254a71"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2f17aacbd4aed27b02f06a997011af2e"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "7d2dd6633eef4e2d04492d5d20bd4414"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c582e060953bb61213803f1908969705"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "7eccf73b255ff142b9feecc1ef2dcd32"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "d94e83607251e081fda4486cafff2220"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "06127fb7a6179daba9ed734316418959"
  },
  {
    "url": "tags/js/index.html",
    "revision": "32032e50edebbcb06cb1c79c063064de"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1e6948d5228c46cd101a49760822ed3f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "93d7b8c093dad6db236be615f1600f5b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ba0d9c69aa23cd55d3f7a42610079b18"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "23d53847045695f31cdcaba66c8479ad"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "96f508358d324dcae9e2da56391817b7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6572e5d040c13f19b144f0c67b1dba34"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "dfa973db071d1accc5a3936c2ece9c25"
  },
  {
    "url": "timeline/index.html",
    "revision": "b0c333e7d674e5976b2d3a0744c937fd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4f03bf170c4694a9ff4d65c9a619cc63"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "221bd9db43f7716f8a9e5248982268c2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "554089efb19d5810d66249ab939f952d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "116e8388fd806d1580bd7c7d782f3554"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9e91ab802cf778e10939ac97b12ba366"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
