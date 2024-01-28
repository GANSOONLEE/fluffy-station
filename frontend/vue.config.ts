
import { defineConfig } from '@vue/cli-service';

export default defineConfig({
    pages: {
        index: {
            entry: 'src/pages/index.js',  // page 的入口
            template: 'public/index.html', // 模板来源
            filename: 'index.html', //  在 dist/index.html 的输出
        },
        demo: {
            entry: 'src/pages/.js',
            template: 'public/demo.html',
            filename: 'demo.html',
        },
        demo2: {
            entry: 'src/pages/demo2/main.js',
            template: 'src/pages/demo2/demo2.html',
            filename: 'demo2.html',
        },
    }
})