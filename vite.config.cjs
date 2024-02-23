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
                kontakt: resolve(__dirname, "src/kontakt.html"),
                aplikacia: resolve(__dirname, "src/aplikacia.html"),

                aktualityIndex: resolve(
                    __dirname,
                    "src/alzheimer/aktuality/index.html",
                ),
                aktualityNovinky: resolve(
                    __dirname,
                    "src/alzheimer/aktuality/novinky.html",
                ),
                aktualityPodkasty: resolve(
                    __dirname,
                    "src/alzheimer/aktuality/podkasty.html",
                ),
                aktualityPublikacie: resolve(
                    __dirname,
                    "src/alzheimer/aktuality/publikacie.html",
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
                oprojekteMedia: resolve(__dirname, "src/o-projekte/media.html"),
                oprojekteTim: resolve(__dirname, "src/o-projekte/tim.html"),
                oprojekteVyskum: resolve(
                    __dirname,
                    "src/o-projekte/vyskum.html",
                ),
            },
        },
    },
    root: "src",
});
