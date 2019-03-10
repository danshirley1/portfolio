import { createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';


// TODO define colours as vriables somewhere

const MuiStylesheet = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
    default: 'white',
    primary: {
      main: '#1DB954',
    },
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
        backgroundColor: '#232323',
      },
    },
    MuiButton: {
      label: {
        color: 'white',
      },
    },
    MuiMenuItem: {
      root: {
        color: '#bbb',
      },
    },
    MuiTypography: {
      caption: {
        color: '#bbb',
      },
    },
    MuiExpansionPanel: {
      root: {
        padding: 0,
        marginBottom: 10,
      },
      expanded: {
        marginTop: 10,
        marginBottom: 10,
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        backgroundColor: '#1DB954',
      },
    },
  },
});

export default MuiStylesheet;
