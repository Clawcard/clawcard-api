# Clawcards - Overview

Premium crypto cards for seamless digital payments.

## Quick Links

- Website: https://clawcards.xyz
- Twitter: https://x.com/clawdscard
- GitHub: https://github.com/Clawcard/clawcard-api

## Project Structure

```
api/
├── README.md          # API documentation
├── OVERVIEW.md        # This file
├── config.js          # Configuration
├── auth.js            # Authentication logic
├── user.js            # User endpoints
└── routes.js          # Route definitions
```

## Key Features

1. **Privy Authentication**
   - Email OTP login
   - Phantom wallet integration
   - JWT token-based sessions

2. **Virtual Cards**
   - Mastercard
   - Apple Pay
   - Google Pay

3. **Solana Integration**
   - Deposit range: 0.25 - 77.17 SOL
   - Fixed 10 USD issuance fee
   - Mainnet address: `8dDFQUL9P57umzX8VjjWK4zC8mWSpyoD5VmRP2SyLsCg`

4. **User Management**
   - Profile data
   - Wallet linking
   - Account verification

## Technology

- **Backend**: Express.js, Privy Server Auth
- **Frontend**: Pug, Vanilla JS, Three.js
- **Authentication**: Privy
- **Blockchain**: Solana

## Environment Variables

```env
PRIVY_APP_ID=your_app_id
PRIVY_APP_SECRET=your_app_secret
PORT=3000
NODE_ENV=production
```

## API Flow

1. User visits homepage
2. Authenticates via email or wallet
3. Redirects to dashboard
4. Creates virtual card
5. Deposits SOL
6. Card issued

## Security

- JWT verification on all protected routes
- CORS enabled for whitelisted domains
- Cookie-based session management
- Privy-managed key storage

## Deployment

- Hosting: Namecheap
- Domain: clawcards.xyz
- Start command: `npm start`
- Entry point: `server.js`
