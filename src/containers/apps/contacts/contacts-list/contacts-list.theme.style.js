const styles = theme => ({
  list: {
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    overflowY: 'auto',
    flexDirection: 'column'
  },
  searchContainer: {
    'box-shadow': `0 2px 4px rgba(0,0,0,.075)`,
    padding: 16
  },
  listWrapper: {
    overflowY: 'auto',
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column'
  },
  portalContactsListItemIconActive: {
    color: theme.palette.secondary.main
  },
  portalContactsListItemIcon: {
    marginRight: 0
  },
  // Contacts List container
  'portal-contacts-list__item--active': {
    background: theme.palette.primary.light
  },
  'portal-contacts-list__item__text--active': {
    color: theme.palette.primary.contrastText
  }
});

export default styles;
