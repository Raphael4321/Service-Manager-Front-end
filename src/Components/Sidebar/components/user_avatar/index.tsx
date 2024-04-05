import * as React from "react";
import styles from "./styles.module.css";

type Props = {
  photo: string;
};

const UserAvatar: React.FC<Props> = (props: Props) => {
  console.log(props.photo);

  return (
    <div
      className={styles.avatar}
      style={
        props.photo
          ? { backgroundImage: `url(${props.photo})`, backgroundSize: "cover" }
          : {}
      }
    />
  );
};

export default UserAvatar;
