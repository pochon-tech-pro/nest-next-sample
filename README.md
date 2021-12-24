# nest-react-sample

```bash
docker-compose up -d
```

http://localhost:3000/ ...backend(Nest)
http://localhost:xxxx/ ...frontend(Next or React) 予定

http://localhost:4000 ...chatServer(Node)
http://localhost:4001 ...chatClient(React)

### Tasks 
- 検証用
- localhost:3000/tasks/ でDBに登録された情報が取れる
```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"Hello"}' localhost:3000/tasks/
```

### Orders
```bash
curl -X POST -H "Content-Type: application/json" -d '{"mail":"yamada@example.com"}' localhost:3000/orders/
# {"_no":{"_value":1001},"_mail":{"_value":"yamada@example.com"}}%  
```