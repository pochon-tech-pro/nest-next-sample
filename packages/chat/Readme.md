### 簡易Chat Hands On

- リアルタイム通信を実現するために、Socket.ioを使用
- ClientとServerの間にWebSocket接続を確立

### 事前準備
- ホストPCにnodenvやyarnをInstall (https://pochon-tech.esa.io/posts/573)

### Server側

- Node, TypeScript 環境を構築
```bash
mkdir /Users/apple/workspace/nest/packages/chat/server
cd /Users/apple/workspace/nest/packages/chat/server;
yarn init
yarn add socket.io
yarn add typescript ts-node ts-node-dev --dev
yarn run tsc --init
vi server.ts
./node_modules/.bin/ts-node server.ts
```
- tsconfing.json修正（）
```json:tsconfig.json
{
  "compilerOptions": {
+   "sourceMap": true,
+   "outDir": "./dist",
- }
}
```
- sourceMap: デバッグにはjsのソースと元のtscコードをマッピングするファイルが必要。そのマッピングファイルを生成する場合にTrue。

- npm-scriptにコマンド追加
```json:package.json
  "main": "dist/index.js",
  "scripts": {
    "dev": "ts-node server.ts",
    "tsc": "tsc",
    "start": "node ."
  },
```

- jsファイルが生成されるか、生成されたJSが起動するか確認（本番用）
```bash
yarn run build
yarn run start
```
- jsファイル生成＆実行の確認
```bash
yarn run dev
```
- jsファイル生成＆実行の確認(Watcher)
```bash
yarn run dev:watch
```
> 注: APIサーバーのように一度実行すると動き続けるプログラムではなく、この記事のHello Worldプログラムのように1度実行するとプロセスが終了するプログラムの場合は、ts-node-dev に --respawn オプションをつけます。


### socket.ioのメソッド
- io.sockets.on("connection", function (socket) {})を前提とする
- socket.join(roomId): roomIdで指定した部屋に参加
- io.to(roomId).emit(): roomIdで指定した部屋にのみメッセージ送信
- io.to(socket.id).emit(): 送信元のあなただけ
- io.in(roomId).emit(): Room内の送信元含む全員に送信


## Client側
- 準備
```
cd /Users/apple/workspace/nest/packages/chat
npx create-react-app client --template typescript
cd client
yarn add -D @types/react-router-dom
yarn add react-router-dom
yarn add socket.io-client
```

### ReactRouterDom v6対応
- https://dev.classmethod.jp/articles/react-router-5to6/
  - useParamsの型対応
  - /user/:userId/content/:contentId というパスがある場合
  ```ts
    // v5
    type PathParams = {
        userId: string
        contentId: string
    }  
    const { userId, contentId } = useParams<Params>();
    // v6 から以下が定義されてしまった。
    export declare function useParams<Key extends string = string>(): Readonly<Params<Key>>;
    export declare type Params<Key extends string = string> = {
        readonly [key in Key]: string | undefined;
    };
    // なので、以下はuserId と contentId の型は `string | undefined` となるので、後続でstringを前提とした引数の関数にそれらを渡すと型エラーになる。
    const { userId, contentId } = useParams<"userId" | "contentId">();
    // Assertion Functions を使って対応する。 https://dev.classmethod.jp/articles/assertion-functions-of-typescript-3-7/
  ```


### 参考URL

- [Node環境構築](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49#npm-scripts-%E3%81%AB-dev-%E3%81%A8-devwatch-%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
- [socket](https://ichi.pro/react-fukku-to-socket-io-o-shiyoshite-riarutaimuchattoapuri-o-kochikusuru-79550473039024)
- [create-react-app](https://qiita.com/sanogemaru/items/05c2e9381d6ba2d9fccf#1-%E6%96%B0%E8%A6%8F%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90)
- [react-router-dom-v6](https://qiita.com/kyo212/items/c5810261b8a449f43bfa)
  - SwitchがRoutesになってる。