# Homoglyph Attack Generator
This is a simple command-line script to demonstrate a homoglyph attack. It replaces common ASCII (Latin) characters in a string with visually identical (or similar) Cyrillic characters.

This is often used in phishing attacks to create deceptive domain names or usernames (e.g., "paypal.com" vs. "https://www.google.com/search?q=%D1%80%D0%B0%D1%83%D1%80%D0%B0l.com").

Prerequisites
Node.js (which includes node)

How to Use
Clone or download this repository (or just save the .js file).

Open your terminal or command prompt.

Navigate to the directory where the script is saved.

Run the script using node, followed by the script name and the word you want to forge:
node <script_name.js> <word_to_forge>
