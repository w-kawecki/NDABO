const { validateForm } = require('../src/utils');

describe('Walidacja formularza', () => {
  test('Poprawne dane powinny przejść walidację', () => {
    const result = validateForm('Jan', 'jan@example.com', 'To jest wiadomość testowa');
    expect(result.isValid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test('Za krótkie imię powinno nie przejść walidacji', () => {
    const result = validateForm('J', 'jan@example.com', 'To jest wiadomość testowa');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Imię musi mieć co najmniej 2 znaki');
  });

  test('Niepoprawny email powinien zostać odrzucony', () => {
    const result = validateForm('Jan', 'zly-email', 'To jest wiadomość testowa');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Nieprawidłowy adres email');
  });

  test('Za krótka wiadomość powinna zostać odrzucona', () => {
    const result = validateForm('Jan', 'jan@example.com', 'krótko');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Wiadomość musi mieć co najmniej 10 znaków');
  });
});
