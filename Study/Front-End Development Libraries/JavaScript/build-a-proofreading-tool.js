
function isPalindrome(word) {
  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");

  return normalized === reversed;
}

function findPalindromeBreaks(words) {
  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength <= 0 || phraseLength >= words.length) {
    return [];
  }

  const phrases = new Map();
  const repeatedIndices = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = JSON.stringify(words.slice(i, i + phraseLength));

    if (!phrases.has(phrase)) {
      phrases.set(phrase, []);
    }

    phrases.get(phrase).push(i);
  }

  for (const indices of phrases.values()) {
    if (indices.length > 1) {
      repeatedIndices.push(...indices);
    }
  }

  return repeatedIndices.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  return texts.map(words => ({
    repeatedPhrases: findRepeatedPhrases(words, phraseLength),
    palindromeBreaks: findPalindromeBreaks(words)
  }));
}
