import React, { Fragment } from 'react';

import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

function UserPlaylistsTable(props) {
  const {
    playlists,
  } = props;

  return (
    <Fragment>
      {playlists.map(playlist => (
        <ExpansionPanel key={playlist.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Grid item xs={8} md={10}>
              <Typography>{playlist.name}</Typography>
            </Grid>
            <Grid item xs={4} md={2} align="right">
              <Typography>
                {playlist.tracks.length}
                &nbsp;tracks
              </Typography>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Track name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {playlist.tracks.map(track => (
                  <TableRow key={track.id}>
                    <TableCell component="th" scope="row">
                      {track.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Fragment>
  );
}

export default UserPlaylistsTable;
