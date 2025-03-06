import { defineConfig } from 'vite'

export default defineConfig({
  //base: '/warizan-visual-trainer/warizan-visual-trainer/'
  //outDir: '../../public'
    build: {
        base: './', //相対パスでビルド
        outDir: '../docs', //出力場所の指定
    },
})