import { defineConfig } from 'vite'

export default defineConfig({
  //base: '/warizan-visual-trainer/warizan-visual-trainer/'
  //outDir: '../../public'
    build: {
        base: './',
        outDir: '../docs', //出力場所の指定
    },
})