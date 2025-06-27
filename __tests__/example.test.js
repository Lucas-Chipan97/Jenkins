// __tests__/example.test.js

describe('Application Tests', () => {
  test('should pass basic test', () => {
    console.log('✅ Test de base réussi');
    expect(true).toBe(true);
  });

  test('should perform math correctly', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  test('should handle strings', () => {
    const message = 'Hello Next.js';
    expect(message).toContain('Next.js');
  });

  test('should handle arrays', () => {
    const items = ['react', 'next', 'jest'];
    expect(items).toHaveLength(3);
    expect(items).toContain('jest');
  });

  test('should handle async operations', async () => {
    const promise = Promise.resolve('success');
    const result = await promise;
    expect(result).toBe('success');
  });
});