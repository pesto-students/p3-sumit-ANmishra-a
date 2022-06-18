# Pesto Assignments1

<strong>Topics Covered</strong>

- What is the main functionality of the browser? 
- High Level Components of a browser
-What happens when a user enters an URL in the        browser and press enter?
- How does the browser fetch the desired result ?
- Rendering engine and its use.
- Parsers (HTML, CSS, etc)
- Script Processors
- Tree construction
- Order of script processing
- Layout and Painting
- Diagram explaining the process.

---

## What is the main functionality of the browser?

The **main** functionality of the browser is to provide the user with the desired web resource by making request to the server and presenting it on the screen.

## High Level components of a browser

![image](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=500)
following are the main components of a browser

- User interface
  - Address bra
  - bookmark Menu
  - Reload button
  - backward/forward button
- Browser Engine :- acts as a mediator between UI and rendering engine
- Rendering engine:- HTML,CSS parsing and rendering
- Networking :- responsible for managing network calls
- UI backend :- users the operating systems UI
- JavaScript Interpreter :- Execute JavaScript code using
- Data Persistence :- data storage

### What happens when a user enters an URL in the browser and press enter?

When the user enters a URL(Uniform Resource Locator) the browser starts the navigation process in which the URl which is a human readable string in to be converted into a IP(internet protocol) address which is the address of the computer/ server on which the desired resources are located.
This i also called DNS(Domain Name System) lookup. If the use have vested this website before than the IP address of the server might present in the cache. If thats not the case than the request reaches to a DNS server which provide a referral to the IP address of the server which have the desired resource or it can provide the IP of some other DNS server long story sort finally the browser have the IP address associated to the domain name/resource.

### How does the browser fetch the desired result ?

Now the browser have the requested IP address it setup a connection by a _three-way handshake_. This step determine the kind of connection and negotiations over the parameters are done in this step only. <strong> "This is done before setting up the connection"</strong>  The <strong> _three-way handshake_ </strong> is also known as SYN-SYN-ACK because of the three messages.
![The connection setup](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work/ssl.jpg)

After the connection is established browser make a HTTP GET request on behalf of the user and the serve response with the response It could be anything a HTML file an image a video etc.

---
## Rendering Engine 
Rendering engine is responsible for rendering a specefic web page requestd by the user on the screen and the following steps are taken to do so
#### Parsing 
Now that the browser have the first pack(14kb) of data it satat the parsing the data. Parsing of data means converting the data into _DOM_ (Document Object Model) and _CSSOM_ (CSS Object Model).
##### Building DOM tree
In HTML parsing the browser do Tokenization and tree construction the `<html>` element is the root node. This tree reflects the relationsip between the tags and child node.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Anuj</title>
  </head>
  <body>
    <h1>Title</h1>
    <p>paragrapg <a hrf='#' ></a></p>
    <div> <img alt= "image" src ="#"/></div>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```
So DOM tree for this will look something like this :
![](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work/dom.gif)
So the pearcing continue until non-blocking element are in the process. If a blocking resource such as a `<script>` tag without `async` or `defer` attribute is encountered browser bring out its backup i.e Preload scanner.
While the browser is busy building DOM tree Preload scanner parse through the content and request for high priority resources. 
##### Building CSSOM tree
It is similar to DOM as both are trees but have different data stracture. The browser covert the CSS rule into a map of style that it will use for styling these node.
Example of CSSOM tree
![](https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/keK3wDv9k2KzJA9QubFx.png?auto=format&w=650)
#### Javascript Compilation
While css is being parsed and CSSOM tree is created, JS files that were downloded by preloader are being interpreted, compiled, parsed and executed.
#### Render Tree
Render tree is a combination of DOM tree and CSSOM tree and it only contaions the nodes that are required to render the page i.e it emit script tag  meta tag and tags that have a hidden property set by CSS.
![](https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/b6Z2Gu6UD1x1imOu1tJV.png?auto=format&w=845)

#### Layout
We have our render tree now that have the elements and associated style to it, all it need is geometry and position on the screen and this is done layout step of rendering.
Nearly everything on the web page is a box. With different devices and desktop preferences, there are an unlimited number of different viewport sizes.
During this phase, taking the viewport size into consideration, the browser determines what the dimensions of all the different boxes will be on the screen.

#### Paint

The browser now convert each box calculated in the layout phase to actual pixels on the screen and this process is called Panting.
