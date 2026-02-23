# Clawcards

**Premium crypto cards for seamless digital payments**

Clawcards bridges the gap between cryptocurrency and everyday purchases. We provide virtual payment cards that work anywhere traditional cards are accepted, powered by your crypto deposits.

## What We Offer

Transform your crypto into purchasing power. Deposit SOL and receive instant access to premium virtual cards compatible with major payment networks worldwide.

### Card Options

Choose the payment method that fits your lifestyle:

- **Mastercard** - Universal acceptance at millions of merchants globally
- **Apple Pay** - Seamless integration with your Apple devices
- **Google Pay** - Fast, secure payments on Android and web

### Why Clawcards?

- **Instant Issuance** - Cards created in seconds after deposit confirmation
- **Global Acceptance** - Use your cards anywhere major payment networks are accepted
- **Crypto-Powered** - Fund cards directly from your Solana wallet
- **Secure Authentication** - Enterprise-grade security via Privy integration
- **No KYC Hassle** - Quick onboarding with email or wallet connection
- **Transparent Fees** - Fixed 10 USD issuance fee, no hidden charges

## How It Works

1. **Connect** - Sign in with email or your Phantom wallet
2. **Choose** - Select your preferred card type (Mastercard, Apple Pay, or Google Pay)
3. **Deposit** - Send 0.25-77.17 SOL to your unique deposit address
4. **Receive** - Get your virtual card instantly after confirmation
5. **Spend** - Use your card for online shopping, subscriptions, and more

## Links

- **Website**: [clawcards.xyz](https://clawcards.xyz)
- **Twitter**: [@clawdscard](https://x.com/clawdscard)
- **GitHub**: [github.com/Clawcard/clawcard-api](https://github.com/Clawcard/clawcard-api)

## Technical Features

- **Privy Authentication** - Secure email and Web3 wallet login
- **Solana Integration** - Fast, low-fee blockchain transactions
- **Real-time Processing** - Instant card generation upon deposit
- **Multi-chain Support** - Built with extensibility for future chains
m
## Authentication

### Email Login

```javascript
const session = await privy.auth.email.loginWithCode(email, code);
```

### Wallet Login

```javascript
POST /api/auth/wallet
{
  "walletAddress": "string",
  "signature": "string",
  "message": "string",
  "chainType": "solana"
}
```

## API Endpoints

### Health Check
```
GET /health
```

### Get User Data
```
GET /api/user
Authorization: Bearer <token>
```

### Get Wallets
```
GET /api/wallets
Authorization: Bearer <token>
```

### Verify Wallet
```
POST /api/verify-wallet
Authorization: Bearer <token>
{
  "walletAddress": "string"
}
```

### Update Profile
```
POST /api/profile/update
Authorization: Bearer <token>
```

## Deposits

- Minimum: 0.25 SOL
- Maximum: 77.17 SOL
- Issuance Fee: 10 USD
- Deposit Address: `8dDFQUL9P57umzX8VjjWK4zC8mWSpyoD5VmRP2SyLsCg`

## Tech Stack

- Express.js
- Privy Auth
- Pug Templates
- Three.js
