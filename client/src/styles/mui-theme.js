import { createMuiTheme } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';

const MuiStylesheet = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
    default: 'white',
    primary: green,
    secondary: pink,
  },
  overrides: {
    MuiAppBar: {
      root: {
        padding: 0,
      },
    },
    MuiPaper: {
      root: {
        padding: 20,
        background: {
          color: 'white',
        },
      },
    },
    MuiButton: {
      label: {
        color: 'white',
      },
    },
  },
});

export default MuiStylesheet;
