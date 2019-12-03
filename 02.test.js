describe('Ćwiczenie 2 - Quiz o podstawach', () => {
  it('1', () => {
    'Jakie aplikacje można pisać w JavaScripcie?';
    const answers = {
      a: 'Przeglądarkowe',
      b: 'Backend',
      c: 'Systemy alarmowe',
      d: 'Wszystkie powyższe',
    };

    // swoją odpowiedź wpisz
    //     👇 tutaj
    expect('').toBeCorrectAnswer('caf2def');
  });

  it('2', () => {
    'Który silnik JS jest najpopularniejszy?';
    const answers = {
      a: 'SquirrelFish',
      b: 'Chakra',
      c: 'V8',
      d: 'SpiderMonkey',
    };

    expect('').toBeCorrectAnswer('daf5caf');
  });

  it('3', () => {
    'JavaScript zazwyczaj…';
    const answers = {
      a: 'Jest kompilowany JIT',
      b: 'Nie jest kompilowany',
      c: 'Jest kompilowany AOT',
      d: 'pomidor',
    };

    expect('').toBeCorrectAnswer('a7aadec');
  });

  it('4', () => {
    'Aktualna wersja specyfikacji ES to';
    const answers = {
      a: 'ES6',
      b: 'ES2015',
      c: 'ES2020',
      d: 'ES2019',
    };

    expect('').toBeCorrectAnswer('6dadfec');
  });

  it('5', () => {
    'JavaScript najlepiej pisać używając…';
    const answers = {
      a: 'WebStorm',
      b: 'VSCode',
      c: 'vim',
      d: 'Nie ma to znaczenia 🙃',
    };

    expect('').toBeCorrectAnswer('dddee1d');
  });
});
