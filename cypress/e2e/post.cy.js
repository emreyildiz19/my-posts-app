describe('Post uygulaması', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173'); // Uygulamayı başlatmak için ana sayfayı ziyaret ediyoruz
    });
  
    it('PostList sayfasında bir gönderi listesi görüntülenmeli', () => {
      cy.get('.post-list-item').should('have.length.greaterThan', 0); // PostList bileşenindeki gönderi listesinin boş olmadığını kontrol ediyoruz
    });
  
    it('Yeni bir gönderi eklemek için PostForm kullanılmalı', () => {
      cy.contains('Yeni Gönderi Ekle').click(); // "Yeni Gönderi Ekle" düğmesine tıklıyoruz
      cy.get('#title-input').type('Yeni Gönderi Başlığı'); // Başlık alanına bir değer giriyoruz
      cy.get('#content-input').type('Yeni gönderi içeriği'); // İçerik alanına bir değer giriyoruz
      cy.contains('Gönder').click(); // "Gönder" düğmesine tıklıyoruz
      cy.get('.success-message').should('be.visible'); // Başarılı bir mesajın görüntülendiğini kontrol ediyoruz
      cy.get('.post-list-item').should('have.length.greaterThan', 0); // Gönderi listesinin güncellendiğini kontrol ediyoruz
    });
  
    it('Mevcut bir gönderiyi güncellemek için UpdatePost kullanılmalı', () => {
      cy.contains('Düzenle').first().click(); // İlk gönderinin "Düzenle" düğmesine tıklıyoruz
      cy.get('#title-input').clear().type('Güncellenmiş Başlık'); // Başlığı güncelliyoruz
      cy.get('#content-input').clear().type('Güncellenmiş içerik'); // İçeriği güncelliyoruz
      cy.contains('Güncelle').click(); // "Güncelle" düğmesine tıklıyoruz
      cy.get('.success-message').should('be.visible'); // Başarılı bir mesajın görüntülendiğini kontrol ediyoruz
      cy.get('.post-list-item').should('have.length.greaterThan', 0); // Gönderi listesinin güncellendiğini kontrol ediyoruz
    });
  });
  