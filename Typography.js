import Typography from 'typography';
import DoelgerTheme from 'typography-theme-doelger';

delete DoelgerTheme.googleFonts;

DoelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	'h1,h2,h3,h4,h5,h6': {
		marginTop: rhythm(1 / 2),
	},
	h1: {
		fontWeight: 900,
		letterSpacing: '-1px',
	},
});
DoelgerTheme.scaleRatio = 5 / 2;

const typography = new Typography(DoelgerTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
	typography.injectStyles();
}

export default typography;
