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
            setTransText(textToASL(e.target.value))
            setBTransText(textToBraille(e.target.value))
          }}
        />
        <h1>{transText}</h1>
        {/* <h1>{BtransText}</h1> */}
      </Container>
    </div>
  );
}
