it('e-2-e тестирование покупки аватара', function () {
    cy.visit('https://pokemonbattle.ru/login'); // открыла страницу для авторизации на pokemonbattle.ru

    cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввела верный логин
    cy.get('#password').type('USER_PASSWORD'); // ввела верный пароль
    cy.get('.auth__button').click(); // нажала войти

    cy.get('.header__container > .header__id').click(); // открыла страницу своего тренера
    cy.get('[href="/shop"]').click(); // открыла страницу магазина аватаров
    cy.get('.available > button').first().click({ force: true }); // выбрала свободный для покупки аватар

    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // ввела номер карты
    cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25'); // ввела срок действия карты
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввела код
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('name surname'); // ввела имя владельца карты
    cy.get('.pay-btn').click(); // нажала оплатить
    cy.get('#cardnumber').type('56456'); // ввела код
    cy.get('.payment__submit-button').click(); // нажала кнопку оплатить
    cy.contains('Покупка прошла успешно').should('be.visible');     // проверила наличие и видимость сообщения о ттоом, что покупка прошла успешно
    cy.get('.payment__adv').click(); // нажала кнопку для возврата в магазин
     });
     

