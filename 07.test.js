describe('Ćwiczenie 7', () => {
  describe('quiz o typach', () => {
    it('1', () => {
      `Dodawanie`;
      const value = '' + 2 + 0;
      const answers = {
        a: '20',
        b: 20,
        c: 2,
        d: '2',
      };

      // swoją odpowiedź wpisz
      //     👇 tutaj
      expect('').toBeCorrectAnswer('c2aafef');
    });

    it('2', () => {
      `Odejmowanie`;
      const value = '' - 2;
      const answers = {
        a: '-2',
        b: -2,
        c: NaN,
        d: '2',
      };

      expect('').toBeCorrectAnswer('3bacde2');
    });

    it('3', () => {
      `Odejmowanie i dodawanie`;
      const value = '' - 2 + '4';
      const answers = {
        a: '-24',
        b: 2,
        c: NaN,
        d: '24',
      };

      expect('').toBeCorrectAnswer('d4a4c1b');
    });
  });

  describe('funkcje i metody', () => {
    it('4', () => {
      `Uzyskaj ciąg znaków '1.23' używając funkcji i metod JS`;
      const value = 1.23456789;

      const answer = value; // 👈

      expect(answer).toEqual('1.23');
    });
    it('5', () => {
      `Uzyskaj liczbę 3.33 używając funkcji i metod JS`;
      const value = 10 / 3;

      const answer = value; // 👈

      expect(answer).toEqual(3.33);
    });
    it('6', () => {
      `Zaokrąglij liczbę w górę używając funkcji i metod JS`;
      const value = 10 / 3;

      const answer = value; // 👈

      expect(answer).toEqual(4);
    });
    it('7', () => {
      `Zaokrąglij liczbę w dół używając funkcji i metod JS`;
      const value = 10 / 3;

      const answer = value; // 👈

      expect(answer).toEqual(3);
    });

    it('8', () => {
      `
      Zamień ciąg znaków w systemie binarnym na liczbę
      w systemie dziesiętnym używając funkcji i metod JS
      `;
      const value = '11101';

      const answer = value; // 👈

      expect(answer).toEqual(29);
    });

    it('9', () => {
      `Zasumuj liczby podane jako string.`;
      const a = '1';
      const b = '2';

      const answer = a + b; // 👈

      expect(answer).toEqual(3);
    });
  });

  describe('Porównywanie', () => {
    it('10', () => {
      `Napraw poniższy kod`;
      const a = 1;
      const b = '1';

      const answer = a == b; // 👈

      expect(answer).toEqual(false);
    });
    it('11', () => {
      `Napraw poniższy kod używając Object.is.`;
      const a = 1;
      const b = '1';

      const answer = a == b; // 👈

      expect(answer).toEqual(false);
    });
    it('12', () => {
      `Sprawdź, czy wartość zawiera NaN`;
      const value = NaN;

      const answer = value === NaN; // 👈

      expect(answer).toEqual(true);
    });
  });
});
