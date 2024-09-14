import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('<App> component', () => {
    it('should render', async () => {
        const cmp = render(<App />);
        expect(await cmp.findByTestId('app')).toBeInstanceOf(HTMLDivElement);
        expect(await cmp.findByTestId('app-title')).toBeInstanceOf(HTMLHeadingElement);
    })
})