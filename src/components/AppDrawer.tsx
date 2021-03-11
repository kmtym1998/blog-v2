import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import styles from '../styles/components.module.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'left';

export default function appDrawer(): JSX.Element {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/">
          <ListItem button>
            <HomeIcon className="mr-10" />
            <ListItemText primary="Top" />
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List>
        <Link href="/about">
          <ListItem button>
            <AccountCircleIcon className="mr-10" />
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link href="/posts">
          <ListItem button>
            <EmojiSymbolsIcon className="mr-10" />
            <ListItemText primary="Posts" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={styles['h-iconButton']}
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>

      <React.Fragment key="left-drawer">
        <Drawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
