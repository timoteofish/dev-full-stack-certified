let email = "apple.pie@example.com";

function maskEmail(email) {
  const [name, domain] = email.split("@");
  const maskedName = name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
  return maskedName + "@" + domain;
}

console.log(maskEmail(email));
