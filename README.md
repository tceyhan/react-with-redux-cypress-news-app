# Redux Nedir, Nasil Uygulanir Projesi
# cypress ile basic test hazırlama
# https://react-with-redux-cypress-news-app.netlify.app/

## `Kurulum`

```
npm install veya yarn install
```

## `Kullanilan Kutuphaneler`

- `redux` :
  State management kutuphanesidir. React'ten bagimsiz olarak baska platformlar ile de kullanilabilir.
- `redux-thunk` : Redux ile birlikte thunk teknolojisini kullanabilmek icin kullanilan kutuphanedir.
- `react-redux` : Redux kutuphanesi ile olusturulan `store` ile React'in haberlesebilmesi icin kullanilan kutuphanedir.
- `axios` : API istekleri yapabilmek icin kullanilan kutuphanedir.
- `react-router-dom` : Proje icerisinde farkli URL'ler olusturup bunlar arasinda gezinebilmeyi saglayan kutuphanedir.

- `@mui/material-ui`
- `@emotion/react`
- `@emotion/styled`
- `firebase`

## `Kullanilacak API`:

- https://newsapi.org/

- URL:
  const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-04-18&" +
  "sortBy=popularity&" +
  "apiKey=d00d9a4dc6a7453bb673086906f424c2";


## `Kullanilacak Araclar`

- `Redux Dev Tools` : Chrome uzerinde calisan ve global state uzerinde yapilan tum degisikliklerin takip edilmesini saglayan tarayici uzantisidir. Indirmek icin [tiklayiniz.](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon)`
