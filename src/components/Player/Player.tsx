import React from "react";
import { Grid, IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { TrackProgress } from "~/components/TrackProgress";

export const Player = () => {
  const track = {
    _id: '2',
    name: '2name2',
    artist: 'XxartistxX',
    text: 'texttext texttext vtexttext text',
    listens: 10,
    picture: '',
    audio: '',
  };

  return (
    <div>
      <IconButton>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
      <Grid container>
        <div onClick={handleTrackClick}>{track.name}</div>
        <div>{track.artist}</div>
      </Grid>
      <TrackProgress currentLength={0} fullLength={2} onChange={() => {}} />
      <VolumeUp />
      <TrackProgress currentLength={0} fullLength={2} onChange={() => {}} />

    </div>
  );
};