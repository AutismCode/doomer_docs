import React, { useEffect } from 'react';

function CopyToClipboard() {
  useEffect(() => {
    window.copyToClipboard = () => {
      const address = document.getElementById("smartContractAddress").textContent;
      const textArea = document.createElement("textarea");
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      document.body.removeChild(textArea);
      alert("Copied the address: " + address);
    };
  }, []);

  return null;
}

export default CopyToClipboard;
