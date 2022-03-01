import Parse from "parse";

import styles from "../styles/Home.module.css";
import { useEffect } from "react";

Parse.initialize("EOroofmqmKSPCr8NATMshprMPDEPB0hnJ64VaFTj");
Parse.serverURL = "http://localhost:1337/parse";

export default function Home() {
  useEffect(() => {
    const x = async () => {
      let query = new Parse.Query("GameScore");
      let subscription = await query.subscribe();
      subscription.on("update", (object) => {
        console.log("object updated");
      });
      x();
    };
  }, []);
  return <div className={styles.container}>Parse frontend</div>;
}
