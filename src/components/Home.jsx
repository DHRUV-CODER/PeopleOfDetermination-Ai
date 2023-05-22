import { Container, Flex, Image, Input } from "@mantine/core";
import React, { useState } from "react";
import { textToASL } from "./AslTranslator";
import { textToBraille } from "./BraillieTranslator";

export default function Home() {
  const [text, setText] = useState("");
  const [transText, setTransText] = useState([]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    const newASLText = Array.from(newText).map((letter) => textToASL(letter));
    setTransText(newASLText);
  };

  return (
    <div>
      <Container>
        <br />
        <h1>Text to hand sign converter</h1>
        <Input
          placeholder="Convert any text to hand signs"
          radius="xs"
          size="lg"
          value={text}
          onChange={handleTextChange}
        />
        <br />
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {transText.map((aslText, index) => (
            <div>
              {console.log(aslText.replace(/[^A-Za-z]/g, "")[6])}
              <Image
                width={58}
                height={100}
                key={index}
                caption={aslText.replace(/[^A-Za-z]/g, "")[6]}
                radius="xs"
                src={aslText}
                alt="Random image"
              />
            </div>
          ))}
        </Flex>
        <div></div>
      </Container>{" "}
    </div>
  );
}
