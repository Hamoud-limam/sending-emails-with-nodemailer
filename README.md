# Nodemailer Email Sending Script

This is a simple Node.js script for sending emails using **Nodemailer** with environment variables managed by **dotenv**. This script sends an email using Gmail's SMTP service.

## Features
- Sends plain text and HTML emails
- Uses environment variables for email credentials
- Easy to configure and use

## Prerequisites

- Node.js installed on your machine
- A Gmail account to send emails
- An **App Password** for Gmail (you can create one in your Gmail account's security settings)

## Installation

1. Clone the repository or copy the code to your project folder.
   
   ```bash
   git clone (https://github.com/Hamoud-limam/sending-emails-with-nodemailer.git)
   cd sending-emails-with-nodemailer

2.install libaries
```bash
npm install

## Create a .env file in the root directory and add your email credentials
```bash
YOUREMAIL=your-email@gmail.com
APPPASSOWRD=your-app-password
