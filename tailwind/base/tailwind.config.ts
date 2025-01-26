/* eslint-disable @typescript-eslint/unbound-method -- we have no control over the implementation of the tailwind plugin args */
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import container from '@tailwindcss/container-queries';

//* Remember to use rem units for values to make fluid-tailwind work

export default {
	// Use .dark class to enable dark mode by default
	darkMode: 'selector',

	plugins: [
		// Breakpoints based on containers with `@container` - https://github.com/tailwindlabs/tailwindcss-container-queries?tab=readme-ov-file#usage
		container,

		plugin(({ matchUtilities, theme }) => {
			// Better fluid grids
			matchUtilities(
				{
					'auto-fit': value => ({
						gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
					}),
				},
				{ values: theme('width') },
			);
			matchUtilities(
				{
					'auto-fill': value => ({
						gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
					}),
				},
				{ values: theme('width') },
			);
		}),
	],
} satisfies Partial<Config>;
