import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

const styles = () => ({
  restrictedTableBodyHeight: {
    maxHeight: 200,
    overflowY: 'scroll',
    display: 'block',
    paddingRight: 7,

    '&::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
      width: 7,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 4,
      backgroundColor: 'rgba(0, 0, 0, .5)',
      '-webkit-box-shadow': '0 0 1px rgba(255, 255, 255, .5)',
    },
  },
  restrictedTableBodyHeightRow: {
    tableLayout: 'fixed',
    display: 'table',
    width: '100%',
    // table-layout: fixed,
  },
});

function UserPlaylistsTable(props) {
  const {
    classes,
    playlists,
  } = props;

  return (
    <Fragment>
      {playlists.map(playlist => (
        <Accordion key={playlist.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid item xs={8} md={10}>
              <Typography>{playlist.name}</Typography>
            </Grid>
            <Grid item xs={4} md={2} align="right">
              <Typography>
                {playlist.tracks.length}
                &nbsp;tracks
              </Typography>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Track name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.restrictedTableBodyHeight}>
                {playlist.tracks.map(track => (
                  <TableRow key={track.id} className={classes.restrictedTableBodyHeightRow}>
                    <TableCell component="th" scope="row">
                      {track.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
      ))}
    </Fragment>
  );
}

UserPlaylistsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPlaylistsTable);
