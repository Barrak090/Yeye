PK    �XVY             	 confess/README.mdUT �g# Confess

A Pen created on CodePen.io. Original URL: [https://codepen.io/Barrak090/pen/JjgrGMO](https://codepen.io/Barrak090/pen/JjgrGMO).

PK٫倍   �   PK    �XVY             	 confess/LICENSE.txtUT �gThe MIT License (MIT)

Copyright (c) 2024 Barrak090 (https://codepen.io/Barrak090/pen/JjgrGMO)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
PKOn�_  _  PK    �XVY             	 confess/src/index.htmlUT �g<head>

  <title>Send a Love Letter!</title>

</head>

<body>

  <div class="wrap">

    <h1>Confession Letter</h1>

    <div class="postcard">

      <div class="letter">

        <form action="#" method="post" class="message_form">

          <p class="push">Dear </p><input type="text" id="recipient" name="recipient_name" placeholder="Shak" class="push">

          <p> ,</p><br>

          <label for="message">Message</label><br>

          <textarea id="message" name="message_to_recipient" placeholder="Hello,

I’ve been meaning to tell you something for a while. I’ve developed strong feelings for you, though I’m not sure when it all started. Since grade 9, I’ve admired you, Thinking about you always makes me smile. Even when we don’t talk, being with you brings me immense happiness and brightens my life.Tho sometimes I feel like you're forcing yourself from Talking with me. But I just want you to know you mean alot to me."></textarea><br>

          <p>From</p><br>

          <input type="text" id="sender_name" name="sender" placeholder="your tapss">

          <input type="text" spellcheck="false" id="text" value="https://docs.google.com/forms/d/e/1FAIpQLSfPD8vDNYHZ_6qHE69URsoHy1igwgfqG4V6onYbF1ybj5cY2A/viewform?usp=sf_link" />

          <div id="qrcode"></div>PKi�^b    PK    �XVY             	 confess/src/style.cssUT �g* {

  box-sizing: border-box;

}

body {

  font-family: "Varela Round", "Quicksand", sans-serif;

  background-color: #800020;

}

.postcard {

  width: 800px;

  height: 600px;

  background-color: #f7f7f7;

  margin: 0 auto;

  border-radius: 2%;

  display: flex;

  justify-content: space-between;

  padding: 3em;

  box-shadow: 0.8em 0.8em 15px rgba(0, 0, 0, 0.3);

  -ms-transform: rotate(2.5deg); /* IE 9 */

  -webkit-transform: rotate(2.5deg); /* Chrome, Safari, Opera */

  transform: rotate(2.5deg);

  -moz-transition: all 0.5s ease;

  -webkit-transition: all 0.5s ease;

  -o-transition: all 0.5s ease;

  transition: all 0.5s ease;

}

h1 {

  text-align: center;

  font-size: 5em;

  color: #f7f7f7;

  margin-bottom: -15px;

}

p {

  display: inline;

  font-size: 1.3em;

}

/*animation*/

.postcard:hover,

.postcard:active,

.postcard:focus {

  -ms-transform: rotate(0deg); /* IE 9 */

  -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */

  transform: rotate(0deg);

  -moz-transition: all 0.5s ease;

  -webkit-transition: all 0.5s ease;

  -o-transition: all 0.5s ease;

  transition: all 0.5s ease;

}

/*form*/

input,

textarea {

  border: none;

  border-radius: 4%;

  height: 1.9em;

  padding: 0.7em;

  font-size: 1.3em;

  font-family: "Varela Round", "Quicksand", sans-serif;

}

input:focus,

textarea:focus {

  outline-color: pink;

}

textarea {

  overflow: auto;

  resize: none;

  height: 12em;

  width: 35em;

  margin-top: 0.5em;

  margin-bottom: 2em;

}

.push {

  margin-bottom: 2em;

  margin-top: 0.5em;

}

/*footer*/

footer {

  margin: 2em auto;

  text-align: center;

  font-family: "Varela Round", "Quicksand", sans-serif;

  color: white;

}

footer p {

  font-size: 1em;

  letter-spacing: 1px;

}

* {

  margin: 0;

  padding: 0;

  box-sizing: border-box;

}

body {

  width: 80%;

  height: 100vh;

  margin: auto;

  display: grid;

  place-items: center;

}

h1 {

  font-family: sans-serif;

}

input {

  padding: 10px;

  border-radius: 20px;

  border: 2px solid steelblue;

  font-size: 1.5rem;

  letter-spacing: 2px;

  outline: none;

}PK��P  P  PK    �XVY             	 confess/src/script.jsUT �gconst qrcode = document.getElementById("qrcode");

const textInput = document.getElementById("text");

const qr = new QRCode(qrcode);

//docs.google.com/forms/d/e/1FAIpQLSfPD8vDNYHZ_6qHE69URsoHy1igwgfqG4V6onYbF1ybj5cY2A/viewform?usp=sf_link

https: textInput.oninput = (e) => {

  qr.makeCode(e.target.value.trim());

};

qr.makeCode(textInput.value.trim());PK6Ԍ"f  f  PK    �XVY             	 confess/dist/index.htmlUT �g<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Confess</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<head>

  <title>Send a Love Letter!</title>

</head>

<body>

  <div class="wrap">

    <h1>Confession Letter</h1>

    <div class="postcard">

      <div class="letter">

        <form action="#" method="post" class="message_form">

          <p class="push">Dear </p><input type="text" id="recipient" name="recipient_name" placeholder="Shak" class="push">

          <p> ,</p><br>

          <label for="message">Message</label><br>

          <textarea id="message" name="message_to_recipient" placeholder="Hello,

I’ve been meaning to tell you something for a while. I’ve developed strong feelings for you, though I’m not sure when it all started. Since grade 9, I’ve admired you, Thinking about you always makes me smile. Even when we don’t talk, being with you brings me immense happiness and brightens my life.Tho sometimes I feel like you're forcing yourself from Talking with me. But I just want you to know you mean alot to me."></textarea><br>

          <p>From</p><br>

          <input type="text" id="sender_name" name="sender" placeholder="your tapss">

          <input type="text" spellcheck="false" id="text" value="https://docs.google.com/forms/d/e/1FAIpQLSfPD8vDNYHZ_6qHE69URsoHy1igwgfqG4V6onYbF1ybj5cY2A/viewform?usp=sf_link" />

          <div id="qrcode"></div>
<!-- partial -->
  <script  src="./script.js"></script>

</body>
</html>
PKG��;      PK    �XVY             	 confess/dist/style.cssUT �g* {

  box-sizing: border-box;

}

body {

  font-family: "Varela Round", "Quicksand", sans-serif;

  background-color: #800020;

}

.postcard {

  width: 800px;

  height: 600px;

  background-color: #f7f7f7;

  margin: 0 auto;

  border-radius: 2%;

  display: flex;

  justify-content: space-between;

  padding: 3em;

  box-shadow: 0.8em 0.8em 15px rgba(0, 0, 0, 0.3);

  -ms-transform: rotate(2.5deg); /* IE 9 */

  -webkit-transform: rotate(2.5deg); /* Chrome, Safari, Opera */

  transform: rotate(2.5deg);

  -moz-transition: all 0.5s ease;

  -webkit-transition: all 0.5s ease;

  -o-transition: all 0.5s ease;

  transition: all 0.5s ease;

}

h1 {

  text-align: center;

  font-size: 5em;

  color: #f7f7f7;

  margin-bottom: -15px;

}

p {

  display: inline;

  font-size: 1.3em;

}

/*animation*/

.postcard:hover,

.postcard:active,

.postcard:focus {

  -ms-transform: rotate(0deg); /* IE 9 */

  -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */

  transform: rotate(0deg);

  -moz-transition: all 0.5s ease;

  -webkit-transition: all 0.5s ease;

  -o-transition: all 0.5s ease;

  transition: all 0.5s ease;

}

/*form*/

input,

textarea {

  border: none;

  border-radius: 4%;

  height: 1.9em;

  padding: 0.7em;

  font-size: 1.3em;

  font-family: "Varela Round", "Quicksand", sans-serif;

}

input:focus,

textarea:focus {

  outline-color: pink;

}

textarea {

  overflow: auto;

  resize: none;

  height: 12em;

  width: 35em;

  margin-top: 0.5em;

  margin-bottom: 2em;

}

.push {

  margin-bottom: 2em;

  margin-top: 0.5em;

}

/*footer*/

footer {

  margin: 2em auto;

  text-align: center;

  font-family: "Varela Round", "Quicksand", sans-serif;

  color: white;

}

footer p {

  font-size: 1em;

  letter-spacing: 1px;

}

* {

  margin: 0;

  padding: 0;

  box-sizing: border-box;

}

body {

  width: 80%;

  height: 100vh;

  margin: auto;

  display: grid;

  place-items: center;

}

h1 {

  font-family: sans-serif;

}

input {

  padding: 10px;

  border-radius: 20px;

  border: 2px solid steelblue;

  font-size: 1.5rem;

  letter-spacing: 2px;

  outline: none;

}PK��P  P  PK    �XVY             	 confess/dist/script.jsUT �gconst qrcode = document.getElementById("qrcode");

const textInput = document.getElementById("text");

const qr = new QRCode(qrcode);

//docs.google.com/forms/d/e/1FAIpQLSfPD8vDNYHZ_6qHE69URsoHy1igwgfqG4V6onYbF1ybj5cY2A/viewform?usp=sf_link

https: textInput.oninput = (e) => {

  qr.makeCode(e.target.value.trim());

};

qr.makeCode(textInput.value.trim());PK6Ԍ"f  f  PK    �XVY٫倍   �    	         ��    confess/README.mdUT �gPK    �XVYOn�_  _   	         ���   confess/LICENSE.txtUT �gPK    �XVYi�^b     	         ��~  confess/src/index.htmlUT �gPK    �XVY��P  P   	         ���
  confess/src/style.cssUT �gPK    �XVY6Ԍ"f  f   	         ��w  confess/src/script.jsUT �gPK    �XVYG��;       	         ��)  confess/dist/index.htmlUT �gPK    �XVY��P  P   	         ���  confess/dist/style.cssUT �gPK    �XVY6Ԍ"f  f   	         ��4$  confess/dist/script.jsUT �gPK      _  �%    