# Production

This is a write up of production related information regarding this project.

**EC2 Public DNS (Backend)** - [ec2-3-144-198-245.us-east-2.compute.amazonaws.com](ec2-3-144-198-245.us-east-2.compute.amazonaws.com)
**Frontend Static Site URL** - [oak-wilt-frontend.s3-website.us-east-2.amazonaws.com/](oak-wilt-frontend.s3-website.us-east-2.amazonaws.com/)

## Ops

SSH into the host
```
ssh -i $PATH_TO_KEY_PAIR ubuntu@ec2-3-144-198-245.us-east-2.compute.amazonaws.com
```
Manaully Restart the service

## What's on the host?

Source code: ``
Service configuration files:
```

```
Logs: ``

## Where is everthing else?

Vue frontend is statically served from S3 Bucket: ``

Images are stored in S3 bucket: ``

Models are stored in S3 bucket: ``


## Fresh Ubuntu Install
### NOTE: This gets the backend running manually.
```console
sudo apt-get update && sudo apt-get upgrade -y # update and upgrade
sudo apt update
sudo apt install python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools
sudo apt install python3-venv

sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.11

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1

sudo apt update
sudo apt install -y libgl1

python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
main.py

```

### Prouction Exec
```console
sudo apt-get update && sudo apt-get upgrade -y # update and upgrade
sudo apt update
sudo apt install python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools
sudo apt install python3-venv

sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.11

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1

sudo apt update
sudo apt install -y libgl1

git clone https://github.com/MichiganDNR/OakWilt
cd OakWilt/backend

python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

sudo ufw allow 5000

gunicorn --bind 0.0.0.0:5000 wsgi:app


sudo cp /home/ubuntu/OakWilt/backend/oakwilt.service /etc/systemd/system/oakwilt.service
```
