import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "",
    server: {
        open: "/index.html",
    },
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                aplikacia: resolve(__dirname, "src/aplikacia.html"),
                media: resolve(__dirname, "src/media.html"),
                kontakt: resolve(__dirname, "src/kontakt.html"),

                aktualityIndex: resolve(
                    __dirname,
                    "src/alzheimer/aktuality/index.html",
                ),
                aktualityClanky: resolve(
                    __dirname,
                    "src/alzheimer/aktuality/clanky.html",
                ),
                aktualityRozhovory: resolve(
                    __dirname,
                    "src/alzheimer/aktuality/rozhovory.html",
                ),
                aktualityKnihy: resolve(
                    __dirname,
                    "src/alzheimer/aktuality/knihy.html",
                ),

                alzheimerPodpora: resolve(
                    __dirname,
                    "src/alzheimer/alzheimerova-choroba/podpora.html",
                ),
                alzheimerPrecvicenie: resolve(
                    __dirname,
                    "src/alzheimer/alzheimerova-choroba/precvicenie.html",
                ),
                alzheimerIndex: resolve(__dirname, "src/alzheimer/index.html"),
                alzheimerChorobaIndex: resolve(
                    __dirname,
                    "src/alzheimer/alzheimerova-choroba/index.html",
                ),

                footerGdpr: resolve(__dirname, "src/footer/gdpr.html"),
                footerZasady: resolve(__dirname, "src/footer/zasady.html"),

                oprojekteIndex: resolve(__dirname, "src/o-projekte/index.html"),

                indexEn: resolve(__dirname, "src/en/index.html"),
                app: resolve(__dirname, "src/en/app.html"),
                mediaEn: resolve(__dirname, "src/en/media.html"),
                contact: resolve(__dirname, "src/en/contact.html"),

                alzheimerIndexEn: resolve(
                    __dirname,
                    "src/en/alzheimer/index.html",
                ),

                alzehimerDiseaseIndex: resolve(
                    __dirname,
                    "src/en/alzheimer/disease/index.html",
                ),

                alzehimerDiseasePractice: resolve(
                    __dirname,
                    "src/en/alzheimer/disease/practice.html",
                ),

                alzheimerDiseaseSupport: resolve(
                    __dirname,
                    "src/en/alzheimer/disease/support.html",
                ),

                alzheimerNewsIndex: resolve(
                    __dirname,
                    "src/en/alzheimer/news/index.html",
                ),

                alzheimerNewsNews: resolve(
                    __dirname,
                    "src/en/alzheimer/news/news.html",
                ),

                alzheimerNewsPodcasts: resolve(
                    __dirname,
                    "src/en/alzheimer/news/podcasts.html",
                ),

                alzheimerNewsPublications: resolve(
                    __dirname,
                    "src/en/alzheimer/news/publications.html",
                ),

                aboutEwaIndex: resolve(
                    __dirname,
                    "src/en/about-ewa/index.html",
                ),

                main: resolve(__dirname, "src/main.js"),
            },
        },
    },
    root: "src",
});
