# billiard-tool2

ビリヤード練習ツール「厚みさん」- 手球と的球の接触厚みを可視化し、ナチュラルアングルを計算するWebアプリケーション

## スマホ対応

このアプリはスマホ縦画面に最適化されたレスポンシブデザインです。

## GitHub Actions 自動デプロイ

このプロジェクトはGitHub Actionsで自動ビルド・デプロイされます。

### 初回セットアップ

1. GitHubリポジトリの **Settings** > **Pages** に移動
2. **Source** を `gh-pages` ブランチに変更
3. **Save** をクリック

これで、`main`または`master`ブランチにpushすると自動的にビルドされ、GitHub Pagesにデプロイされます。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
