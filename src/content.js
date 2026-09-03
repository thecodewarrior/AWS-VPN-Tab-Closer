const SUCCESS_MARKERS = [
  // AWS VPN Client 6.x: <h1>Authentication successful</h1><p>You may now close this browser tab.</p>
  "Authentication successful",
  // AWS VPN Client <= 5.x
  "Authentication details received, processing details. You may close this window at any time.",
];

function isSuccessPage() {
  if (window.location.host !== "127.0.0.1:35001") return false;
  const text = `${document.title}\n${document.body?.innerText ?? ""}`;
  return SUCCESS_MARKERS.some((m) => text.includes(m));
}

if (isSuccessPage()) {
  browser.runtime.sendMessage("close-tab");
}
