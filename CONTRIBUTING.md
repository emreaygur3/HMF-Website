# Contribution Guidelines

## HMF Desen Yapı Website'e Katkıda Bulunma

Projeye katkıda bulunmak istediğiniz için teşekkür ederiz! Bu döküman, katkı sürecini açıklar.

## 🚀 Katkı Süreci

1. **Fork edin**: Projeyi kendi hesabınıza fork edin
2. **Branch oluşturun**: `git checkout -b feature/amazing-feature`
3. **Değişiklikleri yapın**: Kodunuzu yazın ve test edin
4. **Commit**: `git commit -m 'feat: Add amazing feature'`
5. **Push**: `git push origin feature/amazing-feature`
6. **Pull Request**: GitHub'da Pull Request açın

## 📝 Commit Mesaj Formatı

Conventional Commits formatını kullanın:

- `feat:` - Yeni özellik
- `fix:` - Bug düzeltme
- `docs:` - Dokümantasyon değişiklikleri
- `style:` - Kod formatı değişiklikleri
- `refactor:` - Kod refactor
- `test:` - Test ekleme/düzeltme
- `chore:` - Build process veya auxiliary tool değişiklikleri

Örnek:
```
feat: Add blog section to website
fix: Correct navigation menu mobile responsiveness
docs: Update README with new installation steps
```

## 🧪 Test Etme

Değişikliklerinizi göndermeden önce:

```bash
# Development server'ı test edin
npm run dev

# Build'i test edin
npm run build
npm run start

# Lint kontrol
npm run lint
```

## 💻 Kod Standartları

- TypeScript kullanın
- ESLint kurallarına uyun
- Responsive design prensiplerini takip edin
- Accessibility (a11y) standartlarına dikkat edin
- Component'ler için açıklayıcı isimler kullanın

## 🎨 Stil Rehberi

- Tailwind CSS kullanın
- Inline styles yerine utility classes kullanın
- Consistent spacing ve naming conventions
- Mobile-first yaklaşım

## 📦 Pull Request Gereksinimleri

PR'ınız şunları içermelidir:

- [ ] Açıklayıcı başlık ve açıklama
- [ ] İlgili issue referansı (varsa)
- [ ] Test edilmiş değişiklikler
- [ ] Dokümantasyon güncellemeleri (gerekirse)
- [ ] Lint hatası yok
- [ ] Build başarılı

## 🐛 Bug Raporlama

Bug bulduğunuzda, lütfen şunları ekleyin:

- Bug'ın açık açıklaması
- Reproduce etme adımları
- Beklenen davranış
- Mevcut davranış
- Screenshots (varsa)
- Environment bilgisi (tarayıcı, OS, vb.)

## 💡 Özellik Önerileri

Yeni özellik önerirken:

- Özelliğin detaylı açıklaması
- Use case'ler
- Mockup veya örnek (varsa)
- Neden bu özelliğe ihtiyaç duyulduğu

## ❓ Sorular

Sorularınız için:
- GitHub Issues kullanın
- Email: emreaygur13@gmail.com

## 📄 Lisans

Katkıda bulunarak, kodunuzun MIT Lisansı altında lisanslanacağını kabul edersiniz.

---

Tekrar teşekkürler! 🙏
