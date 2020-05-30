# HTTP Request Header Parsing Service - FCC

Welcome, you've arrived the home of a HTTP Request Header Parser, created as an FCC APIS & Microservices challenge.

### API Usage

The header parser API responds to HTML GET methods, and is accessible. via the following endpoint:
`https://pf-header-parser.ts.r.appspot.com/api/whoami`

### Example Output

The API returns the language, the user agent string and the source IP address of the request.  This is returned as JSON illustrated below:
`{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`
