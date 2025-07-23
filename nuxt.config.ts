// https://nuxt.com/docs/api/configuration/nuxt-config
import { terserPlugin } from "vite-plugin-terser";
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  css: [
    "assets/css/font.css",
    "assets/css/reset.css",
    "assets/css/animation.css",
    "element-plus/dist/index.css",
  ],
  router: {
    middleware: "auth",
  },
  modules: ["nuxt-swiper", "@nuxtjs/i18n", "@nuxtjs/leaflet", "@nuxtjs/device"],
  routeRules: { "/": { redirect: "/en-US" } },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "ar-AR",
        iso: "ar-AR",
        name: "Arabic",
        file: "ar-AR.json",
      },
    ],
    defaultLocale: "en-US",
    detectBrowserLanguage: false,
  },
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0", // default: localhost,
  },
  optimization: {
    // minimize: false,
    minimize: true,
  },
  //
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY, //  ， process.env.NUXT_API_KEY
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL, //
    },
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
      script: [
        //   G-TF4C11Z4E8 key
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-TF4C11Z4E8",
          async: true,
        },
        `window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        
        }
        gtag("js", new Date());
        gtag("config", "G-TF4C11Z4E8");`,

        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-7E4W6C2X0K",
          async: true,
        },
        ` window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
  
        gtag("config", "G-7E4W6C2X0K");`,
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MMT9P697');`,
        },
      ],
      link: [
        {
          href: "/images/carside2-1.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/carside2-2.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/carside2-3.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/carside1-m.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/carside2-m.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/carside3-m.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/videos/indexBanner_mob.mp4",
          rel: "preload",
          as: "video",
        },
        {
          href: "/videos/indexBanner_pc.webm",
          rel: "preload",
          as: "fetch",
        },
        {
          href: "/images/indexPage4bg1.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/indexPage4bg2.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/indexPage4bg3.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/discover_btn_white1.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/discover_btn_black1.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/models/banner.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/models/page1Banner_mob.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/brand/pcimg1.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/brand/mobimg1.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/news/newsbg1.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/news/newsbg2.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/news/newsbg3.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/news/news_center/news_bg.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/news/news_center/news-banner.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/news/news_center/brand_news_mob.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/contactus/banner.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/images/contactus/banner_mob.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/videos/indexBanner_pc.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "/videos/indexBanner_mob.webp",
          rel: "preload",
          as: "image",
        },
        {
          href: "assets/fonts/SourceSansPro-Bold.otf",
          rel: "preload",
          as: "font",
          type: "font/opentype",
          crossorigin: true,
        },
        {
          href: "assets/fonts/SourceSansPro-Light.otf",
          rel: "preload",
          as: "font",
          type: "font/opentype",
          crossorigin: true,
        },
        {
          href: "assets/fonts/SourceSansPro-Medium.otf",
          rel: "preload",
          as: "font",
          type: "font/opentype",
          crossorigin: true,
        },
      ],
    },
  },
  //
  buildModules: ["@nuxtjs/proxy"],
  ignore: [".git"],
  vite: {
    define: {
      "process.env.base_url": JSON.stringify("/chery-jaecoo/"),
    },
    // build:{
    //   minify: "terser",
    //   terserOptions: {
    //     format: {
    //       comments: false
    //     },
    //   }
    // },
  },
   build: {
    transpile: ['form-data'],
  },
  nitro: {
    devProxy: {
      "/chery-jaecoo": {
        target: "http://chery-jaecoo.cloud-top.com.cn/chery-jaecoo",
        // target: 'https://www.jaecooglobal.com/chery-jaecoo',
        prependPath: true,
        changeOrigin: true,
        method: "POST",
      },
      "/static-files": {
        target: "http://chery-jaecoo.cloud-top.com.cn/static-files",
        // target: 'https://www.jaecooglobal.com/static-files',
        prependPath: true,
        changeOrigin: true,
      },
    },
  },
});