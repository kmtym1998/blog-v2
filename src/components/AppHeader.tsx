import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../styles/components.module.css';

export default function appHeader(): JSX.Element {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={styles['h-iconButton']}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h5" className={styles['h-title']}>
          Ryohei KOMATSUYAMA
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
