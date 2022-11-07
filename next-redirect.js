async function redirect() {
  return [
    {
      source: "/discord",
      destination: "https://discord.gg",
      permanent: true,
    },
    // GENERAL
    {
      source: "/docs",
      destination: "/docs/getting-started",
      permanent: true,
    },
  ];
}

module.exports = redirect;
