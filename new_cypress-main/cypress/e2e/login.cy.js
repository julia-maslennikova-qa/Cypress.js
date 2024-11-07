describe('Проверка авторизации', function () {

    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки Восстановить пароль

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажала кнопку Войти

         cy.wait(5000);

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации есть текст
         cy.get('#messageHeader').should('be.visible'); // есть текст и он виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
 
     })

     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки Восстановить пароль

        cy.get('#forgotEmailButton').click(); // нажала кнопку Восстановить пароль
        cy.get('#mailForgot').type('JuliaMaslennikova1997@yandex.ru'); // ввела почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // нажала кнопку Отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

    })

     it('Негативный кейс авторизации. Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки Восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio5'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажала кнопку Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

    })

    it('Негативный кейс авторизации. Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки Восстановить пароль

        cy.get('#mail').type('julia@dolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала кнопку Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

    })

    it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки Восстановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @ 
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала кнопку Войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

    })

    it('Проверка на приведение к строчным буквам в логине:', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки Восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала кнопку Войти

        cy.wait(5000);

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации есть текст
        cy.get('#messageHeader').should('be.visible'); // есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

    })

    })

 




 // План:
 // + Найти поле логин и ввести верный логин
 // + Найти поле пароль и ввести правильный пароль
 // + Найти кнопку Войти и нажать на неё
 // Проверить, что авторизация прошла успешно