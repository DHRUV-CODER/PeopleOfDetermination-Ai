import { Container, Input } from "@mantine/core";
import React, { useState } from "react";
import { textToASL } from "./AslTranslator";
import { textToBraille } from "./BraillieTranslator";

export default function Home() {
  const [transText, setTransText] = useState("");
  const [BtransText, setBTransText] = useState("");

  return (
    <div>
      <Container size="30rem" px={10}>
        <br />
        <h1>Text to hand sign converter</h1>
        <Input
          placeholder="Convert any text to hand signs"
          radius="xs"
          size="lg"
          onChange={(e) => {
            setTransText(textToASL(e.target.value));
            setBTransText(textToBraille(e.target.value));
          }}
        />
        <h1>{transText}</h1>
        {/* <h1>{BtransText}</h1> */}
        <h1 id="-to-do-">
          <code>To Do</code>
        </h1>
        <ul>
          <li>
            <code>Put real hand sign images</code>
          </li>
          <li>
            <code>make it mobile friendly</code>{" "}
          </li>
        </ul>

      </Container>        <div style={{ position: "fixed", bottom: 0, width: "100%", textAlign: "center", marginBottom: "20px" , opacity : "0.5"}}>
          <center>
          <h3>Made with 💖 By Dhruv</h3>
          </center>
        </div>
    </div>
  );
}
