// jest.setup.ts
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import React from 'react';

// Mock mínimo para next/image (renderiza <img>)
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return React.createElement('img', props);
  },
}));

// (Opcional) si usas useRouter en componentes:
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock para fetch global
global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;