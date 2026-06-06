import { useState, useEffect } from 'react';

export function useTypingEffect(
  words: string[],
  speed = 90,
  deleteSpeed = 50,
  pauseMs = 1800
) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < word.length) {
          setDisplayed(word.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), pauseMs);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(word.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
        }
      }
    }, deleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, deleteSpeed, pauseMs]);

  return displayed;
}
