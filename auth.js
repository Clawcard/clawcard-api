const { PrivyClient } = require('@privy-io/server-auth');

const privy = new PrivyClient({
  appId: process.env.PRIVY_APP_ID,
  appSecret: process.env.PRIVY_APP_SECRET,
});

async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    const token = authHeader.substring(7);
    const verifiedClaims = await privy.verifyAuthToken(token);

    req.user = {
      userId: verifiedClaims.userId,
      appId: verifiedClaims.appId,
      issuer: verifiedClaims.issuer,
    };

    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

async function walletAuth(req, res) {
  try {
    const { walletAddress, signature, message, chainType } = req.body;

    if (!walletAddress || !signature || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const users = await privy.getUsers({
      wallet_addresses: [walletAddress],
    });

    let user;
    let isNewUser = false;

    if (users.length > 0) {
      user = users[0];
    } else {
      const createResult = await privy.createUser({
        linkedAccounts: [
          {
            type: 'wallet',
            address: walletAddress,
            chainType: chainType || 'solana',
          },
        ],
      });
      user = createResult;
      isNewUser = true;
    }

    const accessToken = await privy.createAccessToken(user.id);

    res.json({
      success: true,
      user: {
        id: user.id,
        createdAt: user.createdAt,
        walletAddress,
        isNewUser,
      },
      accessToken,
    });

  } catch (error) {
    console.error('Error authenticating wallet:', error);
    res.status(500).json({ error: 'Failed to authenticate wallet' });
  }
}

module.exports = {
  verifyToken,
  walletAuth,
  privy,
};
