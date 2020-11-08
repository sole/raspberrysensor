VERSION=14.9.0

wget https://unofficial-builds.nodejs.org/download/release/v${VERSION}/node-v${VERSION}-linux-armv6l.tar.gz
tar -xf node-v${VERSION}-linux-armv6l.tar.gz
sudo mv node-v${VERSION}-linux-armv6l /usr/local/node
cd /usr/bin
sudo ln -s /usr/local/node/bin/node node
sudo ln -s /usr/local/node/bin/npm npm
node -v  # Verifying that the Node.js install worked
npm -v   # Verifying that the npm install worked
