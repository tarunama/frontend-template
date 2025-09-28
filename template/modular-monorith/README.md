# frontend-template

このプロジェクトは Next.js アプリケーションのためのスターターテンプレートです。

## モジュラーモノリスのドメイン構成

`app/(domains)/` 配下に 3 つのサンプルドメインモジュールが用意されており、単一リポジトリの中で機能領域ごとの関心事を分離する例を示しています。

- `/marketing` では、`modules/marketing` に定義された UI プリミティブを組み合わせてキャンペーン計画ビューを構成しています。
- `/accounts` では、`modules/accounts` コンポーネントに由来するアカウント健全性テーブルや更新予測をまとめています。
- `/support` では、`modules/support` のビルディングブロックを利用した軽量なナレッジベースとチャネルディレクトリを提供します。

共通レイアウト、データ契約、スタイリングは `modules/core` および `modules/domains` ディレクトリに集約されており、各ドメインがインフラを共有しつつも境界を越えて詳細が漏れないようになっています。

## スクリプト

- `bun run dev` – 開発サーバーを起動します。
- `bun run build` – 本番用ビルドを作成します。
- `bun run start` – 本番サーバーを起動します。
- `bun run test` – テストを実行します（現時点では未提供）。

## Docker（Bun ベース）

開発コンテナをビルド:

```sh
docker build --target dev -t frontend-dev .
docker run --rm -p 3000:3000 frontend-dev
```

本番コンテナをビルド:

```sh
docker build --target prod -t frontend-prod .
docker run --rm -p 3000:3000 frontend-prod
```

## Docker Compose

Docker Compose を使ってビルド・起動:

```sh
docker compose up dev
```

本番コンテナを起動:

```sh
docker compose up prod
```
