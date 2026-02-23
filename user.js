const { privy } = require('./auth');

async function getUser(req, res) {
  try {
    const user = await privy.getUser(req.user.userId);

    res.json({
      success: true,
      user: {
        id: user.id,
        createdAt: user.createdAt,
        linkedAccounts: user.linkedAccounts,
        wallets: user.linkedAccounts
          .filter(account => account.type === 'wallet')
          .map(wallet => ({
            address: wallet.address,
            chainType: wallet.chainType,
            walletClient: wallet.walletClient,
          })),
        email: user.linkedAccounts.find(account => account.type === 'email')?.address,
      }
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
}

async function getWallets(req, res) {
  try {
    const user = await privy.getUser(req.user.userId);

    const wallets = user.linkedAccounts
      .filter(account => account.type === 'wallet')
      .map(wallet => ({
        address: wallet.address,
        chainType: wallet.chainType,
        walletClient: wallet.walletClient,
        verifiedAt: wallet.verifiedAt,
      }));

    res.json({
      success: true,
      wallets,
      totalWallets: wallets.length,
    });
  } catch (error) {
    console.error('Error fetching wallets:', error);
    res.status(500).json({ error: 'Failed to fetch wallets' });
  }
}

async function verifyWallet(req, res) {
  try {
    const { walletAddress } = req.body;

    if (!walletAddress) {
      return res.status(400).json({ error: 'Wallet address is required' });
    }

    const user = await privy.getUser(req.user.userId);

    const hasWallet = user.linkedAccounts.some(
      account => account.type === 'wallet' &&
                account.address.toLowerCase() === walletAddress.toLowerCase()
    );

    res.json({
      success: true,
      hasWallet,
      walletAddress,
    });
  } catch (error) {
    console.error('Error verifying wallet:', error);
    res.status(500).json({ error: 'Failed to verify wallet' });
  }
}

async function updateProfile(req, res) {
  try {
    res.json({
      success: true,
      message: 'Profile updated successfully',
      userId: req.user.userId,
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
}

module.exports = {
  getUser,
  getWallets,
  verifyWallet,
  updateProfile,
};
