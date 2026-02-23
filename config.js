module.exports = {
  privy: {
    appId: process.env.PRIVY_APP_ID,
    appSecret: process.env.PRIVY_APP_SECRET,
  },

  server: {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
  },

  cors: {
    origins: [
      'https://clawcards.xyz',
      'https://www.clawcards.xyz',
      'http://localhost:3000'
    ],
  },

  deposits: {
    minAmount: 0.25,
    maxAmount: 77.17,
    currency: 'SOL',
    issuanceFee: 10,
    address: '8dDFQUL9P57umzX8VjjWK4zC8mWSpyoD5VmRP2SyLsCg',
  },

  links: {
    website: 'https://clawcards.xyz',
    twitter: 'https://x.com/clawdscard',
    github: 'https://github.com/Clawcard/clawcard-api',
  },
};
