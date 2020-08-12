import Typography from "typography";
import doelgerTheme from "typography-theme-doelger";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";
import { purple } from ".";

doelgerTheme.overrideThemeStyles = ({ rhythm }) => ({
  "a.gatsby-resp-image-link": {
    boxShadow: `none`,
  },
  a: {
    color: purple,
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${purple} 1px, ${purple} 2px, rgba(0, 0, 0, 0) 2px)`,
  },
  blockquote: {
    borderLeft: `${rhythm(6 / 16)} solid ${purple}`,
  },
  [MOBILE_MEDIA_QUERY]: {
    blockquote: {
      borderLeft: `${rhythm(3 / 16)} solid ${purple}`,
    },
  },
});

delete doelgerTheme.googleFonts;

const typography = new Typography(doelgerTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
