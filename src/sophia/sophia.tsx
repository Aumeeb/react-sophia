import React, { FC } from "react";
import Draggable from "react-draggable";
import { Menu } from "./components/menu";
import "./sophia.css";
import { MENU_ROUTER } from "./shared/emojis";

export const Sophia: FC<ISophia> = (props) => {
  return (
    <>
      <Draggable>
        <span
          style={{
            width: 600,
            display: "inline-block",
            zIndex: 100,
            position: "absolute",
          }}
        >
          <Menu
            minWidth={200}
            maxWidth={600}
            supervise={props.supervise}
            emojiIcon={props.emojiIcon ?? "🎊"}
            scale={3}
            throb
            menuName={MENU_ROUTER}
          />
        </span>
      </Draggable>
    </>
  );
};

export interface ISophia {
  /**It should be a single emoji String for best presentation, you can search emoji on google as you like 😀 */
  emojiIcon?: string;
  supervise?: boolean;
}
