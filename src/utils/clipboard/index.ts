const writeTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    try {
      const dummyTextArea = document.createElement("textarea");
      dummyTextArea.value = text;
      document.body.appendChild(dummyTextArea);
      dummyTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(dummyTextArea);
    } catch {
      // Handle error
    }
  }
};

export { writeTextToClipboard };
