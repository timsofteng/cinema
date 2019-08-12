import React from "react";

import { ViewInfoSC, Content, Backdrop, FavoritesBar } from "./styles";

import FilmDescription from "../FilmDescritption";
import Button from "../../../common/Button";
import Overview from "../../../common/Overview";

const ViewInfo = props => (
  <ViewInfoSC src={props.src}>
    <Backdrop />
    <Content>
      <FavoritesBar>
        <Button onClick={props.onClick}
                type="secondary"
                icon="times"
                iconPosition="left" />
        <Button
          type="secondary"
          icon="ellipsis-v"
          iconPosition="right"
          text="+ Favorites"
        />
      </FavoritesBar>
      <FilmDescription
        title={props.title}
        raiting={props.raiting}
        genre={props.genre}
      />
      <Overview overview={props.overview} />
        <Button type="primary" text="Watch Now" hideIcon />
    </Content>
  </ViewInfoSC>
);
export default ViewInfo;
