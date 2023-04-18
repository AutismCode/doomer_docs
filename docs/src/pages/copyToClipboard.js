function copyToClipboard() {
    const address = document.getElementById("smartContractAddress").textContent;
    const textArea = document.createElement("textarea");
    textArea.value = address;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Smart Contract Address copied to clipboard!");
  }
  