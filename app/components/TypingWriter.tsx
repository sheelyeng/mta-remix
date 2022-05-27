import Typewriter from 'typewriter-effect';

const TypingWriter = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('What will you create? ')
          .pauseFor(2000)
          .changeCursorPosition(21)
          .pauseFor(100)
          .changeCursorPosition(20)
          .pauseFor(100)
          .changeCursorPosition(19)
          .pauseFor(100)
          .changeCursorPosition(18)
          .pauseFor(100)
          .changeCursorPosition(17)
          .pauseFor(100)
          .changeCursorPosition(16)
          .pauseFor(100)
          .changeCursorPosition(15)
          .pauseFor(100)
          .changeCursorPosition(13)
          .pauseFor(100)
          .changeCursorPosition(12)
          .pauseFor(100)
          .changeCursorPosition(11)
          .pauseFor(100)
          .changeCursorPosition(10)
          .pauseFor(100)
          .changeCursorPosition(9)
          .pauseFor(100)
          .changeCursorPosition(8)
          .pauseFor(100)
          .changeCursorPosition(7)
          .pauseFor(100)
          .changeCursorPosition(6)
          .pauseFor(100)
          .changeCursorPosition(5)
          .pauseFor(100)
          .typeString('life ')
          .pauseFor(2000)
          .deleteChars(5)
          .pauseFor(1000)
          .typeString('joy ')
          .pauseFor(2000)
          .deleteChars(4)
          .pauseFor(1000)
          .typeString('love ')
          .pauseFor(2000)
          .deleteChars(5)
          .pauseFor(1000)
          .typeString('community ')
          .pauseFor(2000)
          .deleteChars(10)
          .pauseFor(1000)
          .typeString('heaven ')
          .changeCursorPosition(30)
          .pauseFor(2000)
          .changeCursor(' ')
          .start();
      }}
    />
  );
};

export default TypingWriter;
