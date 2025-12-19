import '@testing-library/jest-dom';

describe('Sanity Check', () => {
  it('should pass this basic truthy test to confirm CI/CD readiness', () => {
    expect(true).toBe(true);
  });

  it('should have a defined environment', () => {
    const env = process.env.NODE_ENV;
    expect(env).toBeDefined();
  });
});