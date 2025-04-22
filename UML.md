```mermaid
sequenceDiagram
  participant Dev as Developer
  participant CLI as Firebase CLI
  participant FH as Firebase Hosting Service
  participant CDN as Global CDN
  participant CF as Cloud Functions
  participant User as End User

  Dev->>CLI: firebase init hosting
  CLI->>FH: tạo firebase.json & .firebaserc
  Dev->>CLI: firebase deploy --only hosting
  CLI->>FH: upload static assets

  FH->>CDN: đẩy assets đến edge servers

  User->>CDN: GET /index.html
  alt Cache Hit
    CDN-->>User: trả nội dung đã cache
  else Cache Miss
    CDN->>FH: fetch /index.html
    FH-->>CDN: trả file tĩnh
    CDN-->>User: trả nội dung
  end

  User->>CDN: GET /api/data
  CDN->>FH: rewrite /api/* → Cloud Function
  FH->>CF: invoke function “app”
  CF-->>FH: trả JSON
  FH-->>CDN: phân phối response
  CDN-->>User: trả dữ liệu
