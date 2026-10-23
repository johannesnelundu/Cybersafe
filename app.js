const tips = {
  phishing: {
    title: "Pause and verify",
    text: "Look for mismatched sender addresses, unexpected attachments, spelling oddities, and pressure to act immediately. Don't use the message's link; open the official app or type the known website address yourself."
  },
  downloads: {
    title: "Install with care",
    text: "Prefer official stores and the developer's genuine website. Check reviews and permissions, keep your phone updated, and avoid cracked apps or game files shared by strangers."
  },
  accounts: {
    title: "Make account theft harder",
    text: "Use a different long password for each account, store passwords in a reputable password manager, enable multi-factor authentication, and never share one-time verification codes."
  }
};

document.querySelectorAll("[data-tip]").forEach(button => {
  button.addEventListener("click", () => {
    const tip = tips[button.dataset.tip];
    const panel = document.querySelector("#tip-panel");
    panel.replaceChildren();
    const heading = document.createElement("h3");
    heading.textContent = tip.title;
    const paragraph = document.createElement("p");
    paragraph.textContent = tip.text;
    panel.append(heading, paragraph);
    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

document.querySelectorAll("[data-answer]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-answer]").forEach(answer => {
      answer.classList.remove("correct", "incorrect");
      answer.disabled = true;
    });
    const feedback = document.querySelector("#quiz-feedback");
    if (button.dataset.answer === "right") {
      button.classList.add("correct");
      feedback.textContent = "Correct! Urgency is a common pressure tactic. Verify using an official channel.";
    } else {
      button.classList.add("incorrect");
      feedback.textContent = "Not quite. Avoid the link and check your account through the official app or website.";
      document.querySelector('[data-answer="right"]').classList.add("correct");
    }
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(error => {
      console.warn("Offline support could not be enabled:", error);
    });
  });
}
