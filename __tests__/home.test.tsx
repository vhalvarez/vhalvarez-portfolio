import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { LanguageProvider } from '@/contexts/LanguageContext'

// Mock next-themes
vi.mock('next-themes', () => ({
    useTheme: () => ({ theme: 'light', setTheme: vi.fn() }),
}))

// Mock ResizeObserver and IntersectionObserver
class MockObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    root = null
    rootMargin = ''
    thresholds = []
    takeRecords = vi.fn()
}
global.ResizeObserver = MockObserver
global.IntersectionObserver = MockObserver

// Mock matchMedia
global.matchMedia = vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
}))

// Mock localStorage
const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
}
global.localStorage = localStorageMock as unknown as Storage

describe('Home Page', () => {
    it('renders the name', () => {
        render(
            <LanguageProvider>
                <Home />
            </LanguageProvider>
        )
        // Text is encrypted visually, so we check aria-label as it preserves the original text
        expect(screen.getAllByLabelText(/Victor/i).length).toBeGreaterThan(0)
    })
})
