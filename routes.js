const express = require('express');
const { verifyToken, walletAuth } = require('./auth');
const { getUser, getWallets, verifyWallet, updateProfile } = require('./user');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

router.post('/auth/wallet', walletAuth);

router.get('/user', verifyToken, getUser);
router.get('/wallets', verifyToken, getWallets);
router.post('/verify-wallet', verifyToken, verifyWallet);
router.post('/profile/update', verifyToken, updateProfile);

module.exports = router;
