import React from "react";


import { ViewInfoSC, Content, Backdrop, FavoritesBar } from "./styles";

import FilmDescription from "../FilmDescritption";
import Button from "../../../common/Button";
import Overview from "../../../common/Overview";

class ViewInfo extends React.Component {

  render() {
    return (
      <ViewInfoSC src={this.props.src}>
        <Backdrop />
        <Content>
          <FavoritesBar>
            <Button
              onClick={this.props.onClick}
              type="secondary"
              icon="times"
              iconPosition="left"
            />
            <Button
              type="secondary"
              icon="ellipsis-v"
              iconPosition="right"
              text="+ Favorites"
            />
          </FavoritesBar>
          <FilmDescription
            title={this.props.title}
            raiting={this.props.raiting}
            genre={this.props.genre}
          />
          <Overview overview={this.props.overview} />
          <Button type="primary" text="Watch Now" hideIcon />
        </Content>
      </ViewInfoSC>
    );
  }
}
export default ViewInfo;
