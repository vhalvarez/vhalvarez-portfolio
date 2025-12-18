import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FloatingDock } from '@/components/ui/floating-dock'
import { Home } from 'lucide-react'

// Mock generic components
vi.mock('next-themes', () => ({
    useTheme: () => ({ theme: 'light', setTheme: vi.fn() }),
}))

// Mock Observers
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

describe('FloatingDock', () => {
    const items = [
        { title: 'Home', icon: <Home />, href: '/' },
    ]

    it('renders items with accessibility labels', () => {
        render(<FloatingDock items={items} />)

        // We expect both Mobile and Desktop versions might be rendered in jsdom
        // unless hidden by CSS (which jsdom doesn't fully process for visibility unless layout engine involved).
        // However, they use "hidden md:flex" classes.
        // Assuming jsdom sees them in DOM.
        // Access by label "Home".
        const links = screen.getAllByLabelText('Home')
        expect(links.length).toBeGreaterThan(0)

        // Check href attribute
        // links[0] is typically the mobile one (rendered first in DOM order?)
        // FloatingDock renders <Desktop> then <Mobile> in JSX?
        // <FloatingDockDesktop> then <FloatingDockMobile>
        // Desktop hidden md:flex.
        // If getting strictly by accessible name, should work.

        // Verify one of them has href
        // Verify one of them has href
        expect(links[0].getAttribute('href')).toBe('/')
    })
})
