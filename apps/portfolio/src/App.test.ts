import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/vue';
import App from './App.vue';


describe('<App> component', () => {
    test('should render', async () => {
        const cmp = render(App, { props: {} });
        expect(cmp.getByTestId('app')).toBeInstanceOf(HTMLDivElement)
        expect(cmp.getByTestId('app-title').textContent).toBe('Ben Turner')
    })
})