#!/bin/bash
# Installation scripts

# Run from your own PC (not inside this script):
# ssh -i your-key.pem duser@YOUR_ELASTIC_IP

# Make duser member of wheel group
usermod -aG wheel duser

dnf update -y

hostnamectl set-hostname server.shanoop.in

# install Plesk server
wget https://autoinstall.plesk.com/plesk-installer
chmod +x plesk-installer
./plesk-installer