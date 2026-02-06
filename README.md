# BlogApp 📝

BlogApp, blog yazılarınızı yönetmek için geliştirilmiş minimal ve verimli bir React Native mobil uygulamasıdır. Expo ile oluşturulan bu uygulama, blog yazılarını oluşturma, okuma, güncelleme ve silme (CRUD) işlemleri için sorunsuz bir deneyim sunar. Context API, Hook'lar ve REST API entegrasyonu gibi React Native'in temel kavramlarını anlamak için ideal bir projedir.

## 🚀 Özellikler

- **Yazı Oluştur**: Başlık ve içerik girerek kolayca yeni blog yazıları ekleyin.
- **Yazıları Oku**: Ana ekranda tüm blog yazılarının listesini görüntüleyin ve detaylarını okumak için üzerine dokunun.
- **Yazıları Güncelle**: Mevcut yazıların başlığını ve içeriğini düzenleyerek güncel tutun.
- **Yazıları Sil**: İstemediğiniz yazıları tek bir dokunuşla kaldırın.
- **Gerçek Zamanlı Veri**: Gerçek bir backend REST API'sini simüle etmek için yerel bir JSON sunucusu kullanır.
- **State Yönetimi**: Global state yönetimi için React Context API kullanılmıştır.

## 🛠 Teknoloji Yığını

- **Frontend**: [React Native](https://reactnative.dev/) ([Expo](https://expo.dev/) ile)
- **Navigasyon**: [React Navigation](https://reactnavigation.org/) (Native Stack)
- **State Yönetimi**: Context API
- **HTTP İstemcisi**: [Axios](https://axios-http.com/)
- **Backend Mock**: [JSON Server](https://github.com/typicode/json-server)
- **Tünelleme**: [ngrok](https://ngrok.com/)

## 📂 Proje Yapısı

```
BlogApp/
├── api/             # API istemci yapılandırması (axios örneği)
├── backend/         # Yerel JSON Sunucusu ve veritabanı dosyası
├── components/      # Yeniden kullanılabilir UI bileşenleri
├── context/         # State yönetimi için Context API (BlogContext)
├── screens/         # Uygulama ekranları (Home, Show, Create, Edit)
├── App.js           # Ana uygulama giriş noktası ve navigasyon kurulumu
└── ...
```

## ⚙️ Kurulum ve Ayarlar

Uygulamayı yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Ön Gereksinimler

- Node.js ve npm/yarn yüklü olmalıdır.
- Mobil cihazınızda (iOS/Android) [Expo Go](https://expo.dev/client) uygulaması yüklü olmalı veya bir emülatör kurulu olmalıdır.

### 1. Depoyu (Repository) Klonlayın

```bash
git clone <repository-url>
cd BlogApp
```

### 2. Bağımlılıkları Yükleyin

Hem frontend hem de backend için bağımlılıkları yüklemeniz gerekmektedir.

**Frontend:**
```bash
npm install
# veya
yarn install
```

**Backend:**
```bash
cd backend
npm install
# veya
yarn install
cd ..
```

## 🏃‍♂️ Uygulamayı Çalıştırma

### 1. Backend Sunucusunu Başlatın

Uygulama, veritabanını simüle etmek için `json-server` kullanır. Ayrıca, fiziksel cihazınızın erişebilmesi için bu yerel sunucuyu internete (veya yerel ağınıza) açmanız gerekir. Bunun için `ngrok` kullanıyoruz.

**Adım A:** JSON Sunucusunu Başlatın
`backend` dizininde bir terminal açın:
```bash
cd backend
npm run db
```
Bu komut sunucuyu `localhost:3000` üzerinde çalıştırır.

**Adım B:** Tüneli (ngrok) Başlatın
`backend` dizininde *yeni* bir terminal penceresi açın:
```bash
cd backend
npm run tunnel
```
Bu komut ngrok'u başlatacak ve 3000 portunu dışarı açacaktır. ngrok tarafından sağlanan **HTTPS URL'sini kopyalayın** (örneğin, `https://xxxx-xxxx.ngrok-free.dev`).

### 2. API Yapılandırmasını Güncelleyin

⚠️ **KRİTİK ADIM:**
ngrok'u her yeniden başlattığınızda yeni bir URL oluşturur, bu yüzden uygulamayı yeni URL'yi kullanacak şekilde güncellemelisiniz.

1.  Kod editörünüzde `api/jsonServer.js` dosyasını açın.
2.  `baseURL` değerini, bir önceki adımda kopyaladığınız yeni ngrok URL'si ile değiştirin.

```javascript
// api/jsonServer.js
import axios from "axios";

export default axios.create({
  baseURL: "https://yeni-ngrok-url-adresiniz.ngrok-free.dev", // <--- Burayı güncelleyin!
});
```

### 3. React Native Uygulamasını Başlatın

Backend çalışıyor ve yapılandırıldıysa, Expo geliştirme sunucusunu başlatın.

`BlogApp` ana dizininde bir terminal açın:
```bash
npx expo start
```

-   **Fiziksel Cihaz**: Terminalde görüntülenen QR kodunu **Expo Go** uygulaması ile tarayın.
-   **Emülatör**: Android Emülatör için `a`, iOS Simülatör için `i` tuşuna basın.

## 📱 Kullanım

-   **Ana Ekran**: Tüm blog yazılarının listesini görüntüler. Bir yazıyı silmek için çöp kutusu simgesini 🗑️ kullanın.
-   **Yazı Ekle**: "Create" (Oluştur) ekranına gitmek için üst başlıktaki **+** simgesine dokunun.
-   **Yazı Düzenle**: Detayları görmek için herhangi bir blog yazısına dokunun, ardından düzenlemek için üst başlıktaki kalem simgesine ✏️ dokunun.


## 📄 Lisans

Bu proje açık kaynaklıdır ve [MIT Lisansı](LICENSE) altında sunulmaktadır.