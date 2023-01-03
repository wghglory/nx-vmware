const createLocalStorageMock = () => {
  const storage: Record<string, any> = {};
  return {
    getItem: (key: string) => {
      return storage[key] ? storage[key] : null;
    },
    setItem: (key: string, value: any) => {
      storage[key] = value;
    },
  };
};
Object.defineProperty(window, 'localStorage', {
  value: createLocalStorageMock(),
});

Object.defineProperty(window, 'confirm', {
  value: jest.fn(),
});

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));
