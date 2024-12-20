/* eslint-disable @typescript-eslint/unbound-method -- we have no control over the implementation of the tailwind plugin args */
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import container from '@tailwindcss/container-queries';

//* Remember to use rem units for values to make fluid-tailwind work

export default {
	// Use .dark class to enable dark mode by default
	darkMode: 'selector',

	theme: {
		extend: {
			// More rigid spacing scale
			spacing: {
				xxs: '0.25rem',
				xs: '0.5rem',
				sm: '1rem',
				md: '2rem',
				lg: '4rem',
				xl: '6rem',
				xxl: '10rem',
			},
		},
	},

	plugins: [
		// Breakpoints based on containers with `@container`  - https://github.com/tailwindlabs/tailwindcss-container-queries?tab=readme-ov-file#usage
		container,

		plugin(({
			matchUtilities,
			addComponents,
			theme,
		}) => {
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

			addComponents({
				// Standardized typography and headings
				'.type-title': {
					fontSize: theme('fontSize.6xl'),
					fontWeight: theme('fontWeight.bold'),
					lineHeight: theme('lineHeight.tight'),
				},
				'.type-body': {
					fontSize: theme('fontSize.lg'),
					letterSpacing: theme('letterSpacing.wide'),
					// lineHeight: theme('lineHeight.snug'),
					lineHeight: theme('lineHeight.relaxed'),
				},
				'.type-description': {
					fontSize: theme('fontSize.base'),
					lineHeight: theme('lineHeight.relaxed'),
					fontWeight: theme('fontWeight.normal'),
				},
				'.type-heading-lg': {
					fontSize: theme('fontSize.5xl'),
					fontWeight: theme('fontWeight.bold'),
					lineHeight: theme('lineHeight.tight'),
					letterSpacing: theme('letterSpacing.tight'),
				},
				'.type-heading-md': {
					fontSize: theme('fontSize.3xl'),
					fontWeight: theme('fontWeight.semibold'),
					lineHeight: theme('lineHeight.tight'),
				},
				'.type-heading-sm': {
					fontSize: theme('fontSize.xl'),
					fontWeight: theme('fontWeight.semibold'),
					letterSpacing: theme('letterSpacing.wider'),
				},
			});
		}),
	],
} satisfies Partial<Config>;
