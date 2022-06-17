# Pesto Assignments1

<strong>Topics Covered</strong>

- What is the main functionality of the browser?
- High Level Components of a browser
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

## High Level components of a browser.

following are the main components of a browser

- User interface
  - Address bra
  - bookmark Menu
  - Reload button
  - backward/forward button
- Browser Engine :- acts as a mediator between UI and rendering engine
- Rendering engine:- HTML,CSS parsing and rendering
- Networking
- UI backend :- users the operating system's UI
- JavaScript Interpreter :- Execute JavaScript code using
- Data Persistence :- data storage

### What happens when a user enters an URL in the browser and press enter?

When the user enters a URL(Uniform Resource Locator) the browser starts the navigation process in which the URl which is a human readable string in to be converted into a IP(internet protocol) address which is the address of the computer/ server on which the desired resources are located.
This is also called DNS(Domain Name System) lookup. If the use have vested this website before than the IP address of the server might present in the cache. If that's not the case than the request reaches to a DNS server which provide a referral to the IP address of the server which have the desired resource or it can provide the IP of some other DNS server long story sort finally the browser have the IP address associated to the domain name/resource.

### How does the browser fetch the desired result ?

Now the browser have the requested IP address it setup a connection by a _three-way handshake_. This step determine the kind of connection and negotiations over the parameters are done in this step only. ** this is done before setting up the connection** .The ** _three-way handshake_ ** is also known as SYN-SYN-ACK because of the three messages.
![The connection setup](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work/ssl.jpg)

After the connection is established browser make a HTTP GET request on behalf of the user and the serve response with the response It could be anything a HTML file an image a video etc.
